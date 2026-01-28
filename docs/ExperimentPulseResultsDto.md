# ExperimentPulseResultsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ds** | **string** |  | [default to undefined]
**primaryMetrics** | [**Array&lt;ExperimentPulseResultsDtoPrimaryMetricsInner&gt;**](ExperimentPulseResultsDtoPrimaryMetricsInner.md) |  | [default to undefined]
**secondaryMetrics** | [**Array&lt;ExperimentPulseResultsDtoPrimaryMetricsInner&gt;**](ExperimentPulseResultsDtoPrimaryMetricsInner.md) |  | [default to undefined]
**otherMetrics** | [**Array&lt;ExperimentPulseResultsDtoPrimaryMetricsInner&gt;**](ExperimentPulseResultsDtoPrimaryMetricsInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ExperimentPulseResultsDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: ExperimentPulseResultsDto = {
    ds,
    primaryMetrics,
    secondaryMetrics,
    otherMetrics,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
