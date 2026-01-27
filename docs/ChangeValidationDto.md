# ChangeValidationDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reviewID** | **string** |  | [default to undefined]
**validated** | **boolean** |  | [default to undefined]
**message** | **string** |  | [optional] [default to undefined]
**debugLinks** | [**Array&lt;ChangeValidationDtoDebugLinksInner&gt;**](ChangeValidationDtoDebugLinksInner.md) |  | [optional] [default to undefined]
**releasePipelineIDForCommit** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ChangeValidationDto } from 'statsig-console-sdk-nodejs';

const instance: ChangeValidationDto = {
    reviewID,
    validated,
    message,
    debugLinks,
    releasePipelineIDForCommit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
