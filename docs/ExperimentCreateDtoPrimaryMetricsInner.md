# ExperimentCreateDtoPrimaryMetricsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The metric name. | [default to undefined]
**type** | **string** | The metric type. | [default to undefined]
**direction** | **string** | The expected direction for one-sided testing (a feature to only measure metric movements in a single direction) | [optional] [default to undefined]
**hypothesizedValue** | **number** | The comparison value for the one-sample testing (a feature to use a fixed baseline as the control value) | [optional] [default to undefined]

## Example

```typescript
import { ExperimentCreateDtoPrimaryMetricsInner } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: ExperimentCreateDtoPrimaryMetricsInner = {
    name,
    type,
    direction,
    hypothesizedValue,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
