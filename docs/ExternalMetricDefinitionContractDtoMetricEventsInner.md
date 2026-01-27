# ExternalMetricDefinitionContractDtoMetricEventsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the metric event. | [default to undefined]
**type** | **string** | The type of metric event. Allowed values include: count, count_distinct, value, and metadata. | [optional] [default to undefined]
**metadataKey** | **string** | The key for associated metadata, if applicable. | [optional] [default to undefined]
**criteria** | [**Array&lt;MetricEventsCriteriaDto&gt;**](MetricEventsCriteriaDto.md) | Filtering criteria for the metric event, including conditions and values to refine the event data. | [optional] [default to undefined]

## Example

```typescript
import { ExternalMetricDefinitionContractDtoMetricEventsInner } from 'statsig-console-sdk-nodejs';

const instance: ExternalMetricDefinitionContractDtoMetricEventsInner = {
    name,
    type,
    metadataKey,
    criteria,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
