# ParamStoreCreateDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Param Store Name | [default to undefined]
**description** | **string** | Param Store Description | [default to undefined]
**displayName** | **string** | Param Store Display Name | [default to undefined]
**targetAppIDs** | **Array&lt;string&gt;** | Target App IDs | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags | [optional] [default to undefined]
**team** | **string** | Team | [optional] [default to undefined]

## Example

```typescript
import { ParamStoreCreateDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: ParamStoreCreateDto = {
    name,
    description,
    displayName,
    targetAppIDs,
    tags,
    team,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
