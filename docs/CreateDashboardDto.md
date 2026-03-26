# CreateDashboardDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**defaults** | [**AddDashboardWidgetsDtoDefaults**](AddDashboardWidgetsDtoDefaults.md) |  | [optional] [default to undefined]
**widgets** | [**Array&lt;AddDashboardWidgetsDtoWidgetsInner&gt;**](AddDashboardWidgetsDtoWidgetsInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CreateDashboardDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: CreateDashboardDto = {
    name,
    description,
    defaults,
    widgets,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
