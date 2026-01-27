# KeyCreateContractDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** |  | [default to undefined]
**type** | **string** |  | [default to undefined]
**scopes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**environments** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**targetAppID** | **string** |  | [optional] [default to undefined]
**secondaryTargetAppIDs** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { KeyCreateContractDto } from 'statsig-console-sdk-nodejs';

const instance: KeyCreateContractDto = {
    description,
    type,
    scopes,
    environments,
    targetAppID,
    secondaryTargetAppIDs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
