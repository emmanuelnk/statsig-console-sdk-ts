# HoldoutDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | ID | [default to undefined]
**name** | **string** | Optional name for the configuration. | [optional] [default to undefined]
**idType** | **string** | type of id | [default to undefined]
**description** | **string** | brief summary of what the holdout is being used for | [default to undefined]
**lastModifierID** | **string** | ID of the last modifier. | [default to undefined]
**lastModifiedTime** | **number** | Time of the last modification. | [default to undefined]
**lastModifierEmail** | **string** | Email of the last modifier. | [default to undefined]
**lastModifierName** | **string** | Name of the last modifier. | [default to undefined]
**creatorID** | **string** | ID of the user who created the entity. | [default to undefined]
**createdTime** | **number** | Timestamp when the entity was created. | [default to undefined]
**creatorName** | **string** | Name of the creator. | [default to undefined]
**creatorEmail** | **string** | Email of the creator. | [default to undefined]
**tags** | **Array&lt;string&gt;** | Optional tags for categorization. | [optional] [default to undefined]
**targetApps** | **Array&lt;string&gt;** | List of target applications associated with this configuration. | [optional] [default to undefined]
**holdoutIDs** | **Array&lt;string&gt;** | Holdouts applied to this configuration. | [optional] [default to undefined]
**team** | **string** | Optional name for the responsible team. | [optional] [default to undefined]
**teamID** | **string** | Optional ID of the responsible team. | [optional] [default to undefined]
**version** | **number** | Version number | [optional] [default to undefined]
**isEnabled** | **boolean** | enable or disable the holdout | [default to undefined]
**passPercentage** | **number** | percentage of users between 0-10% to pass through the holdout | [default to undefined]
**gateIDs** | **Array&lt;string&gt;** | an array of gateIDs which this holdout is applied to | [default to undefined]
**experimentIDs** | **Array&lt;string&gt;** | an array of experimentIDs which this holdout is applied to | [default to undefined]
**layerIDs** | **Array&lt;string&gt;** | an array of layerIDs which this holdout is applied to | [default to undefined]
**isGlobal** | **boolean** | whether the holdout is being applied to all new gates | [default to undefined]
**targetingGateID** | **string** | the gateID that the holdout is targeting | [default to undefined]
**monitoringMetrics** | [**Array&lt;ExperimentCreateDtoCureCovariatesInner&gt;**](ExperimentCreateDtoCureCovariatesInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { HoldoutDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: HoldoutDto = {
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
    passPercentage,
    gateIDs,
    experimentIDs,
    layerIDs,
    isGlobal,
    targetingGateID,
    monitoringMetrics,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
