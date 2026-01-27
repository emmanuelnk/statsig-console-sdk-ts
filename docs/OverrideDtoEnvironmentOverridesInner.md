# OverrideDtoEnvironmentOverridesInner

Contract for environment override

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environment** | **string** | Environment | [optional] [default to undefined]
**unitID** | **string** | Unit ID | [default to undefined]
**passingIDs** | **Array&lt;string&gt;** | List of passing IDs | [default to undefined]
**failingIDs** | **Array&lt;string&gt;** | List of failing IDs | [default to undefined]

## Example

```typescript
import { OverrideDtoEnvironmentOverridesInner } from 'statsig-console-sdk-nodejs';

const instance: OverrideDtoEnvironmentOverridesInner = {
    environment,
    unitID,
    passingIDs,
    failingIDs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
