# ExternalPromptDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | ID | [default to undefined]
**name** | **string** | The gate display name | [optional] [default to undefined]
**idType** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [default to undefined]
**lastModifierID** | **string** | ID of the last modifier. | [default to undefined]
**lastModifiedTime** | **number** | Time of the last modification. | [default to undefined]
**lastModifierEmail** | **string** | Email of the last modifier. | [default to undefined]
**lastModifierName** | **string** | Name of the last modifier. | [default to undefined]
**creatorID** | **string** |  | [optional] [default to undefined]
**createdTime** | **number** | Timestamp when the entity was created. | [default to undefined]
**creatorName** | **string** | Name of the creator. | [default to undefined]
**creatorEmail** | **string** |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**targetApps** | **Array&lt;string&gt;** | List of target applications associated with this configuration. | [optional] [default to undefined]
**holdoutIDs** | **Array&lt;string&gt;** | Holdouts applied to this configuration. | [optional] [default to undefined]
**team** | **string** |  | [optional] [default to undefined]
**teamID** | **string** |  | [optional] [default to undefined]
**version** | **number** | Version number | [optional] [default to undefined]

## Example

```typescript
import { ExternalPromptDto } from 'statsig-console-sdk-nodejs';

const instance: ExternalPromptDto = {
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
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
