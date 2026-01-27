# HoldoutPartialUpdateContractDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isEnabled** | **boolean** | enable or disable the holdout | [optional] [default to undefined]
**description** | **string** | brief summary of what the holdout is being used for | [optional] [default to undefined]
**passPercentage** | **number** | percentage of users between 0-10% to pass through the holdout | [optional] [default to undefined]
**gateIDs** | **Array&lt;string&gt;** | an array of gateIDs which this holdout is applied to | [optional] [default to undefined]
**experimentIDs** | **Array&lt;string&gt;** | an array of experimentIDs which this holdout is applied to | [optional] [default to undefined]
**layerIDs** | **Array&lt;string&gt;** | an array of layerIDs which this holdout is applied to | [optional] [default to undefined]
**isGlobal** | **boolean** | whether the holdout is being applied to all new gates | [optional] [default to undefined]
**targetingGateID** | **string** | the gateID that the holdout is targeting | [optional] [default to undefined]
**monitoringMetrics** | [**Array&lt;ExperimentCreateDtoCureCovariatesInner&gt;**](ExperimentCreateDtoCureCovariatesInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { HoldoutPartialUpdateContractDto } from 'statsig-console-sdk-nodejs';

const instance: HoldoutPartialUpdateContractDto = {
    isEnabled,
    description,
    passPercentage,
    gateIDs,
    experimentIDs,
    layerIDs,
    isGlobal,
    targetingGateID,
    monitoringMetrics,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
