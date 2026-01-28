# ReleasePipelineUpdateDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Pipeline Name | [optional] [default to undefined]
**phases** | [**Array&lt;ReleasePipelineCreateDtoPhasesInner&gt;**](ReleasePipelineCreateDtoPhasesInner.md) | Phases of the release pipeline that will be executed in order. | [optional] [default to undefined]
**triggerNotice** | **string** | A notice that will be displayed to the user on the config page when the release pipeline is triggered | [optional] [default to undefined]

## Example

```typescript
import { ReleasePipelineUpdateDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: ReleasePipelineUpdateDto = {
    name,
    phases,
    triggerNotice,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
