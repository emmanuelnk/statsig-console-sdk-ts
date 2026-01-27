# ExperimentOverridesDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**overrides** | [**Array&lt;ExperimentOverridesDtoOverridesInner&gt;**](ExperimentOverridesDtoOverridesInner.md) | Array of experiment overrides, each specifying type, ID, and group ID. | [default to undefined]
**userIDOverrides** | [**Array&lt;ExperimentOverridesDtoUserIDOverridesInner&gt;**](ExperimentOverridesDtoUserIDOverridesInner.md) | Array of user ID overrides, specifying which users to force into experiment groups. | [default to undefined]

## Example

```typescript
import { ExperimentOverridesDto } from 'statsig-console-sdk-nodejs';

const instance: ExperimentOverridesDto = {
    overrides,
    userIDOverrides,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
