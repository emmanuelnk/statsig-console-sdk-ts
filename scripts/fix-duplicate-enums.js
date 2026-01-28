#!/usr/bin/env node
/**
 * Fix duplicate enum exports in generated SDK
 *
 * Problem: OpenAPI Generator creates duplicate enum definitions in both the
 * base API file and the warehouse-native API files, causing TypeScript errors.
 *
 * Solution: Remove the duplicate definitions from the warehouse-native files
 * and import them from the base files instead.
 */

const fs = require('fs');
const path = require('path');

const apiDir = path.join(__dirname, '..', 'api');

const fixes = [
  {
    file: 'experiments-warehouse-native-api.ts',
    enumName: 'ConsoleV1ExperimentsIdLoadPulsePostRefreshEnum',
    importFrom: './experiments-api',
  },
  {
    file: 'metrics-warehouse-native-api.ts',
    enumName: 'ConsoleV1MetricsIdReloadPostIncrementalEnum',
    importFrom: './metrics-api',
  },
];

for (const fix of fixes) {
  const filePath = path.join(apiDir, fix.file);

  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${fix.file} (not found)`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Pattern to match the enum definition at the end of the file
  // e.g., export const ConsoleV1ExperimentsIdLoadPulsePostRefreshEnum = { ... } as const;
  //       export type ConsoleV1ExperimentsIdLoadPulsePostRefreshEnum = ...;
  const enumPattern = new RegExp(
    `export const ${fix.enumName} = \\{[^}]+\\} as const;\\s*` +
    `export type ${fix.enumName} = typeof ${fix.enumName}\\[keyof typeof ${fix.enumName}\\];`,
    'g'
  );

  if (!enumPattern.test(content)) {
    console.log(`Skipping ${fix.file} (enum pattern not found)`);
    continue;
  }

  // Remove the duplicate enum definition
  content = content.replace(enumPattern, `// Note: ${fix.enumName} is exported from ${fix.importFrom}`);

  // Add import at the top (after the last import statement)
  const importStatement = `import { ${fix.enumName} } from '${fix.importFrom}';\n`;

  // Find the last import statement and add our import after it
  const lastImportMatch = content.match(/^import .+ from ['"][^'"]+['"];?\s*$/gm);
  if (lastImportMatch) {
    const lastImport = lastImportMatch[lastImportMatch.length - 1];
    content = content.replace(lastImport, lastImport + '\n' + importStatement);
  }

  // Also need to re-export the enum so consumers can still import it from this file
  // Add export at the end
  content = content.trimEnd() + `\n\nexport { ${fix.enumName} };\n`;

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed: ${fix.file} (removed duplicate ${fix.enumName})`);
}

console.log('Done!');
