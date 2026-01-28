# Getconsolev1usersteamsResponse

Response for getconsolev1usersteams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | A simple string explaining the result of the operation. | [default to undefined]
**data** | [**Array&lt;TeamDtoWithoutMembersDto&gt;**](TeamDtoWithoutMembersDto.md) | Array of TeamDtoWithoutMembersDto items. | [default to undefined]
**pagination** | [**PaginationResponseMetadataDto**](PaginationResponseMetadataDto.md) |  | [default to undefined]

## Example

```typescript
import { Getconsolev1usersteamsResponse } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: Getconsolev1usersteamsResponse = {
    message,
    data,
    pagination,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
