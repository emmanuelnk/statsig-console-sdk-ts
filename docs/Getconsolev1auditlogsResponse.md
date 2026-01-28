# Getconsolev1auditlogsResponse

Response for getconsolev1auditlogs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | A simple string explaining the result of the operation. | [default to undefined]
**data** | [**Array&lt;AuditLogDto&gt;**](AuditLogDto.md) | Array of AuditLogDto items. | [default to undefined]
**pagination** | [**PaginationResponseMetadataDto**](PaginationResponseMetadataDto.md) |  | [default to undefined]

## Example

```typescript
import { Getconsolev1auditlogsResponse } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: Getconsolev1auditlogsResponse = {
    message,
    data,
    pagination,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
