# ExternalMetricDefinitionContractDtoWarehouseNative

Defines warehouse native metrics for advanced configurations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation** | **string** | Allowed: count┃sum┃mean┃daily_participation┃ratio┃funnel┃count_distinct┃percentile | [optional] [default to undefined]
**metricSourceName** | **string** | For Count, Sum, Mean, User Count aggregation types: the name of metric source | [optional] [default to undefined]
**criteria** | [**Array&lt;MetricEventsCriteriaDto&gt;**](MetricEventsCriteriaDto.md) | Filtering criteria for the metric source | [optional] [default to undefined]
**metricSources** | [**Array&lt;ExternalMetricDefinitionContractDtoWarehouseNativeMetricSourcesInner&gt;**](ExternalMetricDefinitionContractDtoWarehouseNativeMetricSourcesInner.md) | List of metric sources for this metric. This field is readonly. | [optional] [default to undefined]
**waitForCohortWindow** | **boolean** |  | [optional] [default to undefined]
**denominatorCriteria** | [**Array&lt;MetricEventsCriteriaDto&gt;**](MetricEventsCriteriaDto.md) | Filtering criteria for the denominator metric source for a ratio, or the start event for a retention metric if useSecondaryRetentionEvent is set | [optional] [default to undefined]
**denominatorAggregation** | **string** | Allowed: count┃sum┃mean┃daily_participation┃ratio┃funnel┃count_distinct┃percentile | [optional] [default to undefined]
**denominatorCustomRollupEnd** | **number** | Custom end window for ratio denominator unit count metrics with \&quot;custom\&quot; rollup time window. Measured in days or minutes depending on the \&quot;denominatorCustomRollupMeasureInMinutes\&quot; flag. | [optional] [default to undefined]
**denominatorCustomRollupStart** | **number** | Custom start window for ratio denominator unit count metrics with \&quot;custom\&quot; rollup time window. Measured in days or minutes depending on the \&quot;denominatorCustomRollupMeasureInMinutes\&quot; flag. | [optional] [default to undefined]
**denominatorMetricSourceName** | **string** | Name of the metric source for the denominator of a ratio, or the start event for a retention metric if useSecondaryRetentionEvent is set | [optional] [default to undefined]
**denominatorRollupTimeWindow** | **string** | Rollup-mode for ratio denominator unit count metrics. Allowed values: \&quot;daily\&quot; for daily participation rate, \&quot;max\&quot; for one-time event, \&quot;custom\&quot; for a custom attribution window | [optional] [default to undefined]
**denominatorValueColumn** | **string** | Column name for the denominator’s value. | [optional] [default to undefined]
**funnelCalculationWindow** | **number** | Duration for counting funnel events in days. | [optional] [default to undefined]
**funnelCountDistinct** | **string** | Allowed: users┃sessions for distinct count method in funnel events. | [optional] [default to undefined]
**funnelEvents** | [**Array&lt;ExternalMetricDefinitionContractDtoWarehouseNativeFunnelEventsInner&gt;**](ExternalMetricDefinitionContractDtoWarehouseNativeFunnelEventsInner.md) | List of funnel events with associated criteria and identifiers. | [optional] [default to undefined]
**funnelStartCriteria** | **string** | Allowed: start_event┃exposure to determine funnel start criteria. | [optional] [default to undefined]
**metricDimensionColumns** | **Array&lt;string&gt;** | Specify metadata columns for breaking down metric analysis. | [optional] [default to undefined]
**metricDimensionLimits** | [**Array&lt;ExternalMetricDefinitionContractDtoWarehouseNativeMetricDimensionLimitsInner&gt;**](ExternalMetricDefinitionContractDtoWarehouseNativeMetricDimensionLimitsInner.md) | Per-dimension breakdown limits; values beyond the limit are grouped into OTHER. | [optional] [default to undefined]
**metricBakeDays** | **number** | Number of days for metric baking; specify duration for analysis. | [optional] [default to undefined]
**numeratorAggregation** | **string** | Aggregation type for numerator; Allowed: count┃sum┃mean┃daily_participation┃ratio┃funnel┃count_distinct┃percentile. | [optional] [default to undefined]
**valueColumn** | **string** | Column name representing the metric’s value. | [optional] [default to undefined]
**valueThreshold** | **number** | Threshold value for filtering metrics. | [optional] [default to undefined]
**allowNullRatioDenominator** | **boolean** | Include units which do not have a denominator. Only applicable to ratios. | [optional] [default to undefined]
**funnelStrictOrdering** | **boolean** |  | [optional] [default to undefined]
**funnelUseExposureAsFirstEvent** | **boolean** |  | [optional] [default to undefined]
**funnelTimestampAllowanceMs** | **number** |  | [optional] [default to undefined]
**funnelTimeToConvert** | **boolean** |  | [optional] [default to undefined]
**winsorizationHigh** | **number** | High threshold for winsorization; must be between 0 and 1. | [optional] [default to undefined]
**winsorizationLow** | **number** | Low threshold for winsorization; must be between 0 and 1. | [optional] [default to undefined]
**winsorizationHighDenominator** | **number** |  | [optional] [default to undefined]
**winsorizationLowDenominator** | **number** |  | [optional] [default to undefined]
**cupedAttributionWindow** | **number** | Attribution window for CUPED adjustments in days. | [optional] [default to undefined]
**rollupTimeWindow** | **string** | Rollup-mode for unit count metrics. Allowed values: \&quot;daily\&quot; for daily participation rate, \&quot;max\&quot; for one-time event, \&quot;custom\&quot; for a custom attribution window | [optional] [default to undefined]
**customRollUpStart** | **number** | Custom start window for unit count metrics with \&quot;custom\&quot; rollup time window, or for other metrics with the \&quot;Use Cohort Window in Experiments\&quot; option on enabled. Measured in days or minutes depending on the \&quot;customRollupMeasureInMinutes\&quot; flag. | [optional] [default to undefined]
**customRollUpEnd** | **number** | Custom end window for unit count metrics with \&quot;custom\&quot; rollup time window, or for other metrics with the \&quot;Use Cohort Window in Experiments\&quot; option on enabled. Measured in days or minutes depending on the \&quot;customRollupMeasureInMinutes\&quot; flag. | [optional] [default to undefined]
**onlyIncludeUsersWithConversionEvent** | **boolean** | Flag to include only users with a conversion event in the metric. | [optional] [default to undefined]
**denominatorCustomRollupMeasureInMinutes** | **boolean** | Flag to measure the denominator custom rollup window in minutes instead of days. | [optional] [default to undefined]
**customRollupMeasureInMinutes** | **boolean** | Flag to measure the custom rollup window in minutes instead of days. | [optional] [default to undefined]
**percentile** | **number** | Percentile value for statistical calculations. | [optional] [default to undefined]
**useLogTransform** | **boolean** | Use log transform for the metric. | [optional] [default to undefined]
**useSecondaryRetentionEvent** | **boolean** | Use a different start and completion event for retention calculations. | [optional] [default to undefined]
**retentionEnd** | **number** | Retention end in days. | [optional] [default to undefined]
**retentionLength** | **number** | Retention lookback window in days. | [optional] [default to undefined]
**logTransformBase** | **number** | Log transform base to be used for the metric. | [optional] [default to undefined]
**cap** | **number** | Maximum cap for metric values. | [optional] [default to undefined]
**surrogateMetricMSE** | **number** | Mean Squared Error for surrogate metric. | [optional] [default to undefined]
**components** | [**Array&lt;ExternalMetricDefinitionContractDtoWarehouseNativeComponentsInner&gt;**](ExternalMetricDefinitionContractDtoWarehouseNativeComponentsInner.md) | Components for composite metrics, defining each component of the formula | [optional] [default to undefined]

