# PulseLoadHistoryDetailsDtoJobsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobType** | **string** | The Echidna job type. | [default to undefined]
**jobIDs** | **Array&lt;string&gt;** | Warehouse execution IDs for this job. | [default to undefined]
**startTime** | **number** | Unix timestamp in milliseconds when this job started. | [default to undefined]
**endTime** | **number** | Unix timestamp in milliseconds when this job ended, when available. | [default to undefined]
**sql** | **string** | The SQL executed for this job. | [default to undefined]
**metricSourceName** | **string** | Present for user-metrics style jobs and names the metric source used by the job. | [optional] [default to undefined]
**rollup** | **string** | Present for pulse-style jobs and indicates the rollup used for the calculation. | [optional] [default to undefined]

## Example

```typescript
import { PulseLoadHistoryDetailsDtoJobsInner } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: PulseLoadHistoryDetailsDtoJobsInner = {
    jobType,
    jobIDs,
    startTime,
    endTime,
    sql,
    metricSourceName,
    rollup,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
