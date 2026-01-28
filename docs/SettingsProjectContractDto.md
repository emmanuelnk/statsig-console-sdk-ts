# SettingsProjectContractDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the project. | [default to undefined]
**visibility** | **string** | The visibility type of the project. | [default to undefined]
**default_unit_type** | **string** | The default unit ID type of the project for newly created gates, experiments, and metrics. If not provided, there will be no default unit type. | [optional] [default to undefined]

## Example

```typescript
import { SettingsProjectContractDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: SettingsProjectContractDto = {
    name,
    visibility,
    default_unit_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
