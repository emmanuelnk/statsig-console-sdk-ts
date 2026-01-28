# MetricCreationContractDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the new metric, which identifies it within the system. | [default to undefined]
**type** | **string** |  | [default to undefined]
**isVerified** | **boolean** | Marks the metric as verified for internal trustworthiness. | [optional] [default to undefined]
**isReadOnly** | **boolean** | Set to true to make the metric definition editable only from the Console API. | [optional] [default to undefined]
**unitTypes** | **Array&lt;string&gt;** | Array of unit types associated with the metric, such as stableID or userID. | [optional] [default to undefined]
**metricEvents** | [**Array&lt;ExternalMetricDefinitionContractDtoMetricEventsInner&gt;**](ExternalMetricDefinitionContractDtoMetricEventsInner.md) | An array of event definitions used to compute the metric. | [optional] [default to undefined]
**metricComponentMetrics** | [**Array&lt;ExperimentCreateDtoCureCovariatesInner&gt;**](ExperimentCreateDtoCureCovariatesInner.md) | List of input metrics used to calculate the new metric for composite types. | [optional] [default to undefined]
**description** | **string** | A description of the new metric, providing context and purpose. | [optional] [default to undefined]
**directionality** | **string** | Indicates the desired change direction for the metric. Use \&quot;increase\&quot; for positive changes and \&quot;decrease\&quot; for negative changes. | [optional] [default to DirectionalityEnum_Increase]
**tags** | [**MetricCreationContractDtoTags**](MetricCreationContractDtoTags.md) |  | [optional] [default to undefined]
**isPermanent** | **boolean** | Indicates whether the metric is permanent and should not be deleted. | [optional] [default to undefined]
**rollupTimeWindow** | **string** | Time window for the metric rollup. Specify \&quot;custom\&quot; for a customized time window. | [optional] [default to undefined]
**customRollUpStart** | **number** | Custom time window start date in days since exposure. | [optional] [default to undefined]
**customRollUpEnd** | **number** | Custom time window end date in days since exposure. | [optional] [default to undefined]
**funnelEventList** | [**Array&lt;ExternalMetricDefinitionContractDtoFunnelEventListInner&gt;**](ExternalMetricDefinitionContractDtoFunnelEventListInner.md) | List of events used to create funnel metrics. | [optional] [default to undefined]
**funnelCountDistinct** | **string** | Specifies whether to count events or distinct users for the funnel metric. | [optional] [default to undefined]
**warehouseNative** | [**ExternalMetricDefinitionContractDtoWarehouseNative**](ExternalMetricDefinitionContractDtoWarehouseNative.md) |  | [optional] [default to undefined]
**team** | **string** | The team associated with the metric, applicable for enterprise environments. | [optional] [default to undefined]
**teamID** | **string** | The team ID associated with the metric, applicable for enterprise environments. | [optional] [default to undefined]
**dryRun** | **boolean** | Skips persisting the metric (used to validate that inputs are correct) | [optional] [default to undefined]

## Example

```typescript
import { MetricCreationContractDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: MetricCreationContractDto = {
    name,
    type,
    isVerified,
    isReadOnly,
    unitTypes,
    metricEvents,
    metricComponentMetrics,
    description,
    directionality,
    tags,
    isPermanent,
    rollupTimeWindow,
    customRollUpStart,
    customRollUpEnd,
    funnelEventList,
    funnelCountDistinct,
    warehouseNative,
    team,
    teamID,
    dryRun,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
