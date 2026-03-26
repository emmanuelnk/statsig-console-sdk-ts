# Getconsolev1dashboardsResponse

Response for getconsolev1dashboards

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | A simple string explaining the result of the operation. | [default to undefined]
**data** | [**Array&lt;DashboardListItemResponseDto&gt;**](DashboardListItemResponseDto.md) | Array of DashboardListItemResponseDto items. | [default to undefined]
**pagination** | [**PaginationResponseMetadataDto**](PaginationResponseMetadataDto.md) |  | [default to undefined]

## Example

```typescript
import { Getconsolev1dashboardsResponse } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: Getconsolev1dashboardsResponse = {
    message,
    data,
    pagination,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
