# MetricValuesDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **number** | Metric value for the given unit_type | [default to undefined]
**unit_type** | **string** | Unit of the metric: stableID, userID, and other custom ids | [default to undefined]
**row_count** | **number** | Row count for imported metric, optional | [optional] [default to undefined]
**numerator** | **number** | Numerator of a ratio metric, optional | [optional] [default to undefined]
**denominator** | **number** | Denominator of a ratio metric, optional | [optional] [default to undefined]

## Example

```typescript
import { MetricValuesDto } from 'statsig-console-sdk-nodejs';

const instance: MetricValuesDto = {
    value,
    unit_type,
    row_count,
    numerator,
    denominator,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