## Example

```typescript
import { ExternalMetricDefinitionContractDtoWarehouseNative } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: ExternalMetricDefinitionContractDtoWarehouseNative = {
    aggregation,
    metricSourceName,
    criteria,
    metricSources,
    waitForCohortWindow,
    denominatorCriteria,
    denominatorAggregation,
    denominatorCustomRollupEnd,
    denominatorCustomRollupStart,
    denominatorMetricSourceName,
    denominatorRollupTimeWindow,
    denominatorValueColumn,
    funnelCalculationWindow,
    funnelCountDistinct,
    funnelEvents,
    funnelStartCriteria,
    metricDimensionColumns,
    metricDimensionLimits,
    metricBakeDays,
    numeratorAggregation,
    valueColumn,
    valueThreshold,
    allowNullRatioDenominator,
    funnelStrictOrdering,
    funnelUseExposureAsFirstEvent,
    funnelTimestampAllowanceMs,
    funnelTimeToConvert,
    winsorizationHigh,
    winsorizationLow,
    winsorizationHighDenominator,
    winsorizationLowDenominator,
    cupedAttributionWindow,
    rollupTimeWindow,
    customRollUpStart,
    customRollUpEnd,
    onlyIncludeUsersWithConversionEvent,
    denominatorCustomRollupMeasureInMinutes,
    customRollupMeasureInMinutes,
    percentile,
    useLogTransform,
    useSecondaryRetentionEvent,
    retentionEnd,
    retentionLength,
    logTransformBase,
    cap,
    surrogateMetricMSE,
    components,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
