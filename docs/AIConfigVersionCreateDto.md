# AIConfigVersionCreateDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prompts** | [**Array&lt;AIConfigVersionCreateDtoPromptsInner&gt;**](AIConfigVersionCreateDtoPromptsInner.md) |  | [optional] [default to undefined]
**temperature** | **number** |  | [optional] [default to undefined]
**model** | **string** |  | [optional] [default to undefined]
**name** | **string** | The Prompt Version display name | [default to undefined]
**provider** | **string** |  | [optional] [default to undefined]
**workflow_body** | [**AIConfigVersionCreateDtoWorkflowBody**](AIConfigVersionCreateDtoWorkflowBody.md) |  | [optional] [default to undefined]
**workflow_headers** | [**Array&lt;AIConfigVersionCreateDtoWorkflowHeadersInner&gt;**](AIConfigVersionCreateDtoWorkflowHeadersInner.md) |  | [optional] [default to undefined]
**auth_workflow_headers** | [**Array&lt;AIConfigVersionCreateDtoWorkflowHeadersInner&gt;**](AIConfigVersionCreateDtoWorkflowHeadersInner.md) |  | [optional] [default to undefined]
**eval_model** | **string** |  | [optional] [default to undefined]
**top_p** | **number** |  | [optional] [default to undefined]
**frequency_penalty** | **number** |  | [optional] [default to undefined]
**presence_penalty** | **number** |  | [optional] [default to undefined]
**max_tokens** | **number** |  | [optional] [default to undefined]
**id** | **string** | The Prompt Version name ID | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AIConfigVersionCreateDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: AIConfigVersionCreateDto = {
    prompts,
    temperature,
    model,
    name,
    provider,
    workflow_body,
    workflow_headers,
    auth_workflow_headers,
    eval_model,
    top_p,
    frequency_penalty,
    presence_penalty,
    max_tokens,
    id,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
