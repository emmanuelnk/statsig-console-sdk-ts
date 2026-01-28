# ExperimentOverridesDtoOverridesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** | The id of the segment or gate | [default to undefined]
**groupID** | **string** | The experiment group which user will be forced into | [default to undefined]
**environment** | **string** | Optional environment designation (e.g., production, staging) for the experiment. | [optional] [default to undefined]

## Example

```typescript
import { ExperimentOverridesDtoOverridesInner } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: ExperimentOverridesDtoOverridesInner = {
    type,
    id,
    groupID,
    environment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
