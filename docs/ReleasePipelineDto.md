# ReleasePipelineDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Pipeline ID | [default to undefined]
**name** | **string** | Pipeline Name | [default to undefined]
**creatorID** | **string** | Pipeline Creator ID | [default to undefined]
**createdTime** | **number** | Pipeline Creation Time | [default to undefined]
**lastModifierID** | **string** | Last Modifier ID | [default to undefined]
**lastModifiedTime** | **number** | Last Modification Time | [default to undefined]
**phases** | [**Array&lt;ReleasePipelineCreateDtoPhasesInner&gt;**](ReleasePipelineCreateDtoPhasesInner.md) | Phases of the release pipeline that will be executed in order. | [optional] [default to undefined]
**triggerNotice** | **string** | A notice that will be displayed to the user on the config page when the release pipeline is triggered | [optional] [default to undefined]

## Example

```typescript
import { ReleasePipelineDto } from 'statsig-console-sdk-nodejs';

const instance: ReleasePipelineDto = {
    id,
    name,
    creatorID,
    createdTime,
    lastModifierID,
    lastModifiedTime,
    phases,
    triggerNotice,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
