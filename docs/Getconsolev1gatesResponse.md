# Getconsolev1gatesResponse

Response for getconsolev1gates

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | A simple string explaining the result of the operation. | [default to undefined]
**data** | [**Array&lt;ExternalGateDto&gt;**](ExternalGateDto.md) | Array of ExternalGateDto items. | [default to undefined]
**pagination** | [**PaginationResponseMetadataDto**](PaginationResponseMetadataDto.md) |  | [default to undefined]

## Example

```typescript
import { Getconsolev1gatesResponse } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: Getconsolev1gatesResponse = {
    message,
    data,
    pagination,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
