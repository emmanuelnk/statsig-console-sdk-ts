# Getconsolev1metricslistResponse

Response for getconsolev1metricslist

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | A simple string explaining the result of the operation. | [default to undefined]
**data** | [**Array&lt;ExternalMetricDefinitionContractDto&gt;**](ExternalMetricDefinitionContractDto.md) | Array of ExternalMetricDefinitionContractDto items. | [default to undefined]
**pagination** | [**PaginationResponseMetadataDto**](PaginationResponseMetadataDto.md) |  | [default to undefined]

## Example

```typescript
import { Getconsolev1metricslistResponse } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: Getconsolev1metricslistResponse = {
    message,
    data,
    pagination,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
