# RuleDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of this rule. | [default to undefined]
**passPercentage** | **number** | Of the users that meet the conditions of this rule, what percent should return true. | [default to undefined]
**conditions** | [**Array&lt;DynamicConfigCreateDtoRulesInnerConditionsInner&gt;**](DynamicConfigCreateDtoRulesInnerConditionsInner.md) | An array of Condition objects. | [default to undefined]
**environments** | **Array&lt;string&gt;** | The environments this rule is enabled for. | [optional] [default to undefined]
**id** | **string** | The Statsig ID of this rule. | [optional] [default to undefined]
**baseID** | **string** | The base ID of this rule, i.e. without any added metadata. Will remain the exact same throughout | [optional] [default to undefined]
**returnValue** | **{ [key: string]: any; }** | The return value of the rule. | [optional] [default to undefined]
**completedAutomatedRollouts** | [**Array&lt;DynamicConfigCreateDtoRulesInnerCompletedAutomatedRolloutsInner&gt;**](DynamicConfigCreateDtoRulesInnerCompletedAutomatedRolloutsInner.md) | Read-only: Automated rollout phases that have already completed. | [optional] [readonly] [default to undefined]
**pendingAutomatedRollouts** | [**Array&lt;DynamicConfigCreateDtoRulesInnerCompletedAutomatedRolloutsInner&gt;**](DynamicConfigCreateDtoRulesInnerCompletedAutomatedRolloutsInner.md) | Read-only: Automated rollout phases that are scheduled but not yet complete. | [optional] [readonly] [default to undefined]

## Example

```typescript
import { RuleDto } from 'statsig-console-sdk-nodejs';

const instance: RuleDto = {
    name,
    passPercentage,
    conditions,
    environments,
    id,
    baseID,
    returnValue,
    completedAutomatedRollouts,
    pendingAutomatedRollouts,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
