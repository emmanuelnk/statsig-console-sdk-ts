# @emmanuelnk/statsig-console-sdk-ts

[![npm version](https://badge.fury.io/js/@emmanuelnk%2Fstatsig-console-sdk-ts.svg)](https://www.npmjs.com/package/@emmanuelnk/statsig-console-sdk-ts)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

TypeScript/Node.js SDK for the [Statsig Console API](https://docs.statsig.com/console-api/introduction) - programmatically manage feature gates, experiments, dynamic configs, and more.

## Installation

```bash
npm install @emmanuelnk/statsig-console-sdk-ts
# or
pnpm add @emmanuelnk/statsig-console-sdk-ts
# or
yarn add @emmanuelnk/statsig-console-sdk-ts
```

## Quick Start

```typescript
import { Configuration, GatesApi } from '@emmanuelnk/statsig-console-sdk-ts';

// Get your Console API key from https://console.statsig.com/api_keys
const config = new Configuration({
  apiKey: 'console-XXXXXXXXXXXX',
});

const gatesApi = new GatesApi(config);

// List all feature gates
const response = await gatesApi.consoleV1GatesGet({ limit: 10 });
console.log(response.data);

// Create a new feature gate
await gatesApi.consoleV1GatesPost({
  gateCreateDto: {
    name: 'my_new_gate',
    description: 'Controls access to new feature',
  },
});
```

## Available APIs

| API | Description |
|-----|-------------|
| `GatesApi` | Feature gates (create, read, update, delete, rules) |
| `ExperimentsApi` | A/B experiments and assignment sources |
| `DynamicConfigsApi` | Dynamic configurations |
| `MetricsApi` | Metrics and metric sources |
| `SegmentsApi` | User segments |
| `EventsApi` | Event definitions |
| `UsersApi` | User overrides and lookups |
| `AuditLogsApi` | Audit log access |
| `AutotunesApi` | Autotune experiments |
| `LayersApi` | Experiment layers |
| `HoldoutsApi` | Holdout groups |
| `TargetAppsApi` | Target applications |
| `TagsApi` | Resource tagging |
| `ReportsApi` | Reports and analytics |

See the [docs/](./docs) folder for detailed API documentation.

## Authentication

The SDK uses the Statsig Console API key for authentication. You can find your API key at [console.statsig.com/api_keys](https://console.statsig.com/api_keys).

```typescript
const config = new Configuration({
  apiKey: 'console-XXXXXXXXXXXX',
});
```

## CommonJS Usage

```javascript
const { Configuration, GatesApi } = require('@emmanuelnk/statsig-console-sdk-ts');

const config = new Configuration({
  apiKey: 'console-XXXXXXXXXXXX',
});

const gatesApi = new GatesApi(config);
```

## API Reference

For the complete Statsig Console API documentation, visit: https://docs.statsig.com/console-api/introduction

## License

MIT
