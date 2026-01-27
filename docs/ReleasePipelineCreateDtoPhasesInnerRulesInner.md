# ReleasePipelineCreateDtoPhasesInnerRulesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The Statsig ID of this rule. | [optional] [default to undefined]
**name** | **string** | The name of this rule. | [default to undefined]
**conditions** | [**Array&lt;DynamicConfigCreateDtoRulesInnerConditionsInner&gt;**](DynamicConfigCreateDtoRulesInnerConditionsInner.md) | An array of Condition objects. | [default to undefined]
**environments** | **Array&lt;string&gt;** | The environments this rule is enabled for. | [optional] [default to undefined]

## Example

```typescript
import { ReleasePipelineCreateDtoPhasesInnerRulesInner } from 'statsig-console-sdk-nodejs';

const instance: ReleasePipelineCreateDtoPhasesInnerRulesInner = {
    id,
    name,
    conditions,
    environments,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
