# TargetAppCreateDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | name of the target app | [default to undefined]
**description** | **string** | a description of the target app | [default to undefined]
**gates** | **Array&lt;string&gt;** | Gate IDs to assign to target app(s) | [optional] [default to undefined]
**dynamicConfigs** | **Array&lt;string&gt;** | Dynamic Config IDs to assign to target app(s) | [optional] [default to undefined]
**experiments** | **Array&lt;string&gt;** | Experiment IDs to assign to target app(s) | [optional] [default to undefined]

## Example

```typescript
import { TargetAppCreateDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: TargetAppCreateDto = {
    name,
    description,
    gates,
    dynamicConfigs,
    experiments,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
