# SegmentCreateContractDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | name of the segment | [default to undefined]
**id** | **string** | optional id of the segment (defaults to name) | [optional] [default to undefined]
**description** | **string** | description of the segment | [optional] [default to undefined]
**type** | **string** | type of the segment | [default to undefined]
**idType** | **string** | type of id | [optional] [default to 'userID']
**tags** | **Array&lt;string&gt;** | optional tags for categorization | [optional] [default to undefined]
**creatorID** | **string** | the Statsig ID of the creator of this experiment | [optional] [default to undefined]
**creatorEmail** | **string** | the email of the creator of this experiment | [optional] [default to undefined]
**team** | **string** | optional name identifier for the responsible team (enterprise only) | [optional] [default to undefined]
**teamID** | **string** | optional identifier for the responsible team (enterprise only) | [optional] [default to undefined]
**rules** | [**Array&lt;SegmentCreateContractDtoRulesInner&gt;**](SegmentCreateContractDtoRulesInner.md) | Rule Object | [optional] [default to undefined]

## Example

```typescript
import { SegmentCreateContractDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: SegmentCreateContractDto = {
    name,
    id,
    description,
    type,
    idType,
    tags,
    creatorID,
    creatorEmail,
    team,
    teamID,
    rules,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
