# ExternalExperimentDtoQualityScore

The experiment quality score and per-criterion breakdown.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**score** | **number** | The normalized experiment quality score. | [default to undefined]
**breakdown** | [**Array&lt;ExternalExperimentDtoQualityScoreBreakdownInner&gt;**](ExternalExperimentDtoQualityScoreBreakdownInner.md) | The per-criterion quality score breakdown. | [default to undefined]

## Example

```typescript
import { ExternalExperimentDtoQualityScore } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: ExternalExperimentDtoQualityScore = {
    score,
    breakdown,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
