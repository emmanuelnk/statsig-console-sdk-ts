# AIConfigPartialUpdateDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** | Updated description. | [optional] [default to undefined]
**targetApps** | [**AIConfigPartialUpdateDtoTargetApps**](AIConfigPartialUpdateDtoTargetApps.md) |  | [optional] [default to undefined]
**team** | **string** | Updated team name. | [optional] [default to undefined]
**teamID** | **string** | Updated team ID. | [optional] [default to undefined]

## Example

```typescript
import { AIConfigPartialUpdateDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: AIConfigPartialUpdateDto = {
    description,
    targetApps,
    team,
    teamID,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
