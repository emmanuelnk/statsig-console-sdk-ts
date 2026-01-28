# UpdateOverridesContractDtoOneOf1

Contract for updating ID overrides

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**passingUserIDs** | **Array&lt;string&gt;** | List of user IDs | [default to undefined]
**failingUserIDs** | **Array&lt;string&gt;** | List of user IDs | [default to undefined]
**passingCustomIDs** | **Array&lt;string&gt;** | Optional list of custom IDs | [optional] [default to undefined]
**failingCustomIDs** | **Array&lt;string&gt;** | Optional list of custom IDs | [optional] [default to undefined]

## Example

```typescript
import { UpdateOverridesContractDtoOneOf1 } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: UpdateOverridesContractDtoOneOf1 = {
    passingUserIDs,
    failingUserIDs,
    passingCustomIDs,
    failingCustomIDs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
