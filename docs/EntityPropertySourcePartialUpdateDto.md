# EntityPropertySourcePartialUpdateDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Unique identifier for the entity property source. | [optional] [default to undefined]
**description** | **string** | Detailed context and purpose of the entity property source. | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags for categorization and search. | [optional] [default to undefined]
**sql** | **any** | SQL query defining the data source | [optional] [readonly] [default to undefined]
**timestampColumn** | **string** | Optional column name for timestamp. | [optional] [default to undefined]
**timestampAsDay** | **boolean** | Indicates if the timestamp is treated as a day. | [optional] [default to undefined]
**idTypeMapping** | [**Array&lt;EntityPropertySourceCreationDtoIdTypeMappingInner&gt;**](EntityPropertySourceCreationDtoIdTypeMappingInner.md) | Mappings of Statsig units to their columns. | [optional] [default to undefined]
**isReadOnly** | **boolean** | Specifies if the source can only be edited via the Console API. | [optional] [default to undefined]
**team** | **string** | Optional field indicating the team name responsible for the metric, aiding in accountability and management. | [optional] [default to undefined]
**teamID** | **string** | Optional field indicating the team ID responsible for the metric, aiding in accountability and management. | [optional] [default to undefined]
**dryRun** | **boolean** | Skips persisting the entity property source (used to validate that inputs are correct) | [optional] [default to undefined]

## Example

```typescript
import { EntityPropertySourcePartialUpdateDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: EntityPropertySourcePartialUpdateDto = {
    name,
    description,
    tags,
    sql,
    timestampColumn,
    timestampAsDay,
    idTypeMapping,
    isReadOnly,
    team,
    teamID,
    dryRun,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
