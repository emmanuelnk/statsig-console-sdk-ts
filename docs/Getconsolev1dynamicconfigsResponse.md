# Getconsolev1dynamicconfigsResponse

Response for getconsolev1dynamicconfigs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | A simple string explaining the result of the operation. | [default to undefined]
**data** | [**Array&lt;DynamicConfigDto&gt;**](DynamicConfigDto.md) | Array of DynamicConfigDto items. | [default to undefined]
**pagination** | [**PaginationResponseMetadataDto**](PaginationResponseMetadataDto.md) |  | [default to undefined]

## Example

```typescript
import { Getconsolev1dynamicconfigsResponse } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: Getconsolev1dynamicconfigsResponse = {
    message,
    data,
    pagination,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
