# ExposureCountDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gates** | [**Array&lt;ExposureCountDtoGatesInner&gt;**](ExposureCountDtoGatesInner.md) | ids of gates to query (max 25) | [default to undefined]
**experiments** | [**Array&lt;ExposureCountDtoGatesInner&gt;**](ExposureCountDtoGatesInner.md) | ids of experiments to query (max 25) | [default to undefined]
**dynamicConfigs** | [**Array&lt;ExposureCountDtoGatesInner&gt;**](ExposureCountDtoGatesInner.md) | ids of dynamic configs to query (max 25) | [default to undefined]

## Example

```typescript
import { ExposureCountDto } from 'statsig-console-sdk-nodejs';

const instance: ExposureCountDto = {
    gates,
    experiments,
    dynamicConfigs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
