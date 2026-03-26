# ExperimentPulseMetricResultDtoDimensionResultsInnerMetric


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metricID** | **string** |  | [default to undefined]
**metricName** | **string** |  | [default to undefined]
**directionality** | **string** | Indicates the desired change direction for the metric. Use \&quot;increase\&quot; for positive changes and \&quot;decrease\&quot; for negative changes. | [default to undefined]
**absoluteChange** | **number** |  | [optional] [default to undefined]
**confidenceIntervalDelta** | **number** | Absolute confidence interval delta | [optional] [default to undefined]
**confidenceInterval** | [**ExperimentPulseMetricResultDtoDimensionResultsInnerMetricConfidenceInterval**](ExperimentPulseMetricResultDtoDimensionResultsInnerMetricConfidenceInterval.md) |  | [optional] [default to undefined]
**percentChange** | **number** |  | [optional] [default to undefined]
**sequentialTestingConfidenceIntervalDelta** | **number** |  | [optional] [default to undefined]
**sequentialTestingConfidenceInterval** | [**ExperimentPulseMetricResultDtoDimensionResultsInnerMetricConfidenceInterval**](ExperimentPulseMetricResultDtoDimensionResultsInnerMetricConfidenceInterval.md) |  | [optional] [default to undefined]
**percentConfidenceIntervalDelta** | **number** |  | [optional] [default to undefined]
**percentConfidenceInterval** | [**ExperimentPulseMetricResultDtoDimensionResultsInnerMetricConfidenceInterval**](ExperimentPulseMetricResultDtoDimensionResultsInnerMetricConfidenceInterval.md) |  | [optional] [default to undefined]
**percentSequentialTestingConfidenceIntervalDelta** | **number** |  | [optional] [default to undefined]
**percentSequentialTestingConfidenceInterval** | [**ExperimentPulseMetricResultDtoDimensionResultsInnerMetricConfidenceInterval**](ExperimentPulseMetricResultDtoDimensionResultsInnerMetricConfidenceInterval.md) |  | [optional] [default to undefined]
**testMean** | **number** |  | [optional] [default to undefined]
**controlMean** | **number** |  | [optional] [default to undefined]
**testStd** | **number** |  | [optional] [default to undefined]
**controlStd** | **number** |  | [optional] [default to undefined]
**testUnits** | **number** |  | [optional] [default to undefined]
**controlUnits** | **number** |  | [optional] [default to undefined]
**pValue** | **number** |  | [optional] [default to undefined]
**sequentialTestingPValue** | **number** |  | [optional] [default to undefined]
**adjustedAlpha** | **number** |  | [optional] [default to undefined]
**reversePower** | **number** |  | [optional] [default to undefined]
**absoluteToplineImpact** | **number** |  | [optional] [default to undefined]
**absoluteToplineImpactDelta** | **number** |  | [optional] [default to undefined]
**relativeToplineImpact** | **number** |  | [optional] [default to undefined]
**relativeToplineImpactDelta** | **number** |  | [optional] [default to undefined]
**projectedAbsoluteToplineImpact** | **number** |  | [optional] [default to undefined]
**projectedAbsoluteToplineImpactDelta** | **number** |  | [optional] [default to undefined]
**projectedRelativeToplineImpact** | **number** |  | [optional] [default to undefined]
**projectedRelativeToplineImpactDelta** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { ExperimentPulseMetricResultDtoDimensionResultsInnerMetric } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: ExperimentPulseMetricResultDtoDimensionResultsInnerMetric = {
    metricID,
    metricName,
    directionality,
    absoluteChange,
    confidenceIntervalDelta,
    confidenceInterval,
    percentChange,
    sequentialTestingConfidenceIntervalDelta,
    sequentialTestingConfidenceInterval,
    percentConfidenceIntervalDelta,
    percentConfidenceInterval,
    percentSequentialTestingConfidenceIntervalDelta,
    percentSequentialTestingConfidenceInterval,
    testMean,
    controlMean,
    testStd,
    controlStd,
    testUnits,
    controlUnits,
    pValue,
    sequentialTestingPValue,
    adjustedAlpha,
    reversePower,
    absoluteToplineImpact,
    absoluteToplineImpactDelta,
    relativeToplineImpact,
    relativeToplineImpactDelta,
    projectedAbsoluteToplineImpact,
    projectedAbsoluteToplineImpactDelta,
    projectedRelativeToplineImpact,
    projectedRelativeToplineImpactDelta,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
