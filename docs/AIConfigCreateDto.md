# AIConfigCreateDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name for the AI Config. | [default to undefined]
**displayName** | **string** | Optional display name for the AI Config. | [optional] [default to undefined]
**description** | **string** | Description for the AI Config. | [optional] [default to undefined]
**targetApps** | [**AIConfigCreateDtoTargetApps**](AIConfigCreateDtoTargetApps.md) |  | [optional] [default to undefined]
**team** | **string** | Team name. | [optional] [default to undefined]
**teamID** | **string** | Team ID. | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Optional tags to associate with the AI Config. | [optional] [default to undefined]
**creatorID** | **string** |  | [optional] [default to undefined]
**owner** | [**AIConfigCreateDtoOwner**](AIConfigCreateDtoOwner.md) |  | [optional] [default to undefined]
**creatorEmail** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AIConfigCreateDto } from 'statsig-console-sdk-nodejs';

const instance: AIConfigCreateDto = {
    name,
    displayName,
    description,
    targetApps,
    team,
    teamID,
    tags,
    creatorID,
    owner,
    creatorEmail,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
