# ExperimentCreateDtoStratifiedSampling

The stratified sampling settings for the experiment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** |  | [default to undefined]
**metric** | [**ExperimentCreateDtoStratifiedSamplingMetric**](ExperimentCreateDtoStratifiedSamplingMetric.md) |  | [optional] [default to undefined]
**entityPropertySource** | [**ExperimentCreateDtoStratifiedSamplingEntityPropertySource**](ExperimentCreateDtoStratifiedSamplingEntityPropertySource.md) |  | [optional] [default to undefined]
**csv** | [**ExperimentCreateDtoStratifiedSamplingCsv**](ExperimentCreateDtoStratifiedSamplingCsv.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ExperimentCreateDtoStratifiedSampling } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: ExperimentCreateDtoStratifiedSampling = {
    status,
    metric,
    entityPropertySource,
    csv,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
