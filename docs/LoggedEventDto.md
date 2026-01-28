# LoggedEventDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **string** | The timestamp when the event occurred, represented as a string. | [default to undefined]
**name** | **string** | The name of the event (e.g., \&quot;add_to_cart\&quot;). | [default to undefined]
**source** | **string** | The source of the event, indicating where it was triggered from. | [default to undefined]
**value** | **string** | The value associated with the event, providing additional context. | [default to undefined]
**userID** | **string** | The ID of the user who triggered the event. | [default to undefined]

## Example

```typescript
import { LoggedEventDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: LoggedEventDto = {
    timestamp,
    name,
    source,
    value,
    userID,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
