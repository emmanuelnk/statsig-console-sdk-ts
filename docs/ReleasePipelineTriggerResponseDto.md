# ReleasePipelineTriggerResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Trigger ID | [default to undefined]
**releasePipelineID** | **string** | Release Pipeline ID | [default to undefined]
**actions** | [**Array&lt;ReleasePipelineTriggerResponseDtoActionsInner&gt;**](ReleasePipelineTriggerResponseDtoActionsInner.md) | Actions | [default to undefined]
**creatorID** | **string** | Trigger Creator ID | [default to undefined]
**createdTime** | **number** | Trigger Creation Time | [default to undefined]
**description** | **string** | Optional description for this trigger | [optional] [default to undefined]
**gateID** | **string** | Gate ID | [optional] [default to undefined]
**dynamicConfigID** | **string** | Dynamic Config ID | [optional] [default to undefined]
**lastModifierID** | **string** | Last modifier ID | [default to undefined]
**lastModifierName** | **string** | Last modifier name | [default to undefined]
**configSnapshotID** | **string** | The snapshot of the config that this trigger is releasing | [optional] [default to undefined]
**status** | **string** | Pipeline status with this trigger | [default to undefined]
**currentPhase** | **string** | Current phase | [default to undefined]
**currentPhaseID** | **string** | Current phase ID | [default to undefined]
**currentPhaseEndTime** | **number** | Current phase end time | [default to undefined]

## Example

```typescript
import { ReleasePipelineTriggerResponseDto } from 'statsig-console-sdk-nodejs';

const instance: ReleasePipelineTriggerResponseDto = {
    id,
    releasePipelineID,
    actions,
    creatorID,
    createdTime,
    description,
    gateID,
    dynamicConfigID,
    lastModifierID,
    lastModifierName,
    configSnapshotID,
    status,
    currentPhase,
    currentPhaseID,
    currentPhaseEndTime,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
