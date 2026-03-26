# DashboardListItemResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [default to undefined]
**defaults** | [**AddDashboardWidgetsDtoDefaults**](AddDashboardWidgetsDtoDefaults.md) |  | [optional] [default to undefined]
**created_time** | **number** |  | [default to undefined]
**modified_time** | **number** |  | [default to undefined]
**widget_count** | **number** |  | [default to undefined]
**is_verified** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { DashboardListItemResponseDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: DashboardListItemResponseDto = {
    id,
    name,
    description,
    defaults,
    created_time,
    modified_time,
    widget_count,
    is_verified,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
