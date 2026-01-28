# IDListDto

Schema for a list of IDs with a name and count

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name associated with the list of IDs | [default to undefined]
**count** | **number** | The count of IDs in the list | [default to undefined]
**ids** | **Array&lt;string&gt;** | The array of IDs | [default to undefined]

## Example

```typescript
import { IDListDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: IDListDto = {
    name,
    count,
    ids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
