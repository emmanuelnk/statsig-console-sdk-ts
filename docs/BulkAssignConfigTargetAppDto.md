# BulkAssignConfigTargetAppDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**targetApps** | **Array&lt;string&gt;** | target app ids | [default to undefined]
**gates** | **Array&lt;string&gt;** | Gate IDs to assign to target app(s) | [optional] [default to undefined]
**dynamicConfigs** | **Array&lt;string&gt;** | Dynamic Config IDs to assign to target app(s) | [optional] [default to undefined]
**experiments** | **Array&lt;string&gt;** | Experiment IDs to assign to target app(s) | [optional] [default to undefined]

## Example

```typescript
import { BulkAssignConfigTargetAppDto } from 'statsig-console-sdk-nodejs';

const instance: BulkAssignConfigTargetAppDto = {
    targetApps,
    gates,
    dynamicConfigs,
    experiments,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
