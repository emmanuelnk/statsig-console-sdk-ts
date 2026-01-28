# MetricEventsCriteriaDto

Array of event criteria for defining filtering conditions in metrics analysis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Type of event criterion for filtering metrics. Options include &#x60;value&#x60;, &#x60;metadata&#x60;, &#x60;user&#x60;, and &#x60;user_custom&#x60;; in Warehouse Native, this should always be &#x60;metadata&#x60;. | [default to undefined]
**column** | **string** | Optional column specifying which data attribute to filter on. | [optional] [default to undefined]
**condition** | **string** | sql_filter, start_withs, ends_with, after_exposure, and before_exposure are only applicable in Warehouse Native | [default to undefined]
**values** | **Array&lt;string&gt;** | Optional array of values for the criterion to match against. | [optional] [default to undefined]
**nullVacuousOverride** | **boolean** | If true, overrides null values in criterion evaluation. | [optional] [default to undefined]

## Example

```typescript
import { MetricEventsCriteriaDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: MetricEventsCriteriaDto = {
    type,
    column,
    condition,
    values,
    nullVacuousOverride,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
