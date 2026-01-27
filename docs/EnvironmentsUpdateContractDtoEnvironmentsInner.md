# EnvironmentsUpdateContractDtoEnvironmentsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the environment. | [default to undefined]
**id** | **string** | A unique identifier for the environment. If not provided, the associated environment will be treated as a newly created environment. | [optional] [default to undefined]
**isProduction** | **boolean** | Whether the environment is production. | [default to undefined]
**requiresReview** | **boolean** | Whether the environment requires review. | [default to undefined]
**requiredReviewGroupID** | **string** | The ID of the review group that the environment requires review from. | [optional] [default to undefined]
**requiresReleasePipeline** | **boolean** | Whether the environment requires a release pipeline. | [default to undefined]

## Example

```typescript
import { EnvironmentsUpdateContractDtoEnvironmentsInner } from 'statsig-console-sdk-nodejs';

const instance: EnvironmentsUpdateContractDtoEnvironmentsInner = {
    name,
    id,
    isProduction,
    requiresReview,
    requiredReviewGroupID,
    requiresReleasePipeline,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
