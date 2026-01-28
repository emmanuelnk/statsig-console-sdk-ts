# AuditLogDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | id of the audit log | [default to undefined]
**name** | **string** | name of the audit log | [default to undefined]
**changeLog** | **string** | change log of the audit log | [default to undefined]
**actionType** | **object** |  | [default to undefined]
**date** | **string** |  | [default to undefined]
**time** | **string** |  | [default to undefined]
**updatedBy** | **string** |  | [default to undefined]
**updatedByUserID** | **string** |  | [default to undefined]
**modifierEmail** | **object** |  | [default to undefined]
**changes** | **object** |  | [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [default to undefined]
**targetAppIDs** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { AuditLogDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: AuditLogDto = {
    id,
    name,
    changeLog,
    actionType,
    date,
    time,
    updatedBy,
    updatedByUserID,
    modifierEmail,
    changes,
    tags,
    targetAppIDs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
