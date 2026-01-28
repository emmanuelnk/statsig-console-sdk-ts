# ExternalExperimentDtoHealthChecksInnerMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**lastPulseLoadTime** | **number** |  | [optional] [default to undefined]
**crossoverPercent** | **number** |  | [optional] [default to undefined]
**assignmentSourceID** | **string** |  | [optional] [default to undefined]
**assignmentSourceName** | **string** |  | [optional] [default to undefined]
**foreignExperimentID** | **string** |  | [optional] [default to undefined]
**deduplication_rate** | **number** |  | [optional] [default to undefined]
**deduplication_rates** | [**Array&lt;ExternalExperimentDtoHealthChecksInnerMetadataDeduplicationRatesInner&gt;**](ExternalExperimentDtoHealthChecksInnerMetadataDeduplicationRatesInner.md) |  | [optional] [default to undefined]
**primary_id_type** | **string** |  | [default to undefined]
**secondary_id_type** | **string** |  | [optional] [default to undefined]
**missingMetrics** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**metrics** | [**Array&lt;ExternalExperimentDtoHealthChecksInnerMetadataMetricsInner&gt;**](ExternalExperimentDtoHealthChecksInnerMetadataMetricsInner.md) |  | [optional] [default to undefined]
**lastUpdatedDs** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ExternalExperimentDtoHealthChecksInnerMetadata } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: ExternalExperimentDtoHealthChecksInnerMetadata = {
    type,
    lastPulseLoadTime,
    crossoverPercent,
    assignmentSourceID,
    assignmentSourceName,
    foreignExperimentID,
    deduplication_rate,
    deduplication_rates,
    primary_id_type,
    secondary_id_type,
    missingMetrics,
    metrics,
    lastUpdatedDs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
