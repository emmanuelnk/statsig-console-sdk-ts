# ExternalMetricDefinitionContractDtoLineage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**events** | **Array&lt;string&gt;** | List of event names that contribute to the metric’s calculation. | [default to undefined]
**metrics** | **Array&lt;string&gt;** | List of metric names that are part of this metric’s lineage. | [default to undefined]

## Example

```typescript
import { ExternalMetricDefinitionContractDtoLineage } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: ExternalMetricDefinitionContractDtoLineage = {
    events,
    metrics,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
