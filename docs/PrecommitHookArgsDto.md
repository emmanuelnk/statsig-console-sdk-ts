# PrecommitHookArgsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**review_id** | **string** |  | [default to undefined]
**change_id** | **string** |  | [default to undefined]
**submitter** | **string** |  | [default to undefined]
**committer** | **string** |  | [default to undefined]
**config_type** | **string** |  | [default to undefined]
**config_name** | **string** |  | [default to undefined]
**type** | **string** |  | [default to undefined]
**diffs** | **Array&lt;object&gt;** |  | [default to undefined]
**old_config** | [**PrecommitHookArgsDtoOneOf4OldConfig**](PrecommitHookArgsDtoOneOf4OldConfig.md) |  | [optional] [default to undefined]
**new_config** | [**PrecommitHookArgsDtoOneOf4OldConfig**](PrecommitHookArgsDtoOneOf4OldConfig.md) |  | [optional] [default to undefined]
**old_target_apps** | **Array&lt;string&gt;** |  | [default to undefined]
**new_target_apps** | **Array&lt;string&gt;** |  | [default to undefined]
**experiment_name** | **string** |  | [default to undefined]
**old_allocation** | **number** |  | [default to undefined]
**new_allocation** | **number** |  | [default to undefined]
**old_experiment** | [**PrecommitHookArgsDtoOneOf6OldExperiment**](PrecommitHookArgsDtoOneOf6OldExperiment.md) |  | [default to undefined]
**group** | **string** |  | [default to undefined]
**decision_reason** | **string** |  | [default to undefined]
**old_settings** | [**PrecommitHookArgsDtoOneOf11OldSettings**](PrecommitHookArgsDtoOneOf11OldSettings.md) |  | [default to undefined]
**new_settings** | [**PrecommitHookArgsDtoOneOf11OldSettings**](PrecommitHookArgsDtoOneOf11OldSettings.md) |  | [default to undefined]
**new_experiment** | [**PrecommitHookArgsDtoOneOf6OldExperiment**](PrecommitHookArgsDtoOneOf6OldExperiment.md) |  | [default to undefined]

## Example

```typescript
import { PrecommitHookArgsDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: PrecommitHookArgsDto = {
    review_id,
    change_id,
    submitter,
    committer,
    config_type,
    config_name,
    type,
    diffs,
    old_config,
    new_config,
    old_target_apps,
    new_target_apps,
    experiment_name,
    old_allocation,
    new_allocation,
    old_experiment,
    group,
    decision_reason,
    old_settings,
    new_settings,
    new_experiment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
