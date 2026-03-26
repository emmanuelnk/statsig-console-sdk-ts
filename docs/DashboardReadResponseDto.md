# DashboardReadResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**defaults** | [**AddDashboardWidgetsDtoDefaults**](AddDashboardWidgetsDtoDefaults.md) |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**widgets** | [**Array&lt;DashboardReadResponseDtoWidgetsInner&gt;**](DashboardReadResponseDtoWidgetsInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DashboardReadResponseDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: DashboardReadResponseDto = {
    name,
    description,
    defaults,
    id,
    widgets,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
