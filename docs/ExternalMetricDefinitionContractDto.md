# ExternalMetricDefinitionContractDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the metric, serving as its primary identifier. | [default to undefined]
**type** | **string** | The type of the metric, defining its aggregation method and characteristics. | [default to undefined]
**isVerified** | **boolean** | Marks the metric as verified, indicating trustworthiness within the organization. | [optional] [default to undefined]
**isReadOnly** | **boolean** | Set to true to make the metric definition editable only through the Console API. | [optional] [default to undefined]
**unitTypes** | **Array&lt;string&gt;** | Array of unit types associated with the metric, such as stableID or userID. | [optional] [default to undefined]
**metricEvents** | [**Array&lt;ExternalMetricDefinitionContractDtoMetricEventsInner&gt;**](ExternalMetricDefinitionContractDtoMetricEventsInner.md) | An array of event definitions used to compute the metric. | [optional] [default to undefined]
**metricComponentMetrics** | [**Array&lt;ExperimentCreateDtoCureCovariatesInner&gt;**](ExperimentCreateDtoCureCovariatesInner.md) | List of input metrics used to calculate the new metric for composite types. | [optional] [default to undefined]
**description** | **string** | An optional description providing additional context about the metric. | [optional] [default to undefined]
**directionality** | **string** | Specifies the desired directionality for the metric, indicating whether an increase or decrease is favorable. | [default to undefined]
**tags** | **Array&lt;string&gt;** | Optional tags for categorizing the metric and improving searchability. | [optional] [default to undefined]
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
**id** | **string** | Unique identifier for the metric, used for referencing within the system. | [default to undefined]
**isHidden** | **boolean** | Indicates if the metric is hidden from the user interface. | [optional] [default to undefined]
**lineage** | [**ExternalMetricDefinitionContractDtoLineage**](ExternalMetricDefinitionContractDtoLineage.md) |  | [default to undefined]
**creatorName** | **string** | Name of the person who created the metric, if available. | [optional] [default to undefined]
**creatorEmail** | **string** | Email address of the metric creator for contact purposes. | [optional] [default to undefined]
**createdTime** | **number** | Timestamp indicating when the metric was created. | [optional] [default to undefined]
**lastModifierID** | **string** | ID of the last modifier. | [optional] [default to undefined]
**lastModifiedTime** | **number** | Time of the last modification to this metric. | [optional] [default to undefined]
**lastModifierEmail** | **string** | Email of the last modifier. | [optional] [default to undefined]
**lastModifierName** | **string** | Name of the last modifier. | [optional] [default to undefined]
**owner** | [**ExternalMetricDefinitionContractDtoOwner**](ExternalMetricDefinitionContractDtoOwner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ExternalMetricDefinitionContractDto } from 'statsig-console-sdk-nodejs';

const instance: ExternalMetricDefinitionContractDto = {
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
    id,
    isHidden,
    lineage,
    creatorName,
    creatorEmail,
    createdTime,
    lastModifierID,
    lastModifiedTime,
    lastModifierEmail,
    lastModifierName,
    owner,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
