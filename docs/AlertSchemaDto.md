# AlertSchemaDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | ID of the alert | [default to undefined]
**name** | **string** | Name of the alert | [default to undefined]
**alertType** | **string** | Type of alert | [default to undefined]
**metrics** | **object** | List of metrics associated with this alert | [default to undefined]
**metricGroupBys** | **object** | Metric groupbys | [default to undefined]
**formula** | **string** | Formula for the alert | [optional] [default to undefined]
**message** | **string** | Alert message | [default to undefined]
**creatorID** | **string** |  | [optional] [default to undefined]
**companyID** | **string** |  | [default to undefined]
**priority** | **string** | Priority of this alert | [default to undefined]
**alertThreshold** | **number** |  | [default to undefined]
**warningThreshold** | **number** |  | [optional] [default to undefined]
**windowMs** | **number** | How far back and how frequently a metric should be checked, in milliseconds | [default to undefined]
**condition** | **string** | Condition under which a metric change triggers an alert in milliseconds | [default to undefined]
**renotificationConditions** | **Array&lt;string&gt;** | Condition under which a re-notification is sent | [optional] [default to undefined]
**renotificationWindowMs** | **number** | How long to wait before re-notifying in milliseconds | [optional] [default to undefined]
**renotificationMessage** | **string** | Re-notification message | [optional] [default to undefined]
**team** | **string** | Team associated with this alert | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags associated with this alert | [default to undefined]

## Example

```typescript
import { AlertSchemaDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: AlertSchemaDto = {
    id,
    name,
    alertType,
    metrics,
    metricGroupBys,
    formula,
    message,
    creatorID,
    companyID,
    priority,
    alertThreshold,
    warningThreshold,
    windowMs,
    condition,
    renotificationConditions,
    renotificationWindowMs,
    renotificationMessage,
    team,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
