# AssignmentSourceContractDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Unique identifier for the assignment source. | [default to undefined]
**description** | **string** | Detailed context and purpose of the assignment source. | [default to undefined]
**isVerified** | **boolean** | Marks the assignment source as verified for internal trustworthiness. | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags for categorization and search. | [default to undefined]
**sql** | **string** | SQL query defining the data source for assignments. | [default to undefined]
**timestampColumn** | **string** | Column name representing the timestamp of assignments. | [default to undefined]
**experimentIDColumn** | **string** | Column name for the experiment ID associated with the assignments. | [default to undefined]
**groupIDColumn** | **string** | Column name for the group ID linked to the assignments. | [default to undefined]
**groupNameColumn** | **string** | Optional column name for the group name linked to the assignments. | [optional] [default to undefined]
**idTypeMapping** | [**Array&lt;AssignmentSourceContractDtoIdTypeMappingInner&gt;**](AssignmentSourceContractDtoIdTypeMappingInner.md) | Mappings of Statsig units to their respective columns. | [default to undefined]
**isReadOnly** | **boolean** | Specifies if the source can only be edited via the Console API. | [optional] [default to undefined]
**owner** | [**AIConfigCreateDtoOwner**](AIConfigCreateDtoOwner.md) |  | [optional] [default to undefined]
**team** | **string** | Optional field indicating the team name responsible for the metric, aiding in accountability and management. | [optional] [default to undefined]
**teamID** | **string** | Optional field indicating the team ID responsible for the metric, aiding in accountability and management. | [optional] [default to undefined]
**scheduledReloadHour** | **number** | Optional field indicating what UTC hour to run a scheduled scan for the assignment source. | [optional] [default to undefined]

## Example

```typescript
import { AssignmentSourceContractDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: AssignmentSourceContractDto = {
    name,
    description,
    isVerified,
    tags,
    sql,
    timestampColumn,
    experimentIDColumn,
    groupIDColumn,
    groupNameColumn,
    idTypeMapping,
    isReadOnly,
    owner,
    team,
    teamID,
    scheduledReloadHour,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
