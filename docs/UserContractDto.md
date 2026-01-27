# UserContractDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** | The email address of the user. | [default to undefined]
**firstName** | **string** | The user\&#39;s first name. | [default to undefined]
**lastName** | **string** | The user\&#39;s last name. | [default to undefined]
**role** | **string** | The user\&#39;s role, which can be \&#39;Admin\&#39;, \&#39;Read Only\&#39;, \&#39;Member\&#39;, or any custom role name. | [default to undefined]

## Example

```typescript
import { UserContractDto } from 'statsig-console-sdk-nodejs';

const instance: UserContractDto = {
    email,
    firstName,
    lastName,
    role,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
