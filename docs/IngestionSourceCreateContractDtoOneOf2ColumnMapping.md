# IngestionSourceCreateContractDtoOneOf2ColumnMapping


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**experiment** | **string** | Unique identifier for the experiment. | [default to undefined]
**group_id** | **string** | Unique identifier for the experiment groups. | [default to undefined]
**unit_id** | **string** | The unique user identifier this exposure is for. This might not necessarily be a single column for userID - it could be spread across multiple columns for deviceID etc. | [optional] [default to undefined]
**timestamp** | **string** | Unix timestamp in seconds of the event (ex. 1613584800) | [default to undefined]
**ids** | **{ [key: string]: string; }** |  | [default to undefined]
**metadata** | **{ [key: string]: string; }** |  | [optional] [default to undefined]
**metadata_object** | **string** |  | [optional] [default to 'null']
**event_value** | **string** |  | [optional] [default to '']

## Example

```typescript
import { IngestionSourceCreateContractDtoOneOf2ColumnMapping } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: IngestionSourceCreateContractDtoOneOf2ColumnMapping = {
    experiment,
    group_id,
    unit_id,
    timestamp,
    ids,
    metadata,
    metadata_object,
    event_value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
