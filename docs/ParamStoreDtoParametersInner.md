# ParamStoreDtoParametersInner

Parameter Definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ref_type** | **string** |  | [default to undefined]
**name** | **string** | Parameter Name | [default to undefined]
**param_type** | **string** | Parameter Type | [default to undefined]
**value** | **Array&lt;object&gt;** |  | [default to undefined]
**gate_name** | **string** | Gate Name | [default to undefined]
**pass_value** | **Array&lt;object&gt;** |  | [default to undefined]
**fail_value** | **Array&lt;object&gt;** |  | [default to undefined]
**layer_name** | **string** | Layer Name | [default to undefined]
**param_name** | **string** | Parameter Name in Experiment | [default to undefined]
**config_name** | **string** | Dynamic Config Name | [default to undefined]
**experiment_name** | **string** | Experiment Name | [default to undefined]

## Example

```typescript
import { ParamStoreDtoParametersInner } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: ParamStoreDtoParametersInner = {
    ref_type,
    name,
    param_type,
    value,
    gate_name,
    pass_value,
    fail_value,
    layer_name,
    param_name,
    config_name,
    experiment_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
