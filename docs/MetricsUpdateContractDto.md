# MetricsUpdateContractDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the metric, serving as its primary identifier. | [optional] [default to undefined]
**description** | **string** | A detailed description of the metric, providing insights into its purpose and application. | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | An array of tags associated with the metric, used for categorization and easier retrieval. | [optional] [default to undefined]
**isVerified** | **boolean** | Flag to mark the metric as verified, ensuring it is deemed trustworthy within the organization. | [optional] [default to undefined]
**isReadOnly** | **boolean** | Specifies if the metric definition can only be edited via the Console API, enhancing control over modifications. | [optional] [default to undefined]
**isPermanent** | **boolean** | Determines if the metric is permanent, preventing it from being deleted or modified inadvertently. | [optional] [default to undefined]
**warehouseNative** | [**MetricsUpdateContractDtoWarehouseNative**](MetricsUpdateContractDtoWarehouseNative.md) |  | [optional] [default to undefined]
**unitTypes** | **Array&lt;string&gt;** | Array of unit types that the metric can utilize, such as stableID, userID, or other custom identifiers. | [optional] [default to undefined]
**team** | **string** | Optional field indicating the team name responsible for the metric, aiding in accountability and management. | [optional] [default to undefined]
**teamID** | **string** | Optional field indicating the team ID responsible for the metric, aiding in accountability and management. | [optional] [default to undefined]
**directionality** | **string** | Indicates the desired change direction for the metric. Use \&quot;increase\&quot; for positive changes and \&quot;decrease\&quot; for negative changes. | [optional] [default to DirectionalityEnum_Increase]
**dryRun** | **boolean** | Skips persisting updates to the metric (used to validate that inputs are correct) | [optional] [default to undefined]
**owner** | [**MetricsUpdateContractDtoOwner**](MetricsUpdateContractDtoOwner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { MetricsUpdateContractDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: MetricsUpdateContractDto = {
    name,
    description,
    tags,
    isVerified,
    isReadOnly,
    isPermanent,
    warehouseNative,
    unitTypes,
    team,
    teamID,
    directionality,
    dryRun,
    owner,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
