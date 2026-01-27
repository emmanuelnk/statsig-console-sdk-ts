# WhConnectionUpdateDtoAthena


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**region** | **string** | The AWS region of your resources. | [optional] [default to undefined]
**bucket** | **string** | The name of your S3 bucket. | [optional] [default to undefined]
**dataCatalog** | **string** | The name of your Athena Data Source/Catalog. | [optional] [default to undefined]
**useCatalogInQueryContext** | **boolean** | Whether to specify the Data Catalog when making calls to your Athena instance via the SDK. This can be helpful to avoid needing to specify the same catalog in SQL for all queries. | [optional] [default to undefined]
**database** | **string** | The name of the database to use for staging tables. | [optional] [default to undefined]
**queryResultLocation** | **string** | The S3 location for Athena query results. | [optional] [default to undefined]
**workgroup** | **string** | The name of the Athena Workgroup to use for query results. | [optional] [default to undefined]
**roleArn** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { WhConnectionUpdateDtoAthena } from 'statsig-console-sdk-nodejs';

const instance: WhConnectionUpdateDtoAthena = {
    region,
    bucket,
    dataCatalog,
    useCatalogInQueryContext,
    database,
    queryResultLocation,
    workgroup,
    roleArn,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
