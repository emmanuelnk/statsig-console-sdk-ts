# LayerFullUpdateContractDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** | A detailed description of the layer, explaining its purpose and functionality. | [default to undefined]
**parameters** | [**Array&lt;LayerContractDtoParametersInner&gt;**](LayerContractDtoParametersInner.md) | An array of parameters associated with the layer, each defining specific attributes. | [default to undefined]
**targetApps** | [**LayerContractDtoTargetApps**](LayerContractDtoTargetApps.md) |  | [optional] [default to undefined]

## Example

```typescript
import { LayerFullUpdateContractDto } from 'statsig-console-sdk-nodejs';

const instance: LayerFullUpdateContractDto = {
    description,
    parameters,
    targetApps,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
