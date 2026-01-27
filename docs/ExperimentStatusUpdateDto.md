# ExperimentStatusUpdateDto

Schema for updating the status of an experiment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The ID of the group to launch | [default to undefined]
**decisionReason** | **string** | The reason for making the decision to update the experiment status | [default to undefined]
**removeTargeting** | **boolean** | Indicates whether to remove targeting from the experiment | [optional] [default to false]

## Example

```typescript
import { ExperimentStatusUpdateDto } from 'statsig-console-sdk-nodejs';

const instance: ExperimentStatusUpdateDto = {
    id,
    decisionReason,
    removeTargeting,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
