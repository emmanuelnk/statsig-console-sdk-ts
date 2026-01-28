# IngestionStatusDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ds** | **string** |  | [optional] [default to undefined]
**ingestion_dataset** | **string** |  | [default to undefined]
**ingestion_source** | **string** |  | [default to undefined]
**source_name** | **string** |  | [default to undefined]
**message** | **string** |  | [default to undefined]
**error_message** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [default to undefined]
**rowCount** | **number** |  | [optional] [default to undefined]
**metricCount** | **number** |  | [optional] [default to undefined]
**timestamp** | **string** |  | [default to undefined]

## Example

```typescript
import { IngestionStatusDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: IngestionStatusDto = {
    ds,
    ingestion_dataset,
    ingestion_source,
    source_name,
    message,
    error_message,
    status,
    rowCount,
    metricCount,
    timestamp,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
