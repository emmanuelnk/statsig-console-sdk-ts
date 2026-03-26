# ExperimentAlertsResponseDtoAlertsValueArmsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groupID** | **string** | Experiment group id for this arm-specific alert status | [default to undefined]
**groupName** | **string** | Experiment group name for this arm-specific alert status | [default to undefined]
**status** | **string** | Current status of the alert for this experiment arm | [default to undefined]
**timestamp** | **number** | Timestamp of the latest alert datum used to compute this arm status | [optional] [default to undefined]
**percentChange** | **number** | Latest percent change recorded for this arm in guardrail alert event data | [optional] [default to undefined]
**lowerCI** | **number** | Latest lower confidence interval bound for percent change when available | [optional] [default to undefined]
**upperCI** | **number** | Latest upper confidence interval bound for percent change when available | [optional] [default to undefined]
**alertThreshold** | **number** | Alert threshold snapshot stored on the latest datum | [optional] [default to undefined]
**warningThreshold** | **number** | Warning threshold snapshot stored on the latest datum | [optional] [default to undefined]

## Example

```typescript
import { ExperimentAlertsResponseDtoAlertsValueArmsInner } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: ExperimentAlertsResponseDtoAlertsValueArmsInner = {
    groupID,
    groupName,
    status,
    timestamp,
    percentChange,
    lowerCI,
    upperCI,
    alertThreshold,
    warningThreshold,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
