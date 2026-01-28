# DynamicConfigDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | ID | [default to undefined]
**name** | **string** | Optional name for the configuration. | [optional] [default to undefined]
**idType** | **string** | The type of ID which the dynamic config is based on. | [optional] [default to undefined]
**description** | **string** | A brief summary of what the dynamic config is being used for | [default to undefined]
**lastModifierID** | **string** | ID of the last modifier. | [default to undefined]
**lastModifiedTime** | **number** | Time of the last modification. | [default to undefined]
**lastModifierEmail** | **string** | Email of the last modifier. | [default to undefined]
**lastModifierName** | **string** | Name of the last modifier. | [default to undefined]
**creatorID** | **string** |  | [optional] [default to undefined]
**createdTime** | **number** | Timestamp when the entity was created. | [default to undefined]
**creatorName** | **string** | Name of the creator. | [default to undefined]
**creatorEmail** | **string** |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | The list of tag names attached to the dynamic config | [optional] [default to undefined]
**targetApps** | [**ConsoleV1AuditLogsGetTagsParameter**](ConsoleV1AuditLogsGetTagsParameter.md) |  | [optional] [default to undefined]
**holdoutIDs** | **Array&lt;string&gt;** | Holdouts applied to this configuration. | [optional] [default to undefined]
**team** | **string** | The team name associated with the dynamic config, Enterprise only. | [optional] [default to undefined]
**teamID** | **string** | The team ID associated with the dynamic config, Enterprise only. | [optional] [default to undefined]
**version** | **number** | Version number | [optional] [default to undefined]
**isEnabled** | **boolean** | Is the dynamic config enabled | [default to true]
**rules** | [**Array&lt;DynamicConfigDtoRulesInner&gt;**](DynamicConfigDtoRulesInner.md) | An array of Rule objects | [default to undefined]
**defaultValue** | **{ [key: string]: any; }** | The fallback JSON object when no rules are triggered | [optional] [default to undefined]
**defaultValueJson5** | **string** | Can include comments. If provided with defaultValue, must parse to the same JSON | [optional] [default to undefined]
**owner** | [**AIConfigCreateDtoOwner**](AIConfigCreateDtoOwner.md) |  | [optional] [default to undefined]
**schema** | **string** | A schema using JSON Schema Draft 2020-12 to enforce return values of this dynamic config\&#39;s rules. | [optional] [default to undefined]
**schemaJson5** | **string** | &#x60;schema&#x60; except with Json5 comments. Optional and should parse to same json as &#x60;schema&#x60;. | [optional] [default to undefined]
**releasePipelineID** | **string** | The release pipeline ID associated with the dynamic config | [optional] [default to undefined]
**isTemplate** | **boolean** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**checksPerHour** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { DynamicConfigDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: DynamicConfigDto = {
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
    isEnabled,
    rules,
    defaultValue,
    defaultValueJson5,
    owner,
    schema,
    schemaJson5,
    releasePipelineID,
    isTemplate,
    status,
    checksPerHour,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
