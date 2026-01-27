# ExternalMetricDefinitionContractDtoWarehouseNativeFunnelEventsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**criteria** | [**Array&lt;MetricEventsCriteriaDto&gt;**](MetricEventsCriteriaDto.md) | Optional array of criteria to filter the funnel events, defined by various types and conditions. | [optional] [default to undefined]
**metricSourceName** | **string** | Optional name of the metric source associated with the funnel event. | [optional] [default to undefined]
**name** | **string** | Optional step name for the funnel event, can be null if not specified. | [optional] [default to undefined]
**sessionIdentifierField** | **string** | Name of column which being used as session identifier. Funnel event with the same metric source | [optional] [default to undefined]

## Example

```typescript
import { ExternalMetricDefinitionContractDtoWarehouseNativeFunnelEventsInner } from 'statsig-console-sdk-nodejs';

const instance: ExternalMetricDefinitionContractDtoWarehouseNativeFunnelEventsInner = {
    criteria,
    metricSourceName,
    name,
    sessionIdentifierField,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
