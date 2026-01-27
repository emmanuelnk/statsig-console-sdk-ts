# WhConnectionUpdateDtoDatabricks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **string** |  | [optional] [default to undefined]
**path** | **string** |  | [optional] [default to undefined]
**accessToken** | **string** |  | [optional] [default to undefined]
**stagingDatabase** | **string** | Statsig will use this Database to save intermediate tables in the experimentation pipeline. Must be a database that the service user has write access to. | [optional] [default to undefined]
**oauthClientID** | **string** |  | [optional] [default to undefined]
**consoleComputePath** | **string** | An optional separate path that Statsig will use to run interactive queries made from the Console. | [optional] [default to undefined]

## Example

```typescript
import { WhConnectionUpdateDtoDatabricks } from 'statsig-console-sdk-nodejs';

const instance: WhConnectionUpdateDtoDatabricks = {
    host,
    path,
    accessToken,
    stagingDatabase,
    oauthClientID,
    consoleComputePath,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
