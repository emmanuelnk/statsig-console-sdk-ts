# IngestionSourceCreateContractDtoOneOfColumnMapping


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unit_id** | **string** | The unique user identifier this metric is for. This might not necessarily be a user_id - it could be a custom_id of some kind. Make sure this is in the same format as your logged unit_ids. | [default to undefined]
**id_type** | **string** | The id_type the unit_id represents. Must be valid id_type. Default Statsig types are user_id/stable_id, but you may have generated custom id_types. Make sure this matches (case sensitive) a customID in your project, or you won’t get experiment results. | [default to undefined]
**dateid** | **string** | Date of the daily metric, ISO formatted (ex. 2021-02-17). We’ll load custom metrics to whatever date you use here. | [default to undefined]
**metric_name** | **string** | String format. Not null. Length &lt; 128 characters. | [default to undefined]
**metric_value** | **string** | Numeric value for the metric. This OR both of numerator and denominator need to be provided. | [optional] [default to 'null']
**numerator** | **string** | Required for ratio metrics. If present along with a denominator in any record, the metric will be treated as ratio and only calculated for users with non-null denominators | [optional] [default to 'null']
**denominator** | **string** | Required for ratio metrics. If present along with a numerator in any record, the metric will be treated as ratio and only calculated for users with non-null numerators. | [optional] [default to 'null']

## Example

```typescript
import { IngestionSourceCreateContractDtoOneOfColumnMapping } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: IngestionSourceCreateContractDtoOneOfColumnMapping = {
    unit_id,
    id_type,
    dateid,
    metric_name,
    metric_value,
    numerator,
    denominator,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
