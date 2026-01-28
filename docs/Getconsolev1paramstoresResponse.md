# Getconsolev1paramstoresResponse

Response for getconsolev1paramstores

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | A simple string explaining the result of the operation. | [default to undefined]
**data** | [**Array&lt;ParamStoreDto&gt;**](ParamStoreDto.md) | Array of ParamStoreDto items. | [default to undefined]
**pagination** | [**PaginationResponseMetadataDto**](PaginationResponseMetadataDto.md) |  | [default to undefined]

## Example

```typescript
import { Getconsolev1paramstoresResponse } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: Getconsolev1paramstoresResponse = {
    message,
    data,
    pagination,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
