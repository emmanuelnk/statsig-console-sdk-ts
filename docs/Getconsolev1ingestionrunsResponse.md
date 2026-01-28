# Getconsolev1ingestionrunsResponse

Response for getconsolev1ingestionruns

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | A simple string explaining the result of the operation. | [default to undefined]
**data** | [**Array&lt;IngestionRunDataContractDto&gt;**](IngestionRunDataContractDto.md) | Array of IngestionRunDataContractDto items. | [default to undefined]
**pagination** | [**PaginationResponseMetadataDto**](PaginationResponseMetadataDto.md) |  | [default to undefined]

## Example

```typescript
import { Getconsolev1ingestionrunsResponse } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: Getconsolev1ingestionrunsResponse = {
    message,
    data,
    pagination,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
