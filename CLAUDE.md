# CLAUDE.md - SDK Regeneration Guide for AI Agents

This document provides instructions for AI agents (Claude, etc.) on how to maintain and regenerate this SDK.

**IMPORTANT**: Read this entire document before making changes to this repository.

## Overview

This SDK is auto-generated from the [Statsig Console API OpenAPI spec](https://api.statsig.com/openapi/20240601.json) using [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator).

**Package name**: `@emmanuelnk/statsig-console-sdk-ts`
**Repository**: https://github.com/emmanuelnk/statsig-console-sdk-ts
**npm**: https://www.npmjs.com/package/@emmanuelnk/statsig-console-sdk-ts

## Prerequisites

- **Java JDK 11+** - Required by OpenAPI Generator
  - macOS: Download from https://jdk.java.net/ and extract to `~/java/`
  - Set `JAVA_HOME` before running generator commands
- **Node.js 18+**
- **OpenAPI Generator CLI**: `npm install -g @openapitools/openapi-generator-cli`

## Regenerating the SDK

### 1. Download the latest OpenAPI spec

```bash
curl -sL "https://api.statsig.com/openapi/20240601.json" -o openapi.json
```

### 2. Set up Java (if not in PATH)

```bash
export JAVA_HOME=~/java/jdk-25.0.2.jdk/Contents/Home  # Adjust version as needed
export PATH="$JAVA_HOME/bin:$PATH"
java -version  # Verify it works
```

### 3. Generate the SDK

**IMPORTANT**: Do NOT delete existing files first. The generator will overwrite them.

```bash
openapi-generator-cli generate \
  -i openapi.json \
  -g typescript-axios \
  -o . \
  --additional-properties=npmName=@emmanuelnk/statsig-console-sdk-ts,npmVersion=0.1.0,supportsES6=true,withSeparateModelsAndApi=true,apiPackage=api,modelPackage=models,useSingleRequestParameter=true
```

**Key generator options:**
- `useSingleRequestParameter=true` - Methods accept a single request object instead of many positional args (cleaner API)
- `withSeparateModelsAndApi=true` - Separates API classes and models into different folders
- `supportsES6=true` - Generates ES6 compatible code

### 4. Fix duplicate enum exports (REQUIRED)

After generation, there are duplicate enum exports that cause TypeScript compilation errors. You MUST fix these:

**In `api/experiments-warehouse-native-api.ts`**, find and replace the duplicate enum at the END of the file:

```typescript
// DELETE these lines:
export const ConsoleV1ExperimentsIdLoadPulsePostRefreshEnum = {
    Full: 'full',
    Incremental: 'incremental',
    Metric: 'metric'
} as const;
export type ConsoleV1ExperimentsIdLoadPulsePostRefreshEnum = typeof ConsoleV1ExperimentsIdLoadPulsePostRefreshEnum[keyof typeof ConsoleV1ExperimentsIdLoadPulsePostRefreshEnum];

// REPLACE with:
// Note: ConsoleV1ExperimentsIdLoadPulsePostRefreshEnum is exported from experiments-api.ts
import { ConsoleV1ExperimentsIdLoadPulsePostRefreshEnum } from './experiments-api';
```

**In `api/metrics-warehouse-native-api.ts`**, find and replace the duplicate enum at the END of the file:

```typescript
// DELETE these lines:
export const ConsoleV1MetricsIdReloadPostIncrementalEnum = {
    True: 'true',
    False: 'false'
} as const;
export type ConsoleV1MetricsIdReloadPostIncrementalEnum = typeof ConsoleV1MetricsIdReloadPostIncrementalEnum[keyof typeof ConsoleV1MetricsIdReloadPostIncrementalEnum];

// REPLACE with:
// Note: ConsoleV1MetricsIdReloadPostIncrementalEnum is exported from metrics-api.ts
import { ConsoleV1MetricsIdReloadPostIncrementalEnum } from './metrics-api';
```

### 5. Update package.json

After regeneration, the generator resets `package.json`. Update these fields:

```json
{
  "name": "@emmanuelnk/statsig-console-sdk-ts",
  "version": "0.x.x-beta.x",  // Increment appropriately
  "description": "TypeScript/Node.js SDK for Statsig Console API - CRUD operations for console.statsig.com",
  "author": "Emmanuel Nsubuga <emmanuelnk@gmail.com>",
  "repository": {
    "type": "git",
    "url": "https://github.com/emmanuelnk/statsig-console-sdk-ts.git"
  },
  "license": "MIT"
}
```

### 6. Update .npmignore

The generator may reset `.npmignore`. Ensure it excludes source files and only publishes `dist/`:

```
# Source files (we publish compiled dist/)
/*.ts
/api/
/models/

# OpenAPI generator artifacts
.openapi-generator/
.openapi-generator-ignore
openapi.json
openapitools.json
git_push.sh

# IDE and editor files
.claude/
.idea/
.vscode/

# Build and dev files
tsconfig.json
tsconfig.esm.json
node_modules/

# Docs (keep README.md and CLAUDE.md)
docs/
```

### 7. Update README.md

The README is auto-generated. Update the header:

```markdown
## @emmanuelnk/statsig-console-sdk-ts

TypeScript/Node.js SDK for Statsig Console API...
```

And the install command:
```
npm install @emmanuelnk/statsig-console-sdk-ts@beta --save
```

### 8. Build and test

```bash
npm install
npm run build
```

### 9. Publish

```bash
# Dry run first - ALWAYS do this
npm publish --access public --tag beta --dry-run

# Check that only dist/ files are included, not source .ts files

# Publish (requires npm auth with 2FA bypass token)
npm publish --access public --tag beta
```

## File Structure

```
├── api/                    # Generated API client classes (32 files)
├── models/                 # Generated TypeScript interfaces (507 files)
├── dist/                   # Compiled output (CommonJS + ESM) - NOT committed
├── docs/                   # Generated API documentation (markdown)
├── openapi.json            # OpenAPI spec - NOT committed
├── package.json            # npm package config
├── tsconfig.json           # TypeScript config (CommonJS)
├── tsconfig.esm.json       # TypeScript config (ESM)
├── .npmignore              # Files to exclude from npm package
├── CLAUDE.md               # This file - instructions for AI agents
└── README.md               # Auto-generated, update after regeneration
```

## Common Mistakes to Avoid

1. **DO NOT delete files before regenerating** - The generator overwrites existing files. If you delete first, you may lose custom changes.

2. **DO NOT forget to fix duplicate enums** - The build will fail if you skip step 4.

3. **DO NOT commit `dist/`** - It's built automatically via the `prepare` script during `npm install`.

4. **DO NOT commit `openapi.json`** - It's large (1MB+) and can be downloaded.

5. **DO NOT use positional args in the generator command** - Always use the exact command in step 3.

6. **ALWAYS dry-run before publishing** - Check that only compiled `dist/` files are included.

## Publishing Checklist

Before publishing a new version:

- [ ] Fix duplicate enum exports in `experiments-warehouse-native-api.ts` and `metrics-warehouse-native-api.ts`
- [ ] Update version in `package.json` (use semver: `0.x.x-beta.x` for betas)
- [ ] Update `package.json` name, repository, author, license
- [ ] Update `.npmignore` if reset by generator
- [ ] Update README.md header and install command
- [ ] Run `npm run build` successfully (no TypeScript errors)
- [ ] Run `npm publish --dry-run` and verify only `dist/` files are included
- [ ] Commit and push all changes
- [ ] Publish to npm with `--tag beta` for pre-release versions

## Usage Example

```typescript
import { Configuration, GatesApi } from '@emmanuelnk/statsig-console-sdk-ts';

const config = new Configuration({
  apiKey: 'console-XXXXXXXXXXXX', // From console.statsig.com/api_keys
});

const gatesApi = new GatesApi(config);

// List gates with clean object-based API
const gates = await gatesApi.consoleV1GatesGet({
  limit: 10,
  page: 1,
});

// Create a gate
await gatesApi.consoleV1GatesPost({
  gateCreateDto: {
    id: 'my_feature_gate',
    name: 'My Feature Gate',
    isEnabled: true,
  },
});
```
