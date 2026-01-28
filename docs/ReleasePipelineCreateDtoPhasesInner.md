# ReleasePipelineCreateDtoPhasesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Phase ID | [optional] [default to undefined]
**name** | **string** | Phase Name | [default to undefined]
**timeIntervalMs** | **number** | Time interval in milliseconds for this phase | [default to undefined]
**requiredReview** | **boolean** | Whether this phase requires review to proceed | [default to undefined]
**rules** | [**Array&lt;ReleasePipelineCreateDtoPhasesInnerRulesInner&gt;**](ReleasePipelineCreateDtoPhasesInnerRulesInner.md) | Rules to apply in this phase | [default to undefined]

## Example

```typescript
import { ReleasePipelineCreateDtoPhasesInner } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: ReleasePipelineCreateDtoPhasesInner = {
    id,
    name,
    timeIntervalMs,
    requiredReview,
    rules,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
