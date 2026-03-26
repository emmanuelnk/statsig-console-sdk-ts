# AlertEventSchemaDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | ID of the alert event | [default to undefined]
**eventType** | **string** | Type of alert event | [default to undefined]
**title** | **string** | Title of the alert event | [default to undefined]
**message** | **string** | Message for the alert event | [default to undefined]
**reason** | **string** | Reason the event was created | [default to undefined]
**createdTime** | **number** | Timestamp in milliseconds when the event was created | [default to undefined]
**multiAlertGroupBys** | **{ [key: string]: string; }** | Group-by values associated with this event | [default to undefined]

## Example

```typescript
import { AlertEventSchemaDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: AlertEventSchemaDto = {
    id,
    eventType,
    title,
    message,
    reason,
    createdTime,
    multiAlertGroupBys,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
