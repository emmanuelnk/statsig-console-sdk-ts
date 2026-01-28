# LayerContractDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | ID | [default to undefined]
**name** | **string** | Optional name for the configuration. | [optional] [default to undefined]
**idType** | **string** | The ID type used for this layer, important for validation. | [default to undefined]
**description** | **string** | A detailed description of the layer, explaining its purpose and functionality. | [default to undefined]
**lastModifierID** | **string** | ID of the last modifier. | [default to undefined]
**lastModifiedTime** | **number** | Time of the last modification. | [default to undefined]
**lastModifierEmail** | **string** | Email of the last modifier. | [default to undefined]
**lastModifierName** | **string** | Name of the last modifier. | [default to undefined]
**creatorID** | **string** | ID of the user who created the entity. | [default to undefined]
**createdTime** | **number** | Timestamp when the entity was created. | [default to undefined]
**creatorName** | **string** | Name of the creator. | [default to undefined]
**creatorEmail** | **string** | Email of the creator. | [default to undefined]
**tags** | **Array&lt;string&gt;** | Optional tags for categorization. | [optional] [default to undefined]
**targetApps** | [**LayerContractDtoTargetApps**](LayerContractDtoTargetApps.md) |  | [optional] [default to undefined]
**holdoutIDs** | **Array&lt;string&gt;** | Holdouts applied to this configuration. | [optional] [default to undefined]
**team** | **string** | Optional name for the responsible team. | [optional] [default to undefined]
**teamID** | **string** | Optional ID of the responsible team. | [optional] [default to undefined]
**version** | **number** | Version number | [optional] [default to undefined]
**isImplicitLayer** | **boolean** | Indicates if the layer was automatically created by Statsig during experiment creation. | [default to undefined]
**parameters** | [**Array&lt;LayerContractDtoParametersInner&gt;**](LayerContractDtoParametersInner.md) | An array of parameters associated with the layer, each defining specific attributes. | [default to undefined]

## Example

```typescript
import { LayerContractDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: LayerContractDto = {
    id,
    name,
    idType,
    description,
    lastModifierID,
    lastModifiedTime,
    lastModifierEmail,
    lastModifierName,
    creatorID,
    createdTime,
    creatorName,
    creatorEmail,
    tags,
    targetApps,
    holdoutIDs,
    team,
    teamID,
    version,
    isImplicitLayer,
    parameters,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
