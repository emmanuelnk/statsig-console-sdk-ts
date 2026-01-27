# ExperimentPulseResultsDtoPrimaryMetricsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metricID** | **string** |  | [default to undefined]
**metricName** | **string** |  | [default to undefined]
**directionality** | **string** | Indicates the desired change direction for the metric. Use \&quot;increase\&quot; for positive changes and \&quot;decrease\&quot; for negative changes. | [default to undefined]
**absoluteChange** | **number** |  | [optional] [default to undefined]
**confidenceIntervalDelta** | **number** | Absolute confidence interval delta | [optional] [default to undefined]
**percentChange** | **number** |  | [optional] [default to undefined]
**sequentialTestingConfidenceIntervalDelta** | **number** |  | [optional] [default to undefined]
**percentConfidenceIntervalDelta** | **number** |  | [optional] [default to undefined]
**percentSequentialTestingConfidenceIntervalDelta** | **number** |  | [optional] [default to undefined]
**testMean** | **number** |  | [optional] [default to undefined]
**controlMean** | **number** |  | [optional] [default to undefined]
**testStd** | **number** |  | [optional] [default to undefined]
**controlStd** | **number** |  | [optional] [default to undefined]
**testUnits** | **number** |  | [optional] [default to undefined]
**controlUnits** | **number** |  | [optional] [default to undefined]
**pValue** | **number** |  | [optional] [default to undefined]
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
import { ExperimentPulseResultsDtoPrimaryMetricsInner } from 'statsig-console-sdk-nodejs';

const instance: ExperimentPulseResultsDtoPrimaryMetricsInner = {
    metricID,
    metricName,
    directionality,
    absoluteChange,
    confidenceIntervalDelta,
    percentChange,
    sequentialTestingConfidenceIntervalDelta,
    percentConfidenceIntervalDelta,
    percentSequentialTestingConfidenceIntervalDelta,
    testMean,
    controlMean,
    testStd,
    controlStd,
    testUnits,
    controlUnits,
    pValue,
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
