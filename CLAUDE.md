# CLAUDE.md - SDK Regeneration Guide for AI Agents

This document provides instructions for AI agents (Claude, etc.) on how to maintain and regenerate this SDK.

**IMPORTANT**: Read this entire document before making changes to this repository.

## Overview

This SDK is auto-generated from the [Statsig Console API OpenAPI spec](https://api.statsig.com/openapi/20240601.json) using [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator).

**Package name**: `@emmanuelnk/statsig-console-sdk-ts`
**Repository**: https://github.com/emmanuelnk/statsig-console-sdk-ts
**npm**: https://www.npmjs.com/package/@emmanuelnk/statsig-console-sdk-ts

## Project Management

This project uses **[Projen](https://projen.io/)** for project configuration. All configuration is defined in `.projenrc.ts`.

**IMPORTANT**: Do NOT manually edit these files - they are managed by Projen:
- `package.json`
- `tsconfig.json`
- `tsconfig.esm.json`
- `.gitignore`
- `.npmignore`
- `.github/workflows/*`

To make changes, edit `.projenrc.ts` and run `pnpm exec tsx .projenrc.ts`.

## Prerequisites

- **Node.js 18+**
- **pnpm** - Package manager
- **Java JDK 11+** - Required by OpenAPI Generator (for SDK regeneration only)
  - macOS: Download from https://jdk.java.net/ and extract to `~/java/`
  - Set `JAVA_HOME` before running generator commands
- **OpenAPI Generator CLI**: `pnpm add -g @openapitools/openapi-generator-cli`

## Quick Start

```bash
# Install dependencies
pnpm install

# Build the SDK
pnpm run compile

# Run all checks (build + package)
pnpm run build
```

## Regenerating the SDK

The SDK can be regenerated using projen tasks:

### Option 1: Full regeneration (recommended)

```bash
# Download latest spec and regenerate
pnpm run sdk:regenerate
```

### Option 2: Step by step

```bash
# 1. Download the latest OpenAPI spec
pnpm run sdk:download-spec

# 2. Set up Java (if not in PATH)
export JAVA_HOME=~/java/jdk-25.0.2.jdk/Contents/Home  # Adjust version as needed
export PATH="$JAVA_HOME/bin:$PATH"
java -version  # Verify it works

# 3. Generate the SDK
pnpm run sdk:generate
```

### After regeneration: Fix duplicate enum exports (REQUIRED)

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

### After regeneration: Restore Projen files

The OpenAPI generator may overwrite some files. Restore them:

```bash
# Restore projen-managed files
pnpm exec tsx .projenrc.ts

# Rebuild
pnpm run compile
```

## Releasing

This project uses automated releases via GitHub Actions.

### Automatic Beta Releases (on push to master)

Every push to `master` triggers an automatic release:
1. Version is bumped automatically (with `-beta.X` suffix)
2. Published to npm with `beta` tag
3. GitHub release created

### Manual Beta Release

Trigger via GitHub Actions > "manual-beta-release" workflow:
- Input: version (e.g., `0.2.0-beta.1`)
- Publishes to npm with `beta` tag

### Stable Release

Trigger via GitHub Actions > "stable-release" workflow:
- Input: version (e.g., `0.2.0`)
- Publishes to npm with `latest` tag
- Creates GitHub release with auto-generated notes

### Required Secrets

- `NPM_TOKEN` - npm automation token with publish access

## Available Commands

```bash
pnpm run build          # Full build (compile + package)
pnpm run compile        # Compile TypeScript (CommonJS + ESM)
pnpm run package        # Package for npm
pnpm run release        # Create a release (used by CI)
pnpm run upgrade        # Upgrade dependencies

# SDK regeneration
pnpm run sdk:download-spec  # Download OpenAPI spec
pnpm run sdk:generate       # Generate SDK from spec
pnpm run sdk:regenerate     # Full regeneration (download + generate)
```

## File Structure

```
├── .projenrc.ts            # Projen configuration (edit this!)
├── .projen/                # Projen internal files
├── .github/workflows/      # CI/CD workflows (generated by Projen)
│   ├── build.yml           # PR build checks
│   ├── release.yml         # Automatic release on push to master
│   ├── manual-beta-release.yml  # Manual beta release
│   ├── stable-release.yml  # Manual stable release
│   └── upgrade-master.yml  # Dependency upgrades
├── api/                    # Generated API client classes
├── models/                 # Generated TypeScript interfaces
├── dist/                   # Compiled output (CommonJS + ESM) - NOT committed
├── docs/                   # Generated API documentation
├── openapi.json            # OpenAPI spec - NOT committed
├── package.json            # npm config (generated by Projen)
├── tsconfig.json           # TypeScript config (generated by Projen)
├── tsconfig.esm.json       # ESM TypeScript config (generated by Projen)
├── .npmignore              # npm publish exclusions (generated by Projen)
├── CLAUDE.md               # This file
└── README.md               # Package documentation
```

## Common Mistakes to Avoid

1. **DO NOT manually edit projen-managed files** - Edit `.projenrc.ts` instead and run `pnpm exec tsx .projenrc.ts`

2. **DO NOT delete files before regenerating SDK** - The generator overwrites existing files

3. **DO NOT forget to fix duplicate enums** - The build will fail after SDK regeneration

4. **DO NOT commit `dist/`** - It's built automatically

5. **DO NOT commit `openapi.json`** - It's large (1MB+) and can be downloaded

6. **DO NOT push directly to master without testing** - It triggers an automatic release

## Publishing Checklist

Before pushing changes that will trigger a release:

- [ ] Fix duplicate enum exports (if SDK was regenerated)
- [ ] Run `pnpm run build` successfully
- [ ] Verify changes are correct
- [ ] Commit and push to master (triggers automatic beta release)

For stable releases:
- [ ] Go to GitHub Actions
- [ ] Run "stable-release" workflow with the desired version

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
