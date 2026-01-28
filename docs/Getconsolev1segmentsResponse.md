# Getconsolev1segmentsResponse

Response for getconsolev1segments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | A simple string explaining the result of the operation. | [default to undefined]
**data** | [**Array&lt;SegmentDto&gt;**](SegmentDto.md) | Array of SegmentDto items. | [default to undefined]
**pagination** | [**PaginationResponseMetadataDto**](PaginationResponseMetadataDto.md) |  | [default to undefined]

## Example

```typescript
import { Getconsolev1segmentsResponse } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: Getconsolev1segmentsResponse = {
    message,
    data,
    pagination,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
