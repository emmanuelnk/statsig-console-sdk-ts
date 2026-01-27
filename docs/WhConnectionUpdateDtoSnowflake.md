# WhConnectionUpdateDtoSnowflake


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountName** | **string** |  | [optional] [default to undefined]
**serviceUserName** | **string** |  | [optional] [default to undefined]
**serviceUserPassword** | **string** |  | [optional] [default to undefined]
**privateKey** | **string** |  | [optional] [default to undefined]
**keyPassPhrase** | **string** |  | [optional] [default to undefined]
**stagingDatabaseName** | **string** | The database containing the staging schema | [optional] [default to undefined]
**stagingSchemaName** | **string** | Statsig will use this Schema to save intermediate tables in the experimentation pipeline. Must be a schema that the service user has write access to. | [optional] [default to undefined]
**computeWarehouse** | **string** | The warehouse that Statsig will use to run queries. Must be a warehouse that the service user has access to. | [optional] [default to undefined]
**consoleComputeWarehouse** | **string** | An optional warehouse that Statsig will use to run interactive queries made from the Console. | [optional] [default to undefined]

## Example

```typescript
import { WhConnectionUpdateDtoSnowflake } from 'statsig-console-sdk-nodejs';

const instance: WhConnectionUpdateDtoSnowflake = {
    accountName,
    serviceUserName,
    serviceUserPassword,
    privateKey,
    keyPassPhrase,
    stagingDatabaseName,
    stagingSchemaName,
    computeWarehouse,
    consoleComputeWarehouse,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
