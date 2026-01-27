# ConsoleV1TagsGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | A simple string explaining the result of the operation. | [default to undefined]
**data** | [**Array&lt;TagDto&gt;**](TagDto.md) |  | [default to undefined]
**pagination** | [**PaginationResponseMetadataDto**](PaginationResponseMetadataDto.md) | Pagination metadata for checking if there is next page for example. | [default to undefined]

## Example

```typescript
import { ConsoleV1TagsGet200Response } from 'statsig-console-sdk-nodejs';

const instance: ConsoleV1TagsGet200Response = {
    message,
    data,
    pagination,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
