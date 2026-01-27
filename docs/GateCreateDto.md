# GateCreateDto

Create a new gate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The gate display name | [optional] [default to undefined]
**isEnabled** | **boolean** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**rules** | [**Array&lt;DynamicConfigRulesDtoRulesInner&gt;**](DynamicConfigRulesDtoRulesInner.md) |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**idType** | **string** |  | [optional] [default to undefined]
**targetApps** | [**ConsoleV1AuditLogsGetTagsParameter**](ConsoleV1AuditLogsGetTagsParameter.md) |  | [optional] [default to undefined]
**creatorID** | **string** |  | [optional] [default to undefined]
**creatorEmail** | **string** |  | [optional] [default to undefined]
**team** | **string** |  | [optional] [default to undefined]
**teamID** | **string** |  | [optional] [default to undefined]
**measureMetricLifts** | **boolean** |  | [optional] [default to undefined]
**monitoringMetrics** | [**Array&lt;ExperimentCreateDtoCureCovariatesInner&gt;**](ExperimentCreateDtoCureCovariatesInner.md) |  | [optional] [default to undefined]
**reviewSettings** | [**GateCreateDtoReviewSettings**](GateCreateDtoReviewSettings.md) |  | [optional] [default to undefined]
**releasePipelineID** | **string** |  | [optional] [default to undefined]
**id** | **string** | The gate name ID | [optional] [default to undefined]
**isTemplate** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { GateCreateDto } from 'statsig-console-sdk-nodejs';

const instance: GateCreateDto = {
    name,
    isEnabled,
    description,
    rules,
    tags,
    type,
    idType,
    targetApps,
    creatorID,
    creatorEmail,
    team,
    teamID,
    measureMetricLifts,
    monitoringMetrics,
    reviewSettings,
    releasePipelineID,
    id,
    isTemplate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
