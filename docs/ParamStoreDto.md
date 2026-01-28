# ParamStoreDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Param Store ID | [default to undefined]
**name** | **string** | Param Store Name | [default to undefined]
**displayName** | **string** | Param Store Display Name | [default to undefined]
**description** | **string** | Param Store Description | [default to undefined]
**createdTime** | **number** | Param Store Creation Time | [default to undefined]
**creatorID** | **string** | Creator ID | [default to undefined]
**lastModifierID** | **string** | Last Modifier ID | [default to undefined]
**team** | **string** | Team Name | [optional] [default to undefined]
**teamID** | **string** | Team ID | [optional] [default to undefined]
**parameters** | [**Array&lt;ParamStoreDtoParametersInner&gt;**](ParamStoreDtoParametersInner.md) | List of Parameters | [default to undefined]

## Example

```typescript
import { ParamStoreDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: ParamStoreDto = {
    id,
    name,
    displayName,
    description,
    createdTime,
    creatorID,
    lastModifierID,
    team,
    teamID,
    parameters,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
