# AutotuneExperimentDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** | Detailed description of the configuration’s purpose. | [default to undefined]
**variants** | [**Array&lt;AutotuneExperimentDtoVariantsInner&gt;**](AutotuneExperimentDtoVariantsInner.md) |  | [default to undefined]
**successEvent** | **string** | The event you are trying to optimize for. | [default to undefined]
**successEventValue** | **string** | The value that should come with the event for it to be considered successful. | [default to undefined]
**explorationWindow** | **string** | The initial time period where Autotune will equally split the traffic. | [default to undefined]
**attributionWindow** | **string** | The maximum duration between the exposure and success event that counts as a success. | [default to undefined]
**attributionWindowUnit** | **string** | Time unit of attribution window | [optional] [default to undefined]
**explorationWindowRate** | **number** | Exploration window rate | [optional] [default to undefined]
**longtermExplorationAllocation** | **number** | Long term exploration allocation | [optional] [default to undefined]
**winnerThreshold** | **string** | The \&quot;probability of best\&quot; threshold a variant needs to achieve for Autotune to declare it the winner, stop collecting data, and direct all traffic. | [default to undefined]
**metadataField** | **string** | Metadata field containing the numeric value to optimize for. If this field is null, autotune optimizes for the existence of a follow-up event. This is only used for contextual autotunes. | [optional] [default to undefined]
**higherIsBetter** | **boolean** | Whether to optimize for an increase or decrease in the metadata field value. Default is true. This is only used for contextual autotunes. | [optional] [default to undefined]
**isContextual** | **boolean** | Whether this is a contextual autotune | [optional] [default to undefined]
**metricSourceID** | **string** | Metric source to pull success event data from | [optional] [default to undefined]
**linkedExperimentName** | **string** | Linked experiment to measure the success of the Autotune | [optional] [default to undefined]
**goalRichText** | **string** | Autotune goal | [optional] [default to undefined]
**optimizationParameter** | **string** | Optimize for event occurrence vs value | [optional] [default to undefined]
**valueColumn** | **string** | Metric source column to optimize for | [optional] [default to undefined]
**featureList** | **Array&lt;string&gt;** | List of features that should be included in the analysis | [optional] [default to undefined]
**id** | **string** | ID | [default to undefined]
**name** | **string** | Optional name for the configuration. | [optional] [default to undefined]
**idType** | **string** | Type of ID | [default to undefined]
**lastModifierID** | **string** | ID of the last modifier. | [default to undefined]
**lastModifiedTime** | **number** | Time of the last modification. | [default to undefined]
**lastModifierEmail** | **string** | Email of the last modifier. | [default to undefined]
**lastModifierName** | **string** | Name of the last modifier. | [default to undefined]
**creatorID** | **string** | ID of the user who created the entity. | [default to undefined]
**createdTime** | **number** | Timestamp when the entity was created. | [default to undefined]
**creatorName** | **string** | Name of the creator. | [default to undefined]
**creatorEmail** | **string** | Email of the creator. | [default to undefined]
**tags** | **Array&lt;string&gt;** | Optional tags for categorization. | [optional] [default to undefined]
**targetApps** | **Array&lt;string&gt;** | List of target applications associated with this configuration. | [optional] [default to undefined]
**holdoutIDs** | **Array&lt;string&gt;** | Holdouts applied to this configuration. | [optional] [default to undefined]
**team** | **string** | Optional name for the responsible team. | [optional] [default to undefined]
**teamID** | **string** | Optional ID of the responsible team. | [optional] [default to undefined]
**version** | **number** | Version number | [optional] [default to undefined]
**isStarted** | **boolean** | Is the autotune experiment currently running. | [default to undefined]
**winner** | [**AutotuneExperimentDtoWinner**](AutotuneExperimentDtoWinner.md) |  | [default to undefined]

## Example

```typescript
import { AutotuneExperimentDto } from 'statsig-console-sdk-nodejs';

const instance: AutotuneExperimentDto = {
    description,
    variants,
    successEvent,
    successEventValue,
    explorationWindow,
    attributionWindow,
    attributionWindowUnit,
    explorationWindowRate,
    longtermExplorationAllocation,
    winnerThreshold,
    metadataField,
    higherIsBetter,
    isContextual,
    metricSourceID,
    linkedExperimentName,
    goalRichText,
    optimizationParameter,
    valueColumn,
    featureList,
    id,
    name,
    idType,
    lastModifierID,
    lastModifiedTime,
    lastModifierEmail,
    lastModifierName,
    creatorID,
    createdTime,
    creatorName,
    creatorEmail,
    tags,
    targetApps,
    holdoutIDs,
    team,
    teamID,
    version,
    isStarted,
    winner,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
