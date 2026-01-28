# IngestionRunDataContractDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**runID** | **string** |  | [default to undefined]
**latestStatus** | **string** |  | [default to undefined]
**lastUpdatedAt** | **string** |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**trigger** | **string** |  | [default to undefined]
**sources** | **Array&lt;string&gt;** |  | [default to undefined]
**dateStamps** | **Array&lt;string&gt;** |  | [default to undefined]
**runHistory** | [**Array&lt;IngestionRunDataContractDtoRunHistoryInner&gt;**](IngestionRunDataContractDtoRunHistoryInner.md) |  | [default to undefined]
**granularHistory** | [**Array&lt;IngestionRunDataContractDtoGranularHistoryInner&gt;**](IngestionRunDataContractDtoGranularHistoryInner.md) |  | [default to undefined]

## Example

```typescript
import { IngestionRunDataContractDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: IngestionRunDataContractDto = {
    runID,
    latestStatus,
    lastUpdatedAt,
    createdAt,
    trigger,
    sources,
    dateStamps,
    runHistory,
    granularHistory,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
