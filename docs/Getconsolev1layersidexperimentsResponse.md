# Getconsolev1layersidexperimentsResponse

Response for getconsolev1layersidexperiments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | A simple string explaining the result of the operation. | [default to undefined]
**data** | [**Array&lt;ExternalExperimentDto&gt;**](ExternalExperimentDto.md) | Array of ExternalExperimentDto items. | [default to undefined]
**pagination** | [**PaginationResponseMetadataDto**](PaginationResponseMetadataDto.md) |  | [default to undefined]

## Example

```typescript
import { Getconsolev1layersidexperimentsResponse } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: Getconsolev1layersidexperimentsResponse = {
    message,
    data,
    pagination,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
