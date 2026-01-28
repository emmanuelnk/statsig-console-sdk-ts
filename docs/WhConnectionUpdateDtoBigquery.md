# WhConnectionUpdateDtoBigquery


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**privateKey** | **string** | Private key for a first-party service account to use for the BigQuery connection. | [optional] [default to undefined]
**project** | **string** | The project that Statsig will use to run queries. | [optional] [default to undefined]
**consoleComputeProject** | **string** | An optional project that Statsig will use to run interactive queries made from the Console. | [optional] [default to undefined]
**stagingDataset** | **string** | Statsig will use this dataset to save intermediate tables in the experimentation pipeline. Must be a dataset that the service user has write access to. | [optional] [default to undefined]

## Example

```typescript
import { WhConnectionUpdateDtoBigquery } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: WhConnectionUpdateDtoBigquery = {
    privateKey,
    project,
    consoleComputeProject,
    stagingDataset,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
