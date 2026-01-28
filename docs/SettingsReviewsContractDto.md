# SettingsReviewsContractDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_config_review_required** | **boolean** | Whether config reviews are required. | [default to undefined]
**is_metric_review_required** | **boolean** | Whether metric reviews are required. | [default to undefined]
**is_metric_review_required_on_verified_only** | **boolean** | Whether metric reviews are only required for verified metrics. | [default to undefined]
**is_whn_analysis_only_review_required** | **boolean** | Whether analysis-only experiment reviews are required. Only applicable to WHN projects. | [optional] [default to undefined]
**is_whn_source_review_required** | **boolean** | Whether metric/assignment/entity property source reviews are required. Only applicable to WHN projects. | [optional] [default to undefined]

## Example

```typescript
import { SettingsReviewsContractDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: SettingsReviewsContractDto = {
    is_config_review_required,
    is_metric_review_required,
    is_metric_review_required_on_verified_only,
    is_whn_analysis_only_review_required,
    is_whn_source_review_required,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
