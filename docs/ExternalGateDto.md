# ExternalGateDto


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
**targetApps** | [**ConsoleV1AuditLogsGetTagsParameter**](ConsoleV1AuditLogsGetTagsParameter.md) |  | [optional] [default to undefined]
**holdoutIDs** | **Array&lt;string&gt;** | Holdouts applied to this configuration. | [optional] [default to undefined]
**team** | **string** |  | [optional] [default to undefined]
**teamID** | **string** |  | [optional] [default to undefined]
**version** | **number** | Version number | [optional] [default to undefined]
**checksPerHour** | **number** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**type** | **string** |  | [default to undefined]
**typeReason** | **string** |  | [default to undefined]
**owner** | [**AIConfigCreateDtoOwner**](AIConfigCreateDtoOwner.md) |  | [optional] [default to undefined]
**isTemplate** | **boolean** |  | [optional] [default to undefined]
**isEnabled** | **boolean** |  | [default to undefined]
**rules** | [**Array&lt;DynamicConfigRulesDtoRulesInner&gt;**](DynamicConfigRulesDtoRulesInner.md) |  | [default to undefined]
**measureMetricLifts** | **boolean** |  | [optional] [default to undefined]
**monitoringMetrics** | [**Array&lt;ExperimentCreateDtoCureCovariatesInner&gt;**](ExperimentCreateDtoCureCovariatesInner.md) |  | [optional] [default to undefined]
**reviewSettings** | [**ExternalExperimentDtoReviewSettings**](ExternalExperimentDtoReviewSettings.md) |  | [optional] [default to undefined]
**releasePipelineID** | **string** |  | [optional] [default to undefined]
**activeReview** | [**ExternalExperimentDtoActiveReview**](ExternalExperimentDtoActiveReview.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ExternalGateDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: ExternalGateDto = {
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
    checksPerHour,
    status,
    type,
    typeReason,
    owner,
    isTemplate,
    isEnabled,
    rules,
    measureMetricLifts,
    monitoringMetrics,
    reviewSettings,
    releasePipelineID,
    activeReview,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
