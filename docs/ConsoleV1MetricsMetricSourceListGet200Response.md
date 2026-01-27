# ConsoleV1MetricsMetricSourceListGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | A simple string explaining the result of the operation. | [default to undefined]
**data** | [**Array&lt;MetricSourceContractDto&gt;**](MetricSourceContractDto.md) |  | [default to undefined]
**pagination** | [**PaginationResponseMetadataDto**](PaginationResponseMetadataDto.md) | Pagination metadata for checking if there is next page for example. | [default to undefined]

## Example

```typescript
import { ConsoleV1MetricsMetricSourceListGet200Response } from 'statsig-console-sdk-nodejs';

const instance: ConsoleV1MetricsMetricSourceListGet200Response = {
    message,
    data,
    pagination,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
