# LayerPartialUpdateContractDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** | A detailed description of the layer, explaining its purpose and functionality. | [optional] [default to undefined]
**parameters** | [**Array&lt;LayerContractDtoParametersInner&gt;**](LayerContractDtoParametersInner.md) | An array of parameters associated with the layer, each defining specific attributes. | [optional] [default to undefined]
**targetApps** | [**LayerContractDtoTargetApps**](LayerContractDtoTargetApps.md) |  | [optional] [default to undefined]

## Example

```typescript
import { LayerPartialUpdateContractDto } from 'statsig-console-sdk-nodejs';

const instance: LayerPartialUpdateContractDto = {
    description,
    parameters,
    targetApps,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
