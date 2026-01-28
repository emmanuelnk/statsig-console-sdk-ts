# EntityPropertySourceDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Unique identifier for the entity property source. | [default to undefined]
**description** | **string** | Detailed context and purpose of the entity property source. | [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags for categorization and search. | [default to undefined]
**sql** | **string** | SQL query defining the data source. | [default to undefined]
**timestampColumn** | **string** | Optional column name for timestamp. | [optional] [default to undefined]
**timestampAsDay** | **boolean** | Indicates if the timestamp is treated as a day. | [optional] [default to undefined]
**idTypeMapping** | [**Array&lt;EntityPropertySourceCreationDtoIdTypeMappingInner&gt;**](EntityPropertySourceCreationDtoIdTypeMappingInner.md) | Mappings of Statsig units to their columns. | [default to undefined]
**isReadOnly** | **boolean** | Specifies if the source can only be edited via the Console API. | [optional] [default to undefined]
**owner** | [**AIConfigCreateDtoOwner**](AIConfigCreateDtoOwner.md) |  | [optional] [default to undefined]
**team** | **string** | Optional field indicating the team name responsible for the metric, aiding in accountability and management. | [optional] [default to undefined]
**teamID** | **string** | Optional field indicating the team ID responsible for the metric, aiding in accountability and management. | [optional] [default to undefined]

## Example

```typescript
import { EntityPropertySourceDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: EntityPropertySourceDto = {
    name,
    description,
    tags,
    sql,
    timestampColumn,
    timestampAsDay,
    idTypeMapping,
    isReadOnly,
    owner,
    team,
    teamID,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
