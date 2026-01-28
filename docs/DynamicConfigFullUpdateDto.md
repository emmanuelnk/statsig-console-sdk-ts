# DynamicConfigFullUpdateDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Optional name for the configuration. | [optional] [default to undefined]
**isEnabled** | **boolean** | Is the dynamic config enabled | [default to true]
**description** | **string** | A brief summary of what the dynamic config is being used for | [default to undefined]
**rules** | [**Array&lt;DynamicConfigCreateDtoRulesInner&gt;**](DynamicConfigCreateDtoRulesInner.md) | An array of Rule objects | [default to undefined]
**defaultValue** | **{ [key: string]: any; }** | The fallback JSON object when no rules are triggered | [optional] [default to undefined]
**defaultValueJson5** | **string** | Can include comments. If provided with defaultValue, must parse to the same JSON | [optional] [default to undefined]
**idType** | **string** | The type of ID which the dynamic config is based on. | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | The list of tag names attached to the dynamic config | [optional] [default to undefined]
**creatorID** | **string** |  | [optional] [default to undefined]
**owner** | [**AIConfigCreateDtoOwner**](AIConfigCreateDtoOwner.md) |  | [optional] [default to undefined]
**creatorEmail** | **string** |  | [optional] [default to undefined]
**schema** | **string** | A schema using JSON Schema Draft 2020-12 to enforce return values of this dynamic config\&#39;s rules. | [optional] [default to undefined]
**schemaJson5** | **string** | &#x60;schema&#x60; except with Json5 comments. Optional and should parse to same json as &#x60;schema&#x60;. | [optional] [default to undefined]
**targetApps** | [**ConsoleV1AuditLogsGetTagsParameter**](ConsoleV1AuditLogsGetTagsParameter.md) |  | [optional] [default to undefined]
**team** | **string** | The team name associated with the dynamic config, Enterprise only. | [optional] [default to undefined]
**teamID** | **string** | The team ID associated with the dynamic config, Enterprise only. | [optional] [default to undefined]
**releasePipelineID** | **string** | The release pipeline ID associated with the dynamic config | [optional] [default to undefined]

## Example

```typescript
import { DynamicConfigFullUpdateDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: DynamicConfigFullUpdateDto = {
    name,
    isEnabled,
    description,
    rules,
    defaultValue,
    defaultValueJson5,
    idType,
    tags,
    creatorID,
    owner,
    creatorEmail,
    schema,
    schemaJson5,
    targetApps,
    team,
    teamID,
    releasePipelineID,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
