# TeamDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the team. | [default to undefined]
**description** | **string** | Description of the team. | [optional] [default to undefined]
**id** | **string** | The ID of the team. | [default to undefined]
**defaultGateMetrics** | [**Array&lt;TeamCreationDtoDefaultGateMetricsInner&gt;**](TeamCreationDtoDefaultGateMetricsInner.md) | Default gate metrics for the team. | [default to undefined]
**defaultExperimentPrimaryMetrics** | [**Array&lt;TeamCreationDtoDefaultGateMetricsInner&gt;**](TeamCreationDtoDefaultGateMetricsInner.md) | Default primary metrics for experiments in the team. | [default to undefined]
**defaultExperimentSecondaryMetrics** | [**Array&lt;TeamCreationDtoDefaultGateMetricsInner&gt;**](TeamCreationDtoDefaultGateMetricsInner.md) | Default secondary metrics for experiments in the team. | [default to undefined]
**defaultHoldoutMetrics** | [**Array&lt;TeamCreationDtoDefaultGateMetricsInner&gt;**](TeamCreationDtoDefaultGateMetricsInner.md) | Default holdout metrics for the team. | [default to undefined]
**changeTeamConfigs** | **string** | Who can change team configurations: \&quot;anyone\&quot; or \&quot;team_only\&quot;. | [default to undefined]
**reviewApproval** | **string** | Who can review and approve changes: \&quot;anyone\&quot;, \&quot;team_only\&quot;, or \&quot;admin_only\&quot;. | [default to undefined]
**defaultTargetApplications** | **Array&lt;string&gt;** | Default target applications for the team. | [default to undefined]
**defaultHoldoutID** | **string** | Default holdout ID for the team, if applicable. | [optional] [default to undefined]
**requireReviews** | **boolean** | Whether reviews are required for changes, if applicable. | [optional] [default to undefined]
**requireGateTemplates** | **boolean** | Whether gate templates are required for the team, if applicable. | [optional] [default to undefined]
**requireExperimentTemplates** | **boolean** | Whether experiment templates are required for the team, if applicable. | [optional] [default to undefined]
**requireDynamicConfigTemplates** | **boolean** | Whether dynamic config templates are required for the team, if applicable. | [optional] [default to undefined]
**members** | [**Array&lt;TeamDtoMembersInner&gt;**](TeamDtoMembersInner.md) |  | [default to undefined]
**admins** | [**Array&lt;TeamDtoMembersInner&gt;**](TeamDtoMembersInner.md) |  | [default to undefined]

## Example

```typescript
import { TeamDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: TeamDto = {
    name,
    description,
    id,
    defaultGateMetrics,
    defaultExperimentPrimaryMetrics,
    defaultExperimentSecondaryMetrics,
    defaultHoldoutMetrics,
    changeTeamConfigs,
    reviewApproval,
    defaultTargetApplications,
    defaultHoldoutID,
    requireReviews,
    requireGateTemplates,
    requireExperimentTemplates,
    requireDynamicConfigTemplates,
    members,
    admins,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
