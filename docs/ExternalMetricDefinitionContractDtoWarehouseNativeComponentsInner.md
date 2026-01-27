# ExternalMetricDefinitionContractDtoWarehouseNativeComponentsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operator** | **string** | Operator for this component | [default to undefined]
**aggregation** | **string** | Aggregation type for this component | [optional] [default to undefined]
**metricSourceName** | **string** | Metric source name for this component | [optional] [default to undefined]
**name** | **string** | Optional name for this component | [optional] [default to undefined]
**criteria** | [**Array&lt;MetricEventsCriteriaDto&gt;**](MetricEventsCriteriaDto.md) | Optional filtering criteria for this component | [optional] [default to undefined]
**valueColumn** | **string** | Value column for this component | [optional] [default to undefined]

## Example

```typescript
import { ExternalMetricDefinitionContractDtoWarehouseNativeComponentsInner } from 'statsig-console-sdk-nodejs';

const instance: ExternalMetricDefinitionContractDtoWarehouseNativeComponentsInner = {
    operator,
    aggregation,
    metricSourceName,
    name,
    criteria,
    valueColumn,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
