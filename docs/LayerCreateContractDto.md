# LayerCreateContractDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The unique name of the layer, formatted as an ID (e.g., \&quot;A Layer\&quot; becomes \&quot;a_layer\&quot;). | [default to undefined]
**description** | **string** | A helpful description of what this layer does, providing context for its purpose. | [optional] [default to undefined]
**idType** | **string** | The type of ID used for this layer, essential for validation in services. | [default to undefined]
**targetApps** | [**LayerCreateContractDtoTargetApps**](LayerCreateContractDtoTargetApps.md) |  | [optional] [default to undefined]
**team** | **string** | Optional identifier for the team responsible for this layer. | [optional] [default to undefined]

## Example

```typescript
import { LayerCreateContractDto } from 'statsig-console-sdk-nodejs';

const instance: LayerCreateContractDto = {
    name,
    description,
    idType,
    targetApps,
    team,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
