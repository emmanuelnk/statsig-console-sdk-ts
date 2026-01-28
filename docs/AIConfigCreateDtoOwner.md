# AIConfigCreateDtoOwner

Schema for owner data including ID, type, name. Note that if Entity is created by CONSOLE API, owner will be undefined.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ownerID** | **string** | ID of the owner | [optional] [default to undefined]
**ownerType** | **string** | Type of the owner (e.g., SDK_KEY or USER) | [optional] [default to undefined]
**ownerName** | **string** | The name of the owner. This field is optional. | [optional] [default to undefined]
**ownerEmail** | **string** | The email of the owner. This field is optional. | [optional] [default to undefined]

## Example

```typescript
import { AIConfigCreateDtoOwner } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: AIConfigCreateDtoOwner = {
    ownerID,
    ownerType,
    ownerName,
    ownerEmail,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
