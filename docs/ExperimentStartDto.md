# ExperimentStartDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analysisStartTime** | **string** | For Warehouse Native analysis-only experiments; start time of experiment analysis. | [optional] [default to undefined]
**analysisEndTime** | **string** | For Warehouse Native analysis-only experiments; end time of experiment analysis. | [optional] [default to undefined]
**turboMode** | **boolean** | For Warehouse Native analysis-only experiments; whether to run the initial analysis in turbo mode | [optional] [default to undefined]

## Example

```typescript
import { ExperimentStartDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: ExperimentStartDto = {
    analysisStartTime,
    analysisEndTime,
    turboMode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
