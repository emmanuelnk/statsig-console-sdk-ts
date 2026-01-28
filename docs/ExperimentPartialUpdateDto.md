# ExperimentPartialUpdateDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The display name of the experiment | [optional] [default to undefined]
**description** | **string** | A helpful summary of what this experiment does | [optional] [default to undefined]
**idType** | **string** | The type of ID which the experiment is based on | [optional] [default to undefined]
**secondaryIDType** | **string** | The secondary ID type for the experiment used in WHN for ID resolution | [optional] [default to undefined]
**identifierMappingMode** | **string** | The identifier mapping mode for the experiment used in WHN for ID resolution | [optional] [default to undefined]
**identityResolutionSource** | **string** | The identity resolution entity property source for the experiment used in WHN for ID resolution | [optional] [default to undefined]
**hypothesis** | **string** | A statement that will be tested by this experiment | [optional] [default to undefined]
**links** | [**Array&lt;ExperimentCreateDtoLinksInner&gt;**](ExperimentCreateDtoLinksInner.md) | Links to relevant documentation or resources | [optional] [default to undefined]
**groups** | [**Array&lt;ExperimentCreateDtoGroupsInner&gt;**](ExperimentCreateDtoGroupsInner.md) | The test groups for your experiment | [optional] [default to undefined]
**controlGroupID** | **string** | Optional control group ID | [optional] [default to undefined]
**allocation** | **number** | Percent of layer allocated to this experiment | [optional] [default to undefined]
**primaryMetricTags** | **Array&lt;string&gt;** | Primary metric tags for the experiment | [optional] [default to undefined]
**secondaryMetricTags** | **Array&lt;string&gt;** | Secondary metric tags for the experiment | [optional] [default to undefined]
**primaryMetrics** | [**Array&lt;ExperimentCreateDtoPrimaryMetricsInner&gt;**](ExperimentCreateDtoPrimaryMetricsInner.md) | Main metrics needed to evaluate your hypothesis | [optional] [default to undefined]
**secondaryMetrics** | [**Array&lt;ExperimentCreateDtoPrimaryMetricsInner&gt;**](ExperimentCreateDtoPrimaryMetricsInner.md) | Additional metrics to monitor that might impact the analysis or final decision of the experiment | [optional] [default to undefined]
**otherMetrics** | [**Array&lt;ExperimentCreateDtoPrimaryMetricsInner&gt;**](ExperimentCreateDtoPrimaryMetricsInner.md) | Additional metrics you want to investigate or learn from. The usual corrections applied to Primary and Secondary metrics are not applied to these. | [optional] [default to undefined]
**targetApps** | [**ExperimentCreateDtoTargetApps**](ExperimentCreateDtoTargetApps.md) |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags associated with the experiment | [optional] [default to undefined]
**duration** | **number** | How long the experiment is expected to last in days | [optional] [default to undefined]
**targetExposures** | **number** | Target exposures for the experiment | [optional] [default to undefined]
**targetingGateID** | **string** | Restrict your experiment to users passing the selected feature gate | [optional] [default to undefined]
**sequentialTesting** | **boolean** | Apply sequential testing? | [optional] [default to undefined]
**bonferroniCorrection** | **boolean** | Is Bonferroni correction applied per variant? | [optional] [default to undefined]
**bonferroniCorrectionPerMetric** | **boolean** | Is Bonferroni correction applied per metric? | [optional] [default to undefined]
**benjaminiHochbergPerVariant** | **boolean** | Is Benjamini-Hochberg procedure applied per variant? | [optional] [default to undefined]
**benjaminiHochbergPerMetric** | **boolean** | Is Benjamini-Hochberg procedure applied per metric? | [optional] [default to undefined]
**benjaminiPrimaryMetricsOnly** | **boolean** | Is Benjamini-Hochberg procedure applied for primary metrics only? | [optional] [default to undefined]
**defaultConfidenceInterval** | **string** | Default error margin used for results | [optional] [default to undefined]
**manualQualityScores** | [**Array&lt;ExperimentCreateDtoManualQualityScoresInner&gt;**](ExperimentCreateDtoManualQualityScoresInner.md) | Up to 10 manually set quality scores for an experiment. The scores and weights will be added to the existing weights and scores, and then weights will be renormalized to 100. This can be set via the Statsig Console API. If targeting a default check, the weight of the check will be updated, but not the status or description. A default score can be removed by setting the weight to 0. The default score identifiers are one of: HYPOTHESIS_LENGTH, BALANCED_EXPOSURE, PRIMARY_METRICS_LENGTH, COMPARISON_CORRECTION, GUARDRAIL_METRIC_TAGS, SUFFICIENT_SAMPLE, POWER_ANALYSIS, SEQUENTIAL_TESTING | [optional] [default to undefined]
**status** | **string** | The current status of the experiment | [optional] [default to undefined]
**launchedGroupID** | **string** | ID of the launched group, null otherwise | [optional] [default to undefined]
**assignmentSourceName** | **string** | Source name of the assignment | [optional] [default to undefined]
**assignmentSourceExperimentName** | **string** | Name of the source experiment for assignment | [optional] [default to undefined]
**creatorID** | **string** | The Statsig ID of the creator of this experiment | [optional] [default to undefined]
**creatorEmail** | **string** | The email of the creator of this experiment | [optional] [default to undefined]
**isAnalysisOnly** | **boolean** | For Warehouse Native | [optional] [default to undefined]
**team** | **string** | The team name associated with the experiment, Enterprise only. | [optional] [default to undefined]
**teamID** | **string** | The team ID associated with the experiment, Enterprise only. | [optional] [default to undefined]
**allocationDuration** | **number** | Warehouse Native Only - Allocation duration in days | [optional] [default to undefined]
**cohortedAnalysisDuration** | **number** | Warehouse Native Only - Cohorted analysis duration in days | [optional] [default to undefined]
**cohortedMetricsMatureAfterEnd** | **boolean** | Warehouse Native Only - Allow cohort metrics to mature after experiment end | [optional] [default to undefined]
**cohortWaitUntilEndToInclude** | **boolean** | Warehouse Native Only - Whether to filter to units whose experiment cohort analysis duration is complete, if cohortedAnalysisDuration exists | [optional] [default to undefined]
**fixedAnalysisDuration** | **number** | Fixed analysis duration in days | [optional] [default to undefined]
**scheduledReloadHour** | **number** | Warehouse Native only - UTC hour at which to run scheduled pulse loads | [optional] [default to undefined]
**scheduledReloadType** | **string** | Warehouse Native only - reload type for scheduled reloads | [optional] [default to undefined]
**scheduledReloadDays** | **Array&lt;number&gt;** | Warehouse Native only - days on which to run scheduled reloads from 0 to 6, 0 meaning Sunday. Null to run reloads on all days. | [optional] [default to undefined]
**turboMode** | **boolean** | Warehouse Native only - whether to run scheduled reloads with Turbo mode. | [optional] [default to undefined]
**analysisEndTime** | **string** | Warehouse Native only - end time for analysis only experiments | [optional] [default to undefined]
**assignmentSourceFilters** | [**Array&lt;ExperimentCreateDtoAssignmentSourceFiltersInner&gt;**](ExperimentCreateDtoAssignmentSourceFiltersInner.md) | Array of criteria for filtering assignment sources. | [optional] [default to undefined]
**analyticsType** | **string** | The mode of analysis for the experiment, e.g frequentist, bayesian, sprt | [optional] [default to undefined]
**isSidecar** | **boolean** | Whether this is a Statsig Sidecar experiment. | [optional] [default to undefined]
**decisionReason** | **string** | Experiment notes reported after experiment completes | [optional] [default to undefined]
**preComputedUserDimensions** | [**Array&lt;ExperimentCreateDtoPreComputedUserDimensionsInner&gt;**](ExperimentCreateDtoPreComputedUserDimensionsInner.md) | User dimensions that will be computed for every metric in WHN | [optional] [default to undefined]
**cureCovariates** | [**Array&lt;ExperimentCreateDtoCureCovariatesInner&gt;**](ExperimentCreateDtoCureCovariatesInner.md) | CURE Covariates to use in this experiment | [optional] [default to undefined]
**stratifiedSampling** | [**ExperimentCreateDtoStratifiedSampling**](ExperimentCreateDtoStratifiedSampling.md) |  | [optional] [default to undefined]
**enabledNonProdEnvironments** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { ExperimentPartialUpdateDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: ExperimentPartialUpdateDto = {
    name,
    description,
    idType,
    secondaryIDType,
    identifierMappingMode,
    identityResolutionSource,
    hypothesis,
    links,
    groups,
    controlGroupID,
    allocation,
    primaryMetricTags,
    secondaryMetricTags,
    primaryMetrics,
    secondaryMetrics,
    otherMetrics,
    targetApps,
    tags,
    duration,
    targetExposures,
    targetingGateID,
    sequentialTesting,
    bonferroniCorrection,
    bonferroniCorrectionPerMetric,
    benjaminiHochbergPerVariant,
    benjaminiHochbergPerMetric,
    benjaminiPrimaryMetricsOnly,
    defaultConfidenceInterval,
    manualQualityScores,
    status,
    launchedGroupID,
    assignmentSourceName,
    assignmentSourceExperimentName,
    creatorID,
    creatorEmail,
    isAnalysisOnly,
    team,
    teamID,
    allocationDuration,
    cohortedAnalysisDuration,
    cohortedMetricsMatureAfterEnd,
    cohortWaitUntilEndToInclude,
    fixedAnalysisDuration,
    scheduledReloadHour,
    scheduledReloadType,
    scheduledReloadDays,
    turboMode,
    analysisEndTime,
    assignmentSourceFilters,
    analyticsType,
    isSidecar,
    decisionReason,
    preComputedUserDimensions,
    cureCovariates,
    stratifiedSampling,
    enabledNonProdEnvironments,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
