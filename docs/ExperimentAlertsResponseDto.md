# ExperimentAlertsResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alerts** | [**{ [key: string]: ExperimentAlertsResponseDtoAlertsValue; }**](ExperimentAlertsResponseDtoAlertsValue.md) | Alert status keyed by encoded metric id | [default to undefined]

## Example

```typescript
import { ExperimentAlertsResponseDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: ExperimentAlertsResponseDto = {
    alerts,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
