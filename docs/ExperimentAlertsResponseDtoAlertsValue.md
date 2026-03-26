# ExperimentAlertsResponseDtoAlertsValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | Current status of the alert for this experiment | [default to undefined]
**timestamp** | **number** | Timestamp of the latest alert event for this experiment | [optional] [default to undefined]
**comment** | **string** | Comment associated with the latest alert event | [optional] [default to undefined]
**source** | **string** | Source identifier associated with the latest alert event | [optional] [default to undefined]
**arms** | [**Array&lt;ExperimentAlertsResponseDtoAlertsValueArmsInner&gt;**](ExperimentAlertsResponseDtoAlertsValueArmsInner.md) | Per-arm alert status for each non-control group in the experiment | [default to undefined]

## Example

```typescript
import { ExperimentAlertsResponseDtoAlertsValue } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: ExperimentAlertsResponseDtoAlertsValue = {
    status,
    timestamp,
    comment,
    source,
    arms,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
