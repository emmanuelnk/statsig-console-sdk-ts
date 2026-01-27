# LayerContractDtoParametersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of this parameter, used for identification within the layer. | [default to undefined]
**type** | **string** | The data type that this parameter returns. Allowed types include: string, boolean, number, object, and array. | [default to undefined]
**defaultValue** | [**LayerContractDtoParametersInnerDefaultValue**](LayerContractDtoParametersInnerDefaultValue.md) |  | [default to undefined]

## Example

```typescript
import { LayerContractDtoParametersInner } from 'statsig-console-sdk-nodejs';

const instance: LayerContractDtoParametersInner = {
    name,
    type,
    defaultValue,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
