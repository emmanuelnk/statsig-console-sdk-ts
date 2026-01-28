# UserUpdateDto

Schema for updating user information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** | **string** | Update the user\&#39;s role. Can be \&#39;Admin\&#39;, \&#39;Read Only\&#39;, \&#39;Member\&#39;, or any custom role name. | [optional] [default to undefined]
**firstName** | **string** | Update the user\&#39;s first name. | [optional] [default to undefined]
**lastName** | **string** | Update the user\&#39;s last name. | [optional] [default to undefined]

## Example

```typescript
import { UserUpdateDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: UserUpdateDto = {
    role,
    firstName,
    lastName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
