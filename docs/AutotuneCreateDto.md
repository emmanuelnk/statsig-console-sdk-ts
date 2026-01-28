# AutotuneCreateDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** | A brief summary of what the autotune is being used for. | [optional] [default to undefined]
**variants** | [**Array&lt;AutotuneCreateDtoVariantsInner&gt;**](AutotuneCreateDtoVariantsInner.md) | An array of Variant objects. | [default to undefined]
**successEvent** | **string** | The event you are trying to optimize for. | [default to undefined]
**successEventValue** | **string** | The value that should come with the event for it to be considered successful. | [optional] [default to undefined]
**explorationWindow** | **string** | The initial time period where Autotune will equally split the traffic. | [default to undefined]
**attributionWindow** | **string** | The maximum duration between the exposure and success event that counts as a success. | [default to undefined]
**attributionWindowUnit** | **string** | Time unit of attribution window | [optional] [default to undefined]
**explorationWindowRate** | **number** | Exploration window rate | [optional] [default to undefined]
**longtermExplorationAllocation** | **number** | Long term exploration allocation | [optional] [default to undefined]
**winnerThreshold** | **string** | The \&quot;probability of best\&quot; threshold a variant needs to achieve for Autotune to declare it the winner, stop collecting data, and direct all traffic. | [default to undefined]
**metadataField** | **string** | Metadata field containing the numeric value to optimize for. If this field is null, autotune optimizes for the existence of a follow-up event. This is only used for contextual autotunes. | [optional] [default to undefined]
**higherIsBetter** | **boolean** | Whether to optimize for an increase or decrease in the metadata field value. Default is true. This is only used for contextual autotunes. | [optional] [default to undefined]
**isContextual** | **boolean** | Makes this autotune contextual | [optional] [default to undefined]
**metricSourceID** | **string** | Metric source to pull success event data from | [optional] [default to undefined]
**linkedExperimentName** | **string** | Linked experiment to measure the success of the Autotune | [optional] [default to undefined]
**goalRichText** | **string** | Autotune goal | [optional] [default to undefined]
**optimizationParameter** | **string** | Optimize for event occurrence vs value | [optional] [default to undefined]
**valueColumn** | **string** | Metric source column to optimize for | [optional] [default to undefined]
**featureList** | **Array&lt;string&gt;** | List of features that should be included in the analysis | [optional] [default to undefined]
**name** | **string** | The name that was originally given to the autotune on creation but formatted as an ID (\&quot;A Autotune\&quot; -&gt; \&quot;a_autotune\&quot;). | [default to undefined]
**idType** | **string** | idType of the autotune (userID, stableID, or a customID). Defaults to userID if not provided | [optional] [default to undefined]

## Example

```typescript
import { AutotuneCreateDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: AutotuneCreateDto = {
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
    name,
    idType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
