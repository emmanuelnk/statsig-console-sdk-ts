# ExternalExperimentDtoQualityScoreBreakdownInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**criterion** | **string** | The quality score criterion name. | [default to undefined]
**status** | **string** | The quality score status for the criterion. | [default to undefined]
**passingDescription** | **string** | The passing description for the criterion. | [default to undefined]
**score** | **number** | The normalized score contribution for this criterion. | [default to undefined]
**weight** | **number** | The normalized weight for this criterion. | [default to undefined]

## Example

```typescript
import { ExternalExperimentDtoQualityScoreBreakdownInner } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: ExternalExperimentDtoQualityScoreBreakdownInner = {
    criterion,
    status,
    passingDescription,
    score,
    weight,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
