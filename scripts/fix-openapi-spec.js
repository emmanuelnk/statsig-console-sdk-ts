#!/usr/bin/env node
/**
 * Fix OpenAPI spec to generate better TypeScript types
 *
 * Problem: The Statsig OpenAPI spec uses allOf to extend PaginationResponseWithMessage
 * with specific data types, but OpenAPI Generator doesn't handle this well and generates
 * `data: Array<object>` instead of `data: Array<SpecificDto>`.
 *
 * Solution: Pre-process the spec to create dedicated response types that properly
 * reference the specific DTOs.
 */

const fs = require('fs');
const path = require('path');

const specPath = path.join(__dirname, '..', 'openapi.json');

if (!fs.existsSync(specPath)) {
  console.error('openapi.json not found. Run sdk:download-spec first.');
  process.exit(1);
}

const spec = JSON.parse(fs.readFileSync(specPath, 'utf8'));

let fixedCount = 0;

// Find all responses that use allOf with PaginationResponseWithMessage
for (const [pathKey, pathValue] of Object.entries(spec.paths)) {
  for (const [method, operation] of Object.entries(pathValue)) {
    if (typeof operation !== 'object' || !operation.responses) continue;

    const response200 = operation.responses['200'];
    if (!response200?.content?.['application/json']?.schema?.allOf) continue;

    const schema = response200.content['application/json'].schema;
    const allOf = schema.allOf;

    // Check if this is extending PaginationResponseWithMessage with a data override
    const baseRef = allOf.find(item => item.$ref === '#/components/schemas/PaginationResponseWithMessage');
    const dataOverride = allOf.find(item => item.properties?.data?.items?.$ref);

    if (!baseRef || !dataOverride) continue;

    // Extract the DTO reference
    const dtoRef = dataOverride.properties.data.items.$ref;
    const dtoName = dtoRef.split('/').pop();

    // Create a new schema name for this specific response
    const operationId = operation.operationId || `${method}${pathKey.replace(/[^a-zA-Z0-9]/g, '')}`;
    const responseName = `${capitalizeFirst(operationId)}Response`;

    // Create the new response schema
    spec.components.schemas[responseName] = {
      type: 'object',
      description: `Response for ${operationId}`,
      properties: {
        message: {
          type: 'string',
          description: 'A simple string explaining the result of the operation.'
        },
        data: {
          type: 'array',
          items: {
            $ref: dtoRef
          },
          description: `Array of ${dtoName} items.`
        },
        pagination: {
          $ref: '#/components/schemas/PaginationResponseMetadataDto'
        }
      },
      required: ['message', 'data', 'pagination']
    };

    // Update the response to use the new schema
    response200.content['application/json'].schema = {
      $ref: `#/components/schemas/${responseName}`
    };

    console.log(`Fixed: ${method.toUpperCase()} ${pathKey} -> ${responseName} (data: ${dtoName}[])`);
    fixedCount++;
  }
}

// Write the fixed spec
fs.writeFileSync(specPath, JSON.stringify(spec, null, 2), 'utf8');

console.log(`\nFixed ${fixedCount} response types.`);

function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
