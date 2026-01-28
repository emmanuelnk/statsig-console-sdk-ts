# UserInvitesDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** | **string** | Role assigned to the invited users. Can be \&#39;Admin\&#39;, \&#39;Read Only\&#39;, \&#39;Member\&#39;, or any custom role name. | [default to undefined]
**emails** | **Array&lt;string&gt;** | List of email addresses to send invitations to. Invitee Emails must have the same domain to your company email domain. | [default to undefined]
**teams** | **Array&lt;string&gt;** | Optional list of teams that the invited users will be associated with. | [optional] [default to undefined]

## Example

```typescript
import { UserInvitesDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: UserInvitesDto = {
    role,
    emails,
    teams,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
