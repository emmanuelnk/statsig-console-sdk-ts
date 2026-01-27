# IngestionBackfillContractDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datestamp_start** | **string** | Expected valid date in the form of YYYY-MM-DD | [default to undefined]
**datestamp_end** | **string** | Expected valid date in the form of YYYY-MM-DD | [default to undefined]
**type** | **string** |  | [default to undefined]
**source** | [**IngestionBackfillContractDtoSource**](IngestionBackfillContractDtoSource.md) |  | [optional] [default to undefined]
**dataset** | **string** |  | [default to undefined]

## Example

```typescript
import { IngestionBackfillContractDto } from 'statsig-console-sdk-nodejs';

const instance: IngestionBackfillContractDto = {
    datestamp_start,
    datestamp_end,
    type,
    source,
    dataset,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
