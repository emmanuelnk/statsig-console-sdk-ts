# ExperimentOverridesDtoUserIDOverridesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groupID** | **string** | The experiment group the user will be forced into. | [default to undefined]
**ids** | **Array&lt;string&gt;** | Array of user IDs to be assigned to the specified experiment group. | [default to undefined]
**environment** | **string** | Optional environment designation (e.g., production, staging) for the experiment. | [optional] [default to undefined]
**unitType** | **string** | Optional type of unit for the experiment, defining the scope of the override. | [optional] [default to undefined]

## Example

```typescript
import { ExperimentOverridesDtoUserIDOverridesInner } from 'statsig-console-sdk-nodejs';

const instance: ExperimentOverridesDtoUserIDOverridesInner = {
    groupID,
    ids,
    environment,
    unitType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
