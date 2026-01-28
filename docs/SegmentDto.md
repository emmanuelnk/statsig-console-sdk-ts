# SegmentDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isEnabled** | **boolean** | Is the segment enabled. | [default to undefined]
**type** | **string** |  | [default to undefined]
**count** | **number** | For id_list segments: the length of the ID list | [optional] [default to undefined]
**rules** | [**Array&lt;PrecommitHookArgsDtoOneOf4OldConfigRulesInner&gt;**](PrecommitHookArgsDtoOneOf4OldConfigRulesInner.md) | Rule Object | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Optional tags for categorization. | [optional] [default to undefined]
**id** | **string** | ID | [default to undefined]
**name** | **string** | Optional name for the configuration. | [optional] [default to undefined]
**idType** | **string** | Type of ID | [default to undefined]
**description** | **string** | Detailed description of the configuration’s purpose. | [default to undefined]
**lastModifierID** | **string** | ID of the last modifier. | [default to undefined]
**lastModifiedTime** | **number** | Time of the last modification. | [default to undefined]
**lastModifierEmail** | **string** | Email of the last modifier. | [default to undefined]
**lastModifierName** | **string** | Name of the last modifier. | [default to undefined]
**creatorID** | **string** | ID of the user who created the entity. | [default to undefined]
**createdTime** | **number** | Timestamp when the entity was created. | [default to undefined]
**creatorName** | **string** | Name of the creator. | [default to undefined]
**creatorEmail** | **string** | Email of the creator. | [default to undefined]
**targetApps** | **Array&lt;string&gt;** | List of target applications associated with this configuration. | [optional] [default to undefined]
**holdoutIDs** | **Array&lt;string&gt;** | Holdouts applied to this configuration. | [optional] [default to undefined]
**team** | **string** | Optional name for the responsible team. | [optional] [default to undefined]
**teamID** | **string** | Optional ID of the responsible team. | [optional] [default to undefined]
**version** | **number** | Version number | [optional] [default to undefined]

## Example

```typescript
import { SegmentDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: SegmentDto = {
    isEnabled,
    type,
    count,
    rules,
    tags,
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
    targetApps,
    holdoutIDs,
    team,
    teamID,
    version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
