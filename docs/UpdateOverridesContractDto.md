# UpdateOverridesContractDto

Contract for updating overrides

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environmentOverrides** | [**Array&lt;OverrideDtoEnvironmentOverridesInner&gt;**](OverrideDtoEnvironmentOverridesInner.md) |  | [default to undefined]
**passingUserIDs** | **Array&lt;string&gt;** | List of user IDs | [default to undefined]
**failingUserIDs** | **Array&lt;string&gt;** | List of user IDs | [default to undefined]
**passingCustomIDs** | **Array&lt;string&gt;** | Optional list of custom IDs | [optional] [default to undefined]
**failingCustomIDs** | **Array&lt;string&gt;** | Optional list of custom IDs | [optional] [default to undefined]

## Example

```typescript
import { UpdateOverridesContractDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: UpdateOverridesContractDto = {
    environmentOverrides,
    passingUserIDs,
    failingUserIDs,
    passingCustomIDs,
    failingCustomIDs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
