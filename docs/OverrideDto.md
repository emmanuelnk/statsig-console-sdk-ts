# OverrideDto

Contract for overrides

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**passingUserIDs** | **Array&lt;string&gt;** | List of user IDs | [default to undefined]
**failingUserIDs** | **Array&lt;string&gt;** | List of user IDs | [default to undefined]
**passingCustomIDs** | **Array&lt;string&gt;** | Optional list of custom IDs | [optional] [default to undefined]
**failingCustomIDs** | **Array&lt;string&gt;** | Optional list of custom IDs | [optional] [default to undefined]
**environmentOverrides** | [**Array&lt;OverrideDtoEnvironmentOverridesInner&gt;**](OverrideDtoEnvironmentOverridesInner.md) |  | [default to undefined]

## Example

```typescript
import { OverrideDto } from 'statsig-console-sdk-nodejs';

const instance: OverrideDto = {
    passingUserIDs,
    failingUserIDs,
    passingCustomIDs,
    failingCustomIDs,
    environmentOverrides,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
