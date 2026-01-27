# ExternalMetricDefinitionContractDtoOwner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ownerID** | **string** | ID of the owner | [optional] [default to undefined]
**ownerType** | **string** | Type of the owner (e.g., SDK_KEY or USER) | [optional] [default to undefined]
**ownerName** | **string** | The name of the owner. This field is optional. | [optional] [default to undefined]
**ownerEmail** | **string** | The email of the owner. This field is optional. | [optional] [default to undefined]
**name** | **string** | The name of the owner. | [default to undefined]

## Example

```typescript
import { ExternalMetricDefinitionContractDtoOwner } from 'statsig-console-sdk-nodejs';

const instance: ExternalMetricDefinitionContractDtoOwner = {
    ownerID,
    ownerType,
    ownerName,
    ownerEmail,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
