# WhConnectionUpdateDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**databricks** | [**WhConnectionUpdateDtoDatabricks**](WhConnectionUpdateDtoDatabricks.md) |  | [optional] [default to undefined]
**snowflake** | [**WhConnectionUpdateDtoSnowflake**](WhConnectionUpdateDtoSnowflake.md) |  | [optional] [default to undefined]
**bigquery** | [**WhConnectionUpdateDtoBigquery**](WhConnectionUpdateDtoBigquery.md) |  | [optional] [default to undefined]
**redshift** | [**WhConnectionUpdateDtoRedshift**](WhConnectionUpdateDtoRedshift.md) |  | [optional] [default to undefined]
**athena** | [**WhConnectionUpdateDtoAthena**](WhConnectionUpdateDtoAthena.md) |  | [optional] [default to undefined]

## Example

```typescript
import { WhConnectionUpdateDto } from 'statsig-console-sdk-nodejs';

const instance: WhConnectionUpdateDto = {
    databricks,
    snowflake,
    bigquery,
    redshift,
    athena,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
