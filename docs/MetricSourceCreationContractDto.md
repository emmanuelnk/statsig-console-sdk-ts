# MetricSourceCreationContractDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the source, serving as its primary identifier. | [default to undefined]
**description** | **string** | An optional description for the source, providing context and details about its purpose and usage. | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Optional array of tags to categorize the source, facilitating easier organization and retrieval. | [optional] [default to undefined]
**sql** | **string** | The SQL query or statement used to extract data from the source. | [default to undefined]
**timestampColumn** | **string** | The name of the column containing timestamp data for the source. | [default to undefined]
**timestampAsDay** | **boolean** | Indicates whether the timestamp should be treated as a day-level granularity. | [optional] [default to undefined]
**idTypeMapping** | [**Array&lt;MetricSourceContractDtoIdTypeMappingInner&gt;**](MetricSourceContractDtoIdTypeMappingInner.md) | Array defining the mapping between Statsig unit IDs and their respective source columns. | [default to undefined]
**sourceType** | **string** | The type of source, indicating whether it is a database table or a custom query. | [optional] [default to undefined]
**tableName** | **string** | The name of the database table if the source type is \&quot;table\&quot;. | [optional] [default to undefined]
**datePartitionColumn** | **string** | The name of the date partition column if the source type is \&quot;table\&quot;. Can be undefined. | [optional] [default to undefined]
**customFieldMapping** | [**Array&lt;MetricSourceContractDtoCustomFieldMappingInner&gt;**](MetricSourceContractDtoCustomFieldMappingInner.md) | Optional array defining mappings for custom fields using specific formulas. | [optional] [default to undefined]
**isReadOnly** | **boolean** | Specifies if the source can only be edited via the Console API. | [optional] [default to undefined]
**isVerified** | **boolean** | Marks the metric source as verified, indicating trustworthiness within the organization. | [optional] [default to undefined]
**owner** | [**AIConfigCreateDtoOwner**](AIConfigCreateDtoOwner.md) |  | [optional] [default to undefined]
**team** | **string** | Optional field indicating the team name responsible for the metric, aiding in accountability and management. | [optional] [default to undefined]
**teamID** | **string** | Optional field indicating the team ID responsible for the metric, aiding in accountability and management. | [optional] [default to undefined]
**dryRun** | **boolean** | Skips persisting the source (used to validate that inputs are correct) | [optional] [default to undefined]

## Example

```typescript
import { MetricSourceCreationContractDto } from 'statsig-console-sdk-nodejs';

const instance: MetricSourceCreationContractDto = {
    name,
    description,
    tags,
    sql,
    timestampColumn,
    timestampAsDay,
    idTypeMapping,
    sourceType,
    tableName,
    datePartitionColumn,
    customFieldMapping,
    isReadOnly,
    isVerified,
    owner,
    team,
    teamID,
    dryRun,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
