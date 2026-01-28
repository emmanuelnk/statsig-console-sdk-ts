# WhConnectionUpdateDtoRedshift


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **string** | The name of the Redshift cluster. | [optional] [default to undefined]
**port** | **number** | The port of the Redshift cluster. | [optional] [default to undefined]
**database** | **string** | The database of the Redshift cluster. | [optional] [default to undefined]
**username** | **string** | The username of the admin of the Redshift cluster. | [optional] [default to undefined]
**password** | **string** | The password of the admin. | [optional] [default to undefined]
**stagingSchema** | **string** | The schema to use for staging tables. | [optional] [default to undefined]
**useSshTunnel** | **boolean** |  | [optional] [default to undefined]
**sshUsername** | **string** |  | [optional] [default to undefined]
**sshPort** | **number** |  | [optional] [default to undefined]
**sshHost** | **string** |  | [optional] [default to undefined]
**sshPrivateKey** | **string** |  | [optional] [default to undefined]
**sshPublicKey** | **string** |  | [optional] [default to undefined]
**verifyCA** | **boolean** | Whether to verify CA over SSL. | [optional] [default to undefined]
**useAssumeRole** | **boolean** | Whether to use an IAM role to connect to the Redshift cluster. | [optional] [default to undefined]
**roleArn** | **string** |  | [optional] [default to undefined]
**region** | **string** | The AWS region of your Redshift cluster. Needed if using an IAM Role to connect. | [optional] [default to undefined]

## Example

```typescript
import { WhConnectionUpdateDtoRedshift } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: WhConnectionUpdateDtoRedshift = {
    host,
    port,
    database,
    username,
    password,
    stagingSchema,
    useSshTunnel,
    sshUsername,
    sshPort,
    sshHost,
    sshPrivateKey,
    sshPublicKey,
    verifyCA,
    useAssumeRole,
    roleArn,
    region,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
