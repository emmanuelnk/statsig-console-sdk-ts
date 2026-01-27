# KeyDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** |  | [default to undefined]
**type** | **string** |  | [default to undefined]
**description** | **string** |  | [default to undefined]
**scopes** | **Array&lt;string&gt;** |  | [default to undefined]
**environments** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**primaryTargetApp** | **string** |  | [optional] [default to undefined]
**secondaryTargetApps** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**status** | **string** |  | [default to undefined]

## Example

```typescript
import { KeyDto } from 'statsig-console-sdk-nodejs';

const instance: KeyDto = {
    key,
    type,
    description,
    scopes,
    environments,
    primaryTargetApp,
    secondaryTargetApps,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
