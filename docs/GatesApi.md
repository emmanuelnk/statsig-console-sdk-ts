# GatesApi

All URIs are relative to *https://statsigapi.net*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**consoleV1GatesGet**](#consolev1gatesget) | **GET** /console/v1/gates | List Gates|
|[**consoleV1GatesIdAlertsMetricIdResolvePost**](#consolev1gatesidalertsmetricidresolvepost) | **POST** /console/v1/gates/{id}/alerts/{metricId}/resolve | Resolve Metric Rollout Alert|
|[**consoleV1GatesIdAlertsMetricIdResolvePost_0**](#consolev1gatesidalertsmetricidresolvepost_0) | **POST** /console/v1/gates/{id}/alerts/{metricId}/resolve | Resolve Metric Rollout Alert|
|[**consoleV1GatesIdArchivePut**](#consolev1gatesidarchiveput) | **PUT** /console/v1/gates/{id}/archive | Archive Gate|
|[**consoleV1GatesIdChecksGet**](#consolev1gatesidchecksget) | **GET** /console/v1/gates/{id}/checks | Read Gate Checks|
|[**consoleV1GatesIdCodeCleanupPost**](#consolev1gatesidcodecleanuppost) | **POST** /console/v1/gates/{id}/code_cleanup | Start Gate Code Cleanup|
|[**consoleV1GatesIdDelete**](#consolev1gatesiddelete) | **DELETE** /console/v1/gates/{id} | Delete Gates|
|[**consoleV1GatesIdDisablePut**](#consolev1gatesiddisableput) | **PUT** /console/v1/gates/{id}/disable | Disable Gate|
|[**consoleV1GatesIdDynamicConfigReferencesGet**](#consolev1gatesiddynamicconfigreferencesget) | **GET** /console/v1/gates/{id}/dynamic_config_references | List Dynamic Config References|
|[**consoleV1GatesIdEnablePut**](#consolev1gatesidenableput) | **PUT** /console/v1/gates/{id}/enable | Enable Gate|
|[**consoleV1GatesIdExperimentReferencesGet**](#consolev1gatesidexperimentreferencesget) | **GET** /console/v1/gates/{id}/experiment_references | List Experiment References|
|[**consoleV1GatesIdGateReferencesGet**](#consolev1gatesidgatereferencesget) | **GET** /console/v1/gates/{id}/gate_references | List Gate References|
|[**consoleV1GatesIdGet**](#consolev1gatesidget) | **GET** /console/v1/gates/{id} | Read Gate|
|[**consoleV1GatesIdLaunchPut**](#consolev1gatesidlaunchput) | **PUT** /console/v1/gates/{id}/launch | Launch Gate|
|[**consoleV1GatesIdLoadPulsePost**](#consolev1gatesidloadpulsepost) | **POST** /console/v1/gates/{id}/load_pulse | Load Pulse Gate|
|[**consoleV1GatesIdOverridesDelete**](#consolev1gatesidoverridesdelete) | **DELETE** /console/v1/gates/{id}/overrides | Delete Gate Overrides|
|[**consoleV1GatesIdOverridesGet**](#consolev1gatesidoverridesget) | **GET** /console/v1/gates/{id}/overrides | Get Gate Override|
|[**consoleV1GatesIdOverridesPatch**](#consolev1gatesidoverridespatch) | **PATCH** /console/v1/gates/{id}/overrides | Add Gate Overrides|
|[**consoleV1GatesIdOverridesPost**](#consolev1gatesidoverridespost) | **POST** /console/v1/gates/{id}/overrides | Update Gate Overrides|
|[**consoleV1GatesIdPatch**](#consolev1gatesidpatch) | **PATCH** /console/v1/gates/{id} | Partially Update Gates|
|[**consoleV1GatesIdPost**](#consolev1gatesidpost) | **POST** /console/v1/gates/{id} | Fully Update Gates|
|[**consoleV1GatesIdReviewsReviewIDCommitPut**](#consolev1gatesidreviewsreviewidcommitput) | **PUT** /console/v1/gates/{id}/reviews/{reviewID}/commit | Commit Gate Review|
|[**consoleV1GatesIdRulePost**](#consolev1gatesidrulepost) | **POST** /console/v1/gates/{id}/rule | Add Gate Rule|
|[**consoleV1GatesIdRulesGet**](#consolev1gatesidrulesget) | **GET** /console/v1/gates/{id}/rules | Read Gate Rules|
|[**consoleV1GatesIdRulesRuleIDDelete**](#consolev1gatesidrulesruleiddelete) | **DELETE** /console/v1/gates/{id}/rules/{ruleID} | Delete Gate Rule|
|[**consoleV1GatesIdRulesRuleIDPatch**](#consolev1gatesidrulesruleidpatch) | **PATCH** /console/v1/gates/{id}/rules/{ruleID} | Update Gate Rules|
|[**consoleV1GatesIdRulesRuleIDPulseLoadHistoryGet**](#consolev1gatesidrulesruleidpulseloadhistoryget) | **GET** /console/v1/gates/{id}/rules/{ruleID}/pulse_load_history | Pulse Load History (Warehouse Native)|
|[**consoleV1GatesIdRulesRuleIDPulseResultsGet**](#consolev1gatesidrulesruleidpulseresultsget) | **GET** /console/v1/gates/{id}/rules/{ruleID}/pulse_results | Retrieve Pulse Results|
|[**consoleV1GatesIdUnarchivePut**](#consolev1gatesidunarchiveput) | **PUT** /console/v1/gates/{id}/unarchive | Unarchive Gate|
|[**consoleV1GatesIdVersionsGet**](#consolev1gatesidversionsget) | **GET** /console/v1/gates/{id}/versions | List Gate Versions|
|[**consoleV1GatesPost**](#consolev1gatespost) | **POST** /console/v1/gates | Create Gate|

# **consoleV1GatesGet**
> Getconsolev1gatesResponse consoleV1GatesGet()


### Example

```typescript
import {
    GatesApi,
    Configuration,
    ConsoleV1AuditLogsGetTagsParameter,
    ConsoleV1GatesGetPassRateParameter,
    ConsoleV1GatesGetPassRateParameter,
    ConsoleV1AuditLogsGetTagsParameter,
    number,
    number
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new GatesApi(configuration);

let idType: ConsoleV1AuditLogsGetTagsParameter; //Filter by idType (optional) (default to undefined)
let type: 'TEMPORARY' | 'PERMANENT' | 'STALE' | 'TEMPLATE'; //Filter by type (optional) (default to undefined)
let typeReason: 'NONE' | 'STALE_PROBABLY_LAUNCHED' | 'STALE_PROBABLY_UNLAUNCHED' | 'STALE_PROBABLY_FORGOTTEN' | 'STALE_NO_RULES' | 'STALE_PROBABLY_DEAD_CHECK' | 'STALE_EMPTY_CHECKS' | 'STALE_ALL_TRUE' | 'STALE_ALL_FALSE'; //Filter by typeReason (optional) (default to undefined)
let passRate: ConsoleV1GatesGetPassRateParameter; //Filter by pass rate of the gates, as determined by a sampling of overall true/false values returned: 0, 100, or INBETWEEN (pass rate greater than zero but less than 100) (optional) (default to undefined)
let rolloutRate: ConsoleV1GatesGetPassRateParameter; //Filter by rollout rate of the gates: 0 (all rules are set to pass 0%), 100 (all rules pass 100% including an \"everyone\" catch all rule), or INBETWEEN (at least one rule has a pass rate greater than 0 but less than 100) (optional) (default to undefined)
let releasePipelineID: string; //Filter by release pipeline ID (optional) (default to undefined)
let targetAppID: string; //Filter by target app ID (optional) (default to undefined)
let includeArchived: 'true' | 'false'; //Include archived gates in the response (optional) (default to undefined)
let store0100Exposures: 'true' | 'false'; //Filter gates by whether \"Store 0/100 Exposures\" is enabled. (optional) (default to undefined)
let creatorName: string; //Name of the creator. (optional) (default to undefined)
let creatorID: string; //ID of the user who created the entity. (optional) (default to undefined)
let tags: ConsoleV1AuditLogsGetTagsParameter; //Filter by tags (optional) (default to undefined)
let limit: number; //Results per page (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1GatesGet(
    idType,
    type,
    typeReason,
    passRate,
    rolloutRate,
    releasePipelineID,
    targetAppID,
    includeArchived,
    store0100Exposures,
    creatorName,
    creatorID,
    tags,
    limit,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **idType** | **ConsoleV1AuditLogsGetTagsParameter** | Filter by idType | (optional) defaults to undefined|
| **type** | [**&#39;TEMPORARY&#39; | &#39;PERMANENT&#39; | &#39;STALE&#39; | &#39;TEMPLATE&#39;**]**Array<&#39;TEMPORARY&#39; &#124; &#39;PERMANENT&#39; &#124; &#39;STALE&#39; &#124; &#39;TEMPLATE&#39;>** | Filter by type | (optional) defaults to undefined|
| **typeReason** | [**&#39;NONE&#39; | &#39;STALE_PROBABLY_LAUNCHED&#39; | &#39;STALE_PROBABLY_UNLAUNCHED&#39; | &#39;STALE_PROBABLY_FORGOTTEN&#39; | &#39;STALE_NO_RULES&#39; | &#39;STALE_PROBABLY_DEAD_CHECK&#39; | &#39;STALE_EMPTY_CHECKS&#39; | &#39;STALE_ALL_TRUE&#39; | &#39;STALE_ALL_FALSE&#39;**]**Array<&#39;NONE&#39; &#124; &#39;STALE_PROBABLY_LAUNCHED&#39; &#124; &#39;STALE_PROBABLY_UNLAUNCHED&#39; &#124; &#39;STALE_PROBABLY_FORGOTTEN&#39; &#124; &#39;STALE_NO_RULES&#39; &#124; &#39;STALE_PROBABLY_DEAD_CHECK&#39; &#124; &#39;STALE_EMPTY_CHECKS&#39; &#124; &#39;STALE_ALL_TRUE&#39; &#124; &#39;STALE_ALL_FALSE&#39;>** | Filter by typeReason | (optional) defaults to undefined|
| **passRate** | **ConsoleV1GatesGetPassRateParameter** | Filter by pass rate of the gates, as determined by a sampling of overall true/false values returned: 0, 100, or INBETWEEN (pass rate greater than zero but less than 100) | (optional) defaults to undefined|
| **rolloutRate** | **ConsoleV1GatesGetPassRateParameter** | Filter by rollout rate of the gates: 0 (all rules are set to pass 0%), 100 (all rules pass 100% including an \&quot;everyone\&quot; catch all rule), or INBETWEEN (at least one rule has a pass rate greater than 0 but less than 100) | (optional) defaults to undefined|
| **releasePipelineID** | [**string**] | Filter by release pipeline ID | (optional) defaults to undefined|
| **targetAppID** | [**string**] | Filter by target app ID | (optional) defaults to undefined|
| **includeArchived** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | Include archived gates in the response | (optional) defaults to undefined|
| **store0100Exposures** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | Filter gates by whether \&quot;Store 0/100 Exposures\&quot; is enabled. | (optional) defaults to undefined|
| **creatorName** | [**string**] | Name of the creator. | (optional) defaults to undefined|
| **creatorID** | [**string**] | ID of the user who created the entity. | (optional) defaults to undefined|
| **tags** | **ConsoleV1AuditLogsGetTagsParameter** | Filter by tags | (optional) defaults to undefined|
| **limit** | [**number**] | Results per page | (optional) defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to undefined|


### Return type

**Getconsolev1gatesResponse**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List gates success |  -  |
|**403** | Forbidden resource |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1GatesIdAlertsMetricIdResolvePost**
> ConsoleV1ExperimentsIdAlertsMetricIdResolvePost200Response consoleV1GatesIdAlertsMetricIdResolvePost(resolveGuardrailAlertRequestDto)


### Example

```typescript
import {
    GatesApi,
    Configuration,
    ResolveGuardrailAlertRequestDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new GatesApi(configuration);

let id: string; //id (default to undefined)
let metricId: string; //metric id (default to undefined)
let resolveGuardrailAlertRequestDto: ResolveGuardrailAlertRequestDto; //

const { status, data } = await apiInstance.consoleV1GatesIdAlertsMetricIdResolvePost(
    id,
    metricId,
    resolveGuardrailAlertRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resolveGuardrailAlertRequestDto** | **ResolveGuardrailAlertRequestDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **metricId** | [**string**] | metric id | defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdAlertsMetricIdResolvePost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Metric rollout alert resolved successfully |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1GatesIdAlertsMetricIdResolvePost_0**
> ConsoleV1ExperimentsIdAlertsMetricIdResolvePost200Response consoleV1GatesIdAlertsMetricIdResolvePost_0(resolveGuardrailAlertRequestDto)


### Example

```typescript
import {
    GatesApi,
    Configuration,
    ResolveGuardrailAlertRequestDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new GatesApi(configuration);

let id: string; //id (default to undefined)
let metricId: string; //metric id (default to undefined)
let resolveGuardrailAlertRequestDto: ResolveGuardrailAlertRequestDto; //

const { status, data } = await apiInstance.consoleV1GatesIdAlertsMetricIdResolvePost_0(
    id,
    metricId,
    resolveGuardrailAlertRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resolveGuardrailAlertRequestDto** | **ResolveGuardrailAlertRequestDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **metricId** | [**string**] | metric id | defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdAlertsMetricIdResolvePost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Metric rollout alert resolved successfully |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1GatesIdArchivePut**
> ConsoleV1GatesIdArchivePut200Response consoleV1GatesIdArchivePut(archiveSchemaDto)


### Example

```typescript
import {
    GatesApi,
    Configuration,
    ArchiveSchemaDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new GatesApi(configuration);

let id: string; //id (default to undefined)
let archiveSchemaDto: ArchiveSchemaDto; //

const { status, data } = await apiInstance.consoleV1GatesIdArchivePut(
    id,
    archiveSchemaDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **archiveSchemaDto** | **ArchiveSchemaDto**|  | |
| **id** | [**string**] | id | defaults to undefined|


### Return type

**ConsoleV1GatesIdArchivePut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Archive gate response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1GatesIdChecksGet**
> ConsoleV1GatesIdChecksGet200Response consoleV1GatesIdChecksGet()


### Example

```typescript
import {
    GatesApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new GatesApi(configuration);

let id: string; //id (default to undefined)

const { status, data } = await apiInstance.consoleV1GatesIdChecksGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|


### Return type

**ConsoleV1GatesIdChecksGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Gate checks response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1GatesIdCodeCleanupPost**
> ConsoleV1GatesIdCodeCleanupPost200Response consoleV1GatesIdCodeCleanupPost()


### Example

```typescript
import {
    GatesApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new GatesApi(configuration);

let id: string; //id (default to undefined)

const { status, data } = await apiInstance.consoleV1GatesIdCodeCleanupPost(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|


### Return type

**ConsoleV1GatesIdCodeCleanupPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Start gate code cleanup |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1GatesIdDelete**
> ConsoleV1GatesIdDelete200Response consoleV1GatesIdDelete()


### Example

```typescript
import {
    GatesApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new GatesApi(configuration);

let id: string; //id (default to undefined)

const { status, data } = await apiInstance.consoleV1GatesIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|


### Return type

**ConsoleV1GatesIdDelete200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Delete gate response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1GatesIdDisablePut**
> ConsoleV1GatesIdDisablePut200Response consoleV1GatesIdDisablePut()


### Example

```typescript
import {
    GatesApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new GatesApi(configuration);

let id: string; //id (default to undefined)

const { status, data } = await apiInstance.consoleV1GatesIdDisablePut(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|


### Return type

**ConsoleV1GatesIdDisablePut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Launch gate response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1GatesIdDynamicConfigReferencesGet**
> Getconsolev1gatesiddynamicconfigreferencesResponse consoleV1GatesIdDynamicConfigReferencesGet()


### Example

```typescript
import {
    GatesApi,
    Configuration,
    number
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new GatesApi(configuration);

let id: string; //id (default to undefined)
let limit: number; // (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1GatesIdDynamicConfigReferencesGet(
    id,
    limit,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to undefined|


### Return type

**Getconsolev1gatesiddynamicconfigreferencesResponse**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List dynamic configs that reference this gate |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1GatesIdEnablePut**
> ConsoleV1GatesIdDisablePut200Response consoleV1GatesIdEnablePut()


### Example

```typescript
import {
    GatesApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new GatesApi(configuration);

let id: string; //id (default to undefined)

const { status, data } = await apiInstance.consoleV1GatesIdEnablePut(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|


### Return type

**ConsoleV1GatesIdDisablePut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Enable gate response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1GatesIdExperimentReferencesGet**
> Getconsolev1gatesidexperimentreferencesResponse consoleV1GatesIdExperimentReferencesGet()


### Example

```typescript
import {
    GatesApi,
    Configuration,
    number
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new GatesApi(configuration);

let id: string; //id (default to undefined)
let limit: number; // (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1GatesIdExperimentReferencesGet(
    id,
    limit,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to undefined|


### Return type

**Getconsolev1gatesidexperimentreferencesResponse**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List experiments that reference this gate |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1GatesIdGateReferencesGet**
> Getconsolev1gatesidgatereferencesResponse consoleV1GatesIdGateReferencesGet()


### Example

```typescript
import {
    GatesApi,
    Configuration,
    number
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new GatesApi(configuration);

let id: string; //id (default to undefined)
let limit: number; // (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1GatesIdGateReferencesGet(
    id,
    limit,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to undefined|


### Return type

**Getconsolev1gatesidgatereferencesResponse**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List entities that reference this gate |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1GatesIdGet**
> ConsoleV1GatesIdGet200Response consoleV1GatesIdGet()


### Example

```typescript
import {
    GatesApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new GatesApi(configuration);

let id: string; //id (default to undefined)

const { status, data } = await apiInstance.consoleV1GatesIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|


### Return type

**ConsoleV1GatesIdGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get gate response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1GatesIdLaunchPut**
> ConsoleV1GatesIdDisablePut200Response consoleV1GatesIdLaunchPut()


### Example

```typescript
import {
    GatesApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new GatesApi(configuration);

let id: string; //id (default to undefined)

const { status, data } = await apiInstance.consoleV1GatesIdLaunchPut(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|


### Return type

**ConsoleV1GatesIdDisablePut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Launch gate response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1GatesIdLoadPulsePost**
> ConsoleV1GatesIdLoadPulsePost200Response consoleV1GatesIdLoadPulsePost(echidnaGateLoadPulseQueryDto)


### Example

```typescript
import {
    GatesApi,
    Configuration,
    EchidnaGateLoadPulseQueryDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new GatesApi(configuration);

let id: string; //id (default to undefined)
let echidnaGateLoadPulseQueryDto: EchidnaGateLoadPulseQueryDto; //

const { status, data } = await apiInstance.consoleV1GatesIdLoadPulsePost(
    id,
    echidnaGateLoadPulseQueryDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **echidnaGateLoadPulseQueryDto** | **EchidnaGateLoadPulseQueryDto**|  | |
| **id** | [**string**] | id | defaults to undefined|


### Return type

**ConsoleV1GatesIdLoadPulsePost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Load Pulse Gate Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1GatesIdOverridesDelete**
> ConsoleV1GatesIdOverridesPost201Response consoleV1GatesIdOverridesDelete()


### Example

```typescript
import {
    GatesApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new GatesApi(configuration);

let id: string; //id (default to undefined)

const { status, data } = await apiInstance.consoleV1GatesIdOverridesDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|


### Return type

**ConsoleV1GatesIdOverridesPost201Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Delete Gate Override Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1GatesIdOverridesGet**
> ConsoleV1GatesIdOverridesGet201Response consoleV1GatesIdOverridesGet()


### Example

```typescript
import {
    GatesApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new GatesApi(configuration);

let id: string; //id (default to undefined)

const { status, data } = await apiInstance.consoleV1GatesIdOverridesGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|


### Return type

**ConsoleV1GatesIdOverridesGet201Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Get Gate Override Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1GatesIdOverridesPatch**
> ConsoleV1GatesIdOverridesPost201Response consoleV1GatesIdOverridesPatch(updateOverridesContractDto)


### Example

```typescript
import {
    GatesApi,
    Configuration,
    UpdateOverridesContractDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new GatesApi(configuration);

let id: string; //id (default to undefined)
let updateOverridesContractDto: UpdateOverridesContractDto; //

const { status, data } = await apiInstance.consoleV1GatesIdOverridesPatch(
    id,
    updateOverridesContractDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateOverridesContractDto** | **UpdateOverridesContractDto**|  | |
| **id** | [**string**] | id | defaults to undefined|


### Return type

**ConsoleV1GatesIdOverridesPost201Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Add Gate Override Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1GatesIdOverridesPost**
> ConsoleV1GatesIdOverridesPost201Response consoleV1GatesIdOverridesPost(updateOverridesContractDto)


### Example

```typescript
import {
    GatesApi,
    Configuration,
    UpdateOverridesContractDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new GatesApi(configuration);

let id: string; //id (default to undefined)
let updateOverridesContractDto: UpdateOverridesContractDto; //

const { status, data } = await apiInstance.consoleV1GatesIdOverridesPost(
    id,
    updateOverridesContractDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateOverridesContractDto** | **UpdateOverridesContractDto**|  | |
| **id** | [**string**] | id | defaults to undefined|


### Return type

**ConsoleV1GatesIdOverridesPost201Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Update Gate Override Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1GatesIdPatch**
> ConsoleV1GatesIdPatch200Response consoleV1GatesIdPatch(gatePartialUpdateDto)


### Example

```typescript
import {
    GatesApi,
    Configuration,
    GatePartialUpdateDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new GatesApi(configuration);

let id: string; //id (default to undefined)
let gatePartialUpdateDto: GatePartialUpdateDto; //

const { status, data } = await apiInstance.consoleV1GatesIdPatch(
    id,
    gatePartialUpdateDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatePartialUpdateDto** | **GatePartialUpdateDto**|  | |
| **id** | [**string**] | id | defaults to undefined|


### Return type

**ConsoleV1GatesIdPatch200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Update gate response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1GatesIdPost**
> ConsoleV1GatesIdPost200Response consoleV1GatesIdPost(gateFullUpdateDto)


### Example

```typescript
import {
    GatesApi,
    Configuration,
    GateFullUpdateDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new GatesApi(configuration);

let id: string; //id (default to undefined)
let gateFullUpdateDto: GateFullUpdateDto; //

const { status, data } = await apiInstance.consoleV1GatesIdPost(
    id,
    gateFullUpdateDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gateFullUpdateDto** | **GateFullUpdateDto**|  | |
| **id** | [**string**] | id | defaults to undefined|


### Return type

**ConsoleV1GatesIdPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Update gate response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1GatesIdReviewsReviewIDCommitPut**
> ConsoleV1GatesIdReviewsReviewIDCommitPut200Response consoleV1GatesIdReviewsReviewIDCommitPut()


### Example

```typescript
import {
    GatesApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new GatesApi(configuration);

let id: string; // (default to undefined)
let reviewID: string; // (default to undefined)

const { status, data } = await apiInstance.consoleV1GatesIdReviewsReviewIDCommitPut(
    id,
    reviewID
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **reviewID** | [**string**] |  | defaults to undefined|


### Return type

**ConsoleV1GatesIdReviewsReviewIDCommitPut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Commit an approved gate review |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1GatesIdRulePost**
> ConsoleV1GatesIdRulePost200Response consoleV1GatesIdRulePost(ruleDto)


### Example

```typescript
import {
    GatesApi,
    Configuration,
    RuleDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new GatesApi(configuration);

let id: string; //id (default to undefined)
let ruleDto: RuleDto; //

const { status, data } = await apiInstance.consoleV1GatesIdRulePost(
    id,
    ruleDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ruleDto** | **RuleDto**|  | |
| **id** | [**string**] | id | defaults to undefined|


### Return type

**ConsoleV1GatesIdRulePost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Add Gate Rule Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1GatesIdRulesGet**
> Getconsolev1gatesidrulesResponse consoleV1GatesIdRulesGet()


### Example

```typescript
import {
    GatesApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new GatesApi(configuration);

let id: string; //id (default to undefined)

const { status, data } = await apiInstance.consoleV1GatesIdRulesGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|


### Return type

**Getconsolev1gatesidrulesResponse**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get gate rules response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1GatesIdRulesRuleIDDelete**
> ConsoleV1GatesIdPatch200Response consoleV1GatesIdRulesRuleIDDelete()


### Example

```typescript
import {
    GatesApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new GatesApi(configuration);

let id: string; //Gate ID (default to undefined)
let ruleID: string; //Rule ID (default to undefined)

const { status, data } = await apiInstance.consoleV1GatesIdRulesRuleIDDelete(
    id,
    ruleID
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Gate ID | defaults to undefined|
| **ruleID** | [**string**] | Rule ID | defaults to undefined|


### Return type

**ConsoleV1GatesIdPatch200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Update gate response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1GatesIdRulesRuleIDPatch**
> ConsoleV1GatesIdRulesRuleIDPatch200Response consoleV1GatesIdRulesRuleIDPatch(ruleUpdateDto)

Update all given rules. It does NOT create or delete if you add more rules and remove rules in the rules object.

### Example

```typescript
import {
    GatesApi,
    Configuration,
    RuleUpdateDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new GatesApi(configuration);

let id: string; //Gate ID (default to undefined)
let ruleID: string; //Rule ID (default to undefined)
let ruleUpdateDto: RuleUpdateDto; //

const { status, data } = await apiInstance.consoleV1GatesIdRulesRuleIDPatch(
    id,
    ruleID,
    ruleUpdateDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ruleUpdateDto** | **RuleUpdateDto**|  | |
| **id** | [**string**] | Gate ID | defaults to undefined|
| **ruleID** | [**string**] | Rule ID | defaults to undefined|


### Return type

**ConsoleV1GatesIdRulesRuleIDPatch200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Update gate response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1GatesIdRulesRuleIDPulseLoadHistoryGet**
> Getconsolev1gatesidrulesruleIDpulseloadhistoryResponse consoleV1GatesIdRulesRuleIDPulseLoadHistoryGet()


### Example

```typescript
import {
    GatesApi,
    Configuration,
    number,
    number
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new GatesApi(configuration);

let id: string; //Gate ID (default to undefined)
let ruleID: string; //Rule ID (default to undefined)
let limit: number; //Results per page (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1GatesIdRulesRuleIDPulseLoadHistoryGet(
    id,
    ruleID,
    limit,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Gate ID | defaults to undefined|
| **ruleID** | [**string**] | Rule ID | defaults to undefined|
| **limit** | [**number**] | Results per page | (optional) defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to undefined|


### Return type

**Getconsolev1gatesidrulesruleIDpulseloadhistoryResponse**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List Pulse Load History |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1GatesIdRulesRuleIDPulseResultsGet**
> ConsoleV1GatesIdRulesRuleIDPulseResultsGet200Response consoleV1GatesIdRulesRuleIDPulseResultsGet()


### Example

```typescript
import {
    GatesApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new GatesApi(configuration);

let id: string; //Gate ID (default to undefined)
let ruleID: string; //Rule ID (default to undefined)
let cuped: string; //Whether to apply CUPED. Allowed values are \"true\" or \"false\". (optional) (default to undefined)
let confidence: string; //Confidence interval (0-100) (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1GatesIdRulesRuleIDPulseResultsGet(
    id,
    ruleID,
    cuped,
    confidence
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Gate ID | defaults to undefined|
| **ruleID** | [**string**] | Rule ID | defaults to undefined|
| **cuped** | [**string**] | Whether to apply CUPED. Allowed values are \&quot;true\&quot; or \&quot;false\&quot;. | (optional) defaults to undefined|
| **confidence** | [**string**] | Confidence interval (0-100) | (optional) defaults to undefined|


### Return type

**ConsoleV1GatesIdRulesRuleIDPulseResultsGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get Pulse Results Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1GatesIdUnarchivePut**
> ConsoleV1GatesIdUnarchivePut200Response consoleV1GatesIdUnarchivePut(unarchiveSchemaDto)


### Example

```typescript
import {
    GatesApi,
    Configuration,
    UnarchiveSchemaDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new GatesApi(configuration);

let id: string; //id (default to undefined)
let unarchiveSchemaDto: UnarchiveSchemaDto; //

const { status, data } = await apiInstance.consoleV1GatesIdUnarchivePut(
    id,
    unarchiveSchemaDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **unarchiveSchemaDto** | **UnarchiveSchemaDto**|  | |
| **id** | [**string**] | id | defaults to undefined|


### Return type

**ConsoleV1GatesIdUnarchivePut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Unarchive gate response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1GatesIdVersionsGet**
> Getconsolev1gatesidversionsResponse consoleV1GatesIdVersionsGet()


### Example

```typescript
import {
    GatesApi,
    Configuration,
    number,
    number
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new GatesApi(configuration);

let id: string; //id (default to undefined)
let limit: number; //Results per page (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1GatesIdVersionsGet(
    id,
    limit,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|
| **limit** | [**number**] | Results per page | (optional) defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to undefined|


### Return type

**Getconsolev1gatesidversionsResponse**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List Gate Versions Success |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1GatesPost**
> ConsoleV1GatesPost201Response consoleV1GatesPost(gateCreateDto)


### Example

```typescript
import {
    GatesApi,
    Configuration,
    GateCreateDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new GatesApi(configuration);

let gateCreateDto: GateCreateDto; //

const { status, data } = await apiInstance.consoleV1GatesPost(
    gateCreateDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gateCreateDto** | **GateCreateDto**|  | |


### Return type

**ConsoleV1GatesPost201Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Create gate response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

