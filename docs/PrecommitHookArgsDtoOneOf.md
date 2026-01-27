# PrecommitHookArgsDtoOneOf


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
**diffs** | **Array&lt;any&gt;** |  | [default to undefined]
**old_config** | [**PrecommitHookArgsDtoOneOfOldConfig**](PrecommitHookArgsDtoOneOfOldConfig.md) |  | [optional] [default to undefined]
**new_config** | [**PrecommitHookArgsDtoOneOfOldConfig**](PrecommitHookArgsDtoOneOfOldConfig.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PrecommitHookArgsDtoOneOf } from 'statsig-console-sdk-nodejs';

const instance: PrecommitHookArgsDtoOneOf = {
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
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
