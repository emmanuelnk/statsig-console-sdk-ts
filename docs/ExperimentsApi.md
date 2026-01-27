# ExperimentsApi

All URIs are relative to *https://statsigapi.net*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**consoleV1ExperimentsAssignmentSourceNameDelete**](#consolev1experimentsassignmentsourcenamedelete) | **DELETE** /console/v1/experiments/assignment_source/{name} | Delete Assignment Source|
|[**consoleV1ExperimentsAssignmentSourceNamePatch**](#consolev1experimentsassignmentsourcenamepatch) | **PATCH** /console/v1/experiments/assignment_source/{name} | Patch Assignment Source|
|[**consoleV1ExperimentsAssignmentSourceNamePost**](#consolev1experimentsassignmentsourcenamepost) | **POST** /console/v1/experiments/assignment_source/{name} | Post Assignment Source|
|[**consoleV1ExperimentsAssignmentSourcesGet**](#consolev1experimentsassignmentsourcesget) | **GET** /console/v1/experiments/assignment_sources | List Assignment Sources|
|[**consoleV1ExperimentsAssignmentSourcesPost**](#consolev1experimentsassignmentsourcespost) | **POST** /console/v1/experiments/assignment_sources | Create Assignment Source|
|[**consoleV1ExperimentsEntityPropertiesGet**](#consolev1experimentsentitypropertiesget) | **GET** /console/v1/experiments/entity_properties | List Entity Property Sources|
|[**consoleV1ExperimentsEntityPropertiesPost**](#consolev1experimentsentitypropertiespost) | **POST** /console/v1/experiments/entity_properties | Create Entity Property Source|
|[**consoleV1ExperimentsEntityPropertyNameDelete**](#consolev1experimentsentitypropertynamedelete) | **DELETE** /console/v1/experiments/entity_property/{name} | Delete Entity Property Source|
|[**consoleV1ExperimentsEntityPropertyNameGet**](#consolev1experimentsentitypropertynameget) | **GET** /console/v1/experiments/entity_property/{name} | Get Entity Property Source|
|[**consoleV1ExperimentsEntityPropertyNamePatch**](#consolev1experimentsentitypropertynamepatch) | **PATCH** /console/v1/experiments/entity_property/{name} | Patch Entity Property Source|
|[**consoleV1ExperimentsEntityPropertyNamePost**](#consolev1experimentsentitypropertynamepost) | **POST** /console/v1/experiments/entity_property/{name} | Post Entity Property Source|
|[**consoleV1ExperimentsGet**](#consolev1experimentsget) | **GET** /console/v1/experiments | List Experiments|
|[**consoleV1ExperimentsGet_0**](#consolev1experimentsget_0) | **GET** /console/v1/experiments | List Experiments|
|[**consoleV1ExperimentsIdAbandonPut**](#consolev1experimentsidabandonput) | **PUT** /console/v1/experiments/{id}/abandon | Abandon Experiment|
|[**consoleV1ExperimentsIdAbandonPut_0**](#consolev1experimentsidabandonput_0) | **PUT** /console/v1/experiments/{id}/abandon | Abandon Experiment|
|[**consoleV1ExperimentsIdAlertsMetricIdResolvePost**](#consolev1experimentsidalertsmetricidresolvepost) | **POST** /console/v1/experiments/{id}/alerts/{metricId}/resolve | Resolve Metric Rollout Alert|
|[**consoleV1ExperimentsIdAlertsMetricIdResolvePost_0**](#consolev1experimentsidalertsmetricidresolvepost_0) | **POST** /console/v1/experiments/{id}/alerts/{metricId}/resolve | Resolve Metric Rollout Alert|
|[**consoleV1ExperimentsIdArchivePut**](#consolev1experimentsidarchiveput) | **PUT** /console/v1/experiments/{id}/archive | Archive Experiment|
|[**consoleV1ExperimentsIdArchivePut_0**](#consolev1experimentsidarchiveput_0) | **PUT** /console/v1/experiments/{id}/archive | Archive Experiment|
|[**consoleV1ExperimentsIdContextGet**](#consolev1experimentsidcontextget) | **GET** /console/v1/experiments/{id}/context | Get Experiment Context|
|[**consoleV1ExperimentsIdContextGet_0**](#consolev1experimentsidcontextget_0) | **GET** /console/v1/experiments/{id}/context | Get Experiment Context|
|[**consoleV1ExperimentsIdCumulativeExposuresGet**](#consolev1experimentsidcumulativeexposuresget) | **GET** /console/v1/experiments/{id}/cumulative_exposures | Retrieve cumulative exposures|
|[**consoleV1ExperimentsIdCumulativeExposuresGet_0**](#consolev1experimentsidcumulativeexposuresget_0) | **GET** /console/v1/experiments/{id}/cumulative_exposures | Retrieve cumulative exposures|
|[**consoleV1ExperimentsIdDelete**](#consolev1experimentsiddelete) | **DELETE** /console/v1/experiments/{id} | Deleted Experiment|
|[**consoleV1ExperimentsIdDelete_0**](#consolev1experimentsiddelete_0) | **DELETE** /console/v1/experiments/{id} | Deleted Experiment|
|[**consoleV1ExperimentsIdDisableGroupsPost**](#consolev1experimentsiddisablegroupspost) | **POST** /console/v1/experiments/{id}/disable_groups | Disable Experiment Groups|
|[**consoleV1ExperimentsIdDisableGroupsPost_0**](#consolev1experimentsiddisablegroupspost_0) | **POST** /console/v1/experiments/{id}/disable_groups | Disable Experiment Groups|
|[**consoleV1ExperimentsIdEnableGroupsPost**](#consolev1experimentsidenablegroupspost) | **POST** /console/v1/experiments/{id}/enable_groups | Enable Experiment Groups|
|[**consoleV1ExperimentsIdEnableGroupsPost_0**](#consolev1experimentsidenablegroupspost_0) | **POST** /console/v1/experiments/{id}/enable_groups | Enable Experiment Groups|
|[**consoleV1ExperimentsIdGet**](#consolev1experimentsidget) | **GET** /console/v1/experiments/{id} | Get Experiment|
|[**consoleV1ExperimentsIdGet_0**](#consolev1experimentsidget_0) | **GET** /console/v1/experiments/{id} | Get Experiment|
|[**consoleV1ExperimentsIdLoadPulsePost**](#consolev1experimentsidloadpulsepost) | **POST** /console/v1/experiments/{id}/load_pulse | Load Pulse (Warehouse Native)|
|[**consoleV1ExperimentsIdMakeDecisionPut**](#consolev1experimentsidmakedecisionput) | **PUT** /console/v1/experiments/{id}/make_decision | Finish Experiment Early|
|[**consoleV1ExperimentsIdMakeDecisionPut_0**](#consolev1experimentsidmakedecisionput_0) | **PUT** /console/v1/experiments/{id}/make_decision | Finish Experiment Early|
|[**consoleV1ExperimentsIdOverridesDelete**](#consolev1experimentsidoverridesdelete) | **DELETE** /console/v1/experiments/{id}/overrides | Delete Experiment Overrides|
|[**consoleV1ExperimentsIdOverridesGet**](#consolev1experimentsidoverridesget) | **GET** /console/v1/experiments/{id}/overrides | Get Experiment Overrides|
|[**consoleV1ExperimentsIdOverridesPatch**](#consolev1experimentsidoverridespatch) | **PATCH** /console/v1/experiments/{id}/overrides | Partially Update Experiment Overrides|
|[**consoleV1ExperimentsIdOverridesPost**](#consolev1experimentsidoverridespost) | **POST** /console/v1/experiments/{id}/overrides | Update Experiment Overrides|
|[**consoleV1ExperimentsIdPatch**](#consolev1experimentsidpatch) | **PATCH** /console/v1/experiments/{id} | Partially Update Experiment|
|[**consoleV1ExperimentsIdPatch_0**](#consolev1experimentsidpatch_0) | **PATCH** /console/v1/experiments/{id} | Partially Update Experiment|
|[**consoleV1ExperimentsIdPost**](#consolev1experimentsidpost) | **POST** /console/v1/experiments/{id} | Fully Update Experiment|
|[**consoleV1ExperimentsIdPost_0**](#consolev1experimentsidpost_0) | **POST** /console/v1/experiments/{id} | Fully Update Experiment|
|[**consoleV1ExperimentsIdPulseLoadHistoryGet**](#consolev1experimentsidpulseloadhistoryget) | **GET** /console/v1/experiments/{id}/pulse_load_history | Pulse Load History (Warehouse Native)|
|[**consoleV1ExperimentsIdPulseResultsGet**](#consolev1experimentsidpulseresultsget) | **GET** /console/v1/experiments/{id}/pulse_results | Retrieve Pulse Results (Beta)|
|[**consoleV1ExperimentsIdPulseResultsGet_0**](#consolev1experimentsidpulseresultsget_0) | **GET** /console/v1/experiments/{id}/pulse_results | Retrieve Pulse Results (Beta)|
|[**consoleV1ExperimentsIdResetPut**](#consolev1experimentsidresetput) | **PUT** /console/v1/experiments/{id}/reset | Reset Experiment|
|[**consoleV1ExperimentsIdResetPut_0**](#consolev1experimentsidresetput_0) | **PUT** /console/v1/experiments/{id}/reset | Reset Experiment|
|[**consoleV1ExperimentsIdRestartAsNewPost**](#consolev1experimentsidrestartasnewpost) | **POST** /console/v1/experiments/{id}/restart_as_new | Restart As New Experiment|
|[**consoleV1ExperimentsIdRestartAsNewPost_0**](#consolev1experimentsidrestartasnewpost_0) | **POST** /console/v1/experiments/{id}/restart_as_new | Restart As New Experiment|
|[**consoleV1ExperimentsIdReviewsReviewIDCommitPut**](#consolev1experimentsidreviewsreviewidcommitput) | **PUT** /console/v1/experiments/{id}/reviews/{reviewID}/commit | Commit Experiment Review|
|[**consoleV1ExperimentsIdScheduleStartPost**](#consolev1experimentsidschedulestartpost) | **POST** /console/v1/experiments/{id}/schedule_start | Schedule Experiment Start|
|[**consoleV1ExperimentsIdScheduleStartPost_0**](#consolev1experimentsidschedulestartpost_0) | **POST** /console/v1/experiments/{id}/schedule_start | Schedule Experiment Start|
|[**consoleV1ExperimentsIdStartPut**](#consolev1experimentsidstartput) | **PUT** /console/v1/experiments/{id}/start | Start Experiment|
|[**consoleV1ExperimentsIdStartPut_0**](#consolev1experimentsidstartput_0) | **PUT** /console/v1/experiments/{id}/start | Start Experiment|
|[**consoleV1ExperimentsIdUnarchivePut**](#consolev1experimentsidunarchiveput) | **PUT** /console/v1/experiments/{id}/unarchive | Unarchive Experiment|
|[**consoleV1ExperimentsIdUnarchivePut_0**](#consolev1experimentsidunarchiveput_0) | **PUT** /console/v1/experiments/{id}/unarchive | Unarchive Experiment|
|[**consoleV1ExperimentsIdVersionsGet**](#consolev1experimentsidversionsget) | **GET** /console/v1/experiments/{id}/versions | List Experiment Versions|
|[**consoleV1ExperimentsPost**](#consolev1experimentspost) | **POST** /console/v1/experiments | Create Experiment|
|[**consoleV1ExperimentsPost_0**](#consolev1experimentspost_0) | **POST** /console/v1/experiments | Create Experiment|

# **consoleV1ExperimentsAssignmentSourceNameDelete**
> ConsoleV1ExperimentsAssignmentSourceNameDelete200Response consoleV1ExperimentsAssignmentSourceNameDelete()


### Example

```typescript
import {
    ExperimentsApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let name: string; //Name of the assignment source (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsAssignmentSourceNameDelete(
    name,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | Name of the assignment source | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsAssignmentSourceNameDelete200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Delete Assignment Source response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsAssignmentSourceNamePatch**
> ConsoleV1ExperimentsAssignmentSourceNamePost200Response consoleV1ExperimentsAssignmentSourceNamePatch(assignmentSourcePartialUpdateDto)


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    AssignmentSourcePartialUpdateDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let name: string; //Name of the assignment source (default to undefined)
let assignmentSourcePartialUpdateDto: AssignmentSourcePartialUpdateDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsAssignmentSourceNamePatch(
    name,
    assignmentSourcePartialUpdateDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assignmentSourcePartialUpdateDto** | **AssignmentSourcePartialUpdateDto**|  | |
| **name** | [**string**] | Name of the assignment source | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsAssignmentSourceNamePost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Patch Assignment Source response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsAssignmentSourceNamePost**
> ConsoleV1ExperimentsAssignmentSourceNamePost200Response consoleV1ExperimentsAssignmentSourceNamePost(assignmentSourceQueryUpdateDto)


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    AssignmentSourceQueryUpdateDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let name: string; //Name of the assignment source (default to undefined)
let assignmentSourceQueryUpdateDto: AssignmentSourceQueryUpdateDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsAssignmentSourceNamePost(
    name,
    assignmentSourceQueryUpdateDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assignmentSourceQueryUpdateDto** | **AssignmentSourceQueryUpdateDto**|  | |
| **name** | [**string**] | Name of the assignment source | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsAssignmentSourceNamePost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Post Assignment Source response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsAssignmentSourcesGet**
> ConsoleV1ExperimentsAssignmentSourcesGet200Response consoleV1ExperimentsAssignmentSourcesGet()


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    number,
    number
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let limit: number; //Results per page (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsAssignmentSourcesGet(
    limit,
    page,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Results per page | (optional) defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsAssignmentSourcesGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List Assignment Sources response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsAssignmentSourcesPost**
> ConsoleV1ExperimentsAssignmentSourcesPost201Response consoleV1ExperimentsAssignmentSourcesPost(assignmentSourceCreationDto)


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    AssignmentSourceCreationDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let assignmentSourceCreationDto: AssignmentSourceCreationDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsAssignmentSourcesPost(
    assignmentSourceCreationDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assignmentSourceCreationDto** | **AssignmentSourceCreationDto**|  | |
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsAssignmentSourcesPost201Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Create Assignment Source response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsEntityPropertiesGet**
> ConsoleV1ExperimentsEntityPropertiesGet200Response consoleV1ExperimentsEntityPropertiesGet()


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    number,
    number
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let limit: number; //Results per page (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsEntityPropertiesGet(
    limit,
    page,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Results per page | (optional) defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsEntityPropertiesGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List Entity Property Sources response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsEntityPropertiesPost**
> ConsoleV1ExperimentsEntityPropertiesPost201Response consoleV1ExperimentsEntityPropertiesPost(entityPropertySourceCreationDto)


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    EntityPropertySourceCreationDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let entityPropertySourceCreationDto: EntityPropertySourceCreationDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsEntityPropertiesPost(
    entityPropertySourceCreationDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityPropertySourceCreationDto** | **EntityPropertySourceCreationDto**|  | |
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsEntityPropertiesPost201Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Create Entity Property Source response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsEntityPropertyNameDelete**
> ConsoleV1ExperimentsEntityPropertyNameDelete200Response consoleV1ExperimentsEntityPropertyNameDelete()


### Example

```typescript
import {
    ExperimentsApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let name: string; //name (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsEntityPropertyNameDelete(
    name,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | name | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsEntityPropertyNameDelete200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Delete Entity Property Source response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsEntityPropertyNameGet**
> ConsoleV1ExperimentsEntityPropertyNameGet200Response consoleV1ExperimentsEntityPropertyNameGet()


### Example

```typescript
import {
    ExperimentsApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let name: string; //Name of entity property source (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsEntityPropertyNameGet(
    name,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | Name of entity property source | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsEntityPropertyNameGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get Entity Property Source response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsEntityPropertyNamePatch**
> ConsoleV1ExperimentsEntityPropertyNamePatch200Response consoleV1ExperimentsEntityPropertyNamePatch(entityPropertySourcePartialUpdateDto)


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    EntityPropertySourcePartialUpdateDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let name: string; //Name of entity property source (default to undefined)
let entityPropertySourcePartialUpdateDto: EntityPropertySourcePartialUpdateDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsEntityPropertyNamePatch(
    name,
    entityPropertySourcePartialUpdateDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityPropertySourcePartialUpdateDto** | **EntityPropertySourcePartialUpdateDto**|  | |
| **name** | [**string**] | Name of entity property source | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsEntityPropertyNamePatch200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Patch Entity Property Source response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsEntityPropertyNamePost**
> ConsoleV1ExperimentsEntityPropertyNamePost200Response consoleV1ExperimentsEntityPropertyNamePost(entityPropertySourceQueryUpdateDto)


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    EntityPropertySourceQueryUpdateDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let name: string; //name (default to undefined)
let entityPropertySourceQueryUpdateDto: EntityPropertySourceQueryUpdateDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsEntityPropertyNamePost(
    name,
    entityPropertySourceQueryUpdateDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityPropertySourceQueryUpdateDto** | **EntityPropertySourceQueryUpdateDto**|  | |
| **name** | [**string**] | name | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsEntityPropertyNamePost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Post Entity Property Source response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsGet**
> ConsoleV1ExperimentsGet200Response consoleV1ExperimentsGet()


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    ConsoleV1ExperimentsGetStatusParameter,
    ConsoleV1ExperimentsGetExperimentTypeParameter,
    ConsoleV1AuditLogsGetTagsParameter,
    number,
    number
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let layerID: string; //Which layer to place the experiment into. (optional) (default to undefined)
let idType: string; //The idType the experiment will be performed on (optional) (default to undefined)
let teamID: string; //The team ID associated with the experiment, Enterprise only. (optional) (default to undefined)
let status: ConsoleV1ExperimentsGetStatusParameter; //The current status of the experiment (optional) (default to undefined)
let targetAppID: string; // (optional) (default to undefined)
let createdStartDate: string; //Expected valid date in the form of YYYY-MM-DD (optional) (default to undefined)
let createdEndDate: string; //Expected valid date in the form of YYYY-MM-DD (optional) (default to undefined)
let experimentType: ConsoleV1ExperimentsGetExperimentTypeParameter; //Filter by experiment type (optional) (default to undefined)
let creatorName: string; //Name of the creator. (optional) (default to undefined)
let creatorID: string; //ID of the user who created the entity. (optional) (default to undefined)
let tags: ConsoleV1AuditLogsGetTagsParameter; //Filter by tags (optional) (default to undefined)
let limit: number; //Results per page (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsGet(
    layerID,
    idType,
    teamID,
    status,
    targetAppID,
    createdStartDate,
    createdEndDate,
    experimentType,
    creatorName,
    creatorID,
    tags,
    limit,
    page,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **layerID** | [**string**] | Which layer to place the experiment into. | (optional) defaults to undefined|
| **idType** | [**string**] | The idType the experiment will be performed on | (optional) defaults to undefined|
| **teamID** | [**string**] | The team ID associated with the experiment, Enterprise only. | (optional) defaults to undefined|
| **status** | **ConsoleV1ExperimentsGetStatusParameter** | The current status of the experiment | (optional) defaults to undefined|
| **targetAppID** | [**string**] |  | (optional) defaults to undefined|
| **createdStartDate** | [**string**] | Expected valid date in the form of YYYY-MM-DD | (optional) defaults to undefined|
| **createdEndDate** | [**string**] | Expected valid date in the form of YYYY-MM-DD | (optional) defaults to undefined|
| **experimentType** | **ConsoleV1ExperimentsGetExperimentTypeParameter** | Filter by experiment type | (optional) defaults to undefined|
| **creatorName** | [**string**] | Name of the creator. | (optional) defaults to undefined|
| **creatorID** | [**string**] | ID of the user who created the entity. | (optional) defaults to undefined|
| **tags** | **ConsoleV1AuditLogsGetTagsParameter** | Filter by tags | (optional) defaults to undefined|
| **limit** | [**number**] | Results per page | (optional) defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List Experiments Success |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsGet_0**
> ConsoleV1ExperimentsGet200Response consoleV1ExperimentsGet_0()


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    ConsoleV1ExperimentsGetStatusParameter,
    ConsoleV1ExperimentsGetExperimentTypeParameter,
    ConsoleV1AuditLogsGetTagsParameter,
    number,
    number
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let layerID: string; //Which layer to place the experiment into. (optional) (default to undefined)
let idType: string; //The idType the experiment will be performed on (optional) (default to undefined)
let teamID: string; //The team ID associated with the experiment, Enterprise only. (optional) (default to undefined)
let status: ConsoleV1ExperimentsGetStatusParameter; //The current status of the experiment (optional) (default to undefined)
let targetAppID: string; // (optional) (default to undefined)
let createdStartDate: string; //Expected valid date in the form of YYYY-MM-DD (optional) (default to undefined)
let createdEndDate: string; //Expected valid date in the form of YYYY-MM-DD (optional) (default to undefined)
let experimentType: ConsoleV1ExperimentsGetExperimentTypeParameter; //Filter by experiment type (optional) (default to undefined)
let creatorName: string; //Name of the creator. (optional) (default to undefined)
let creatorID: string; //ID of the user who created the entity. (optional) (default to undefined)
let tags: ConsoleV1AuditLogsGetTagsParameter; //Filter by tags (optional) (default to undefined)
let limit: number; //Results per page (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsGet_0(
    layerID,
    idType,
    teamID,
    status,
    targetAppID,
    createdStartDate,
    createdEndDate,
    experimentType,
    creatorName,
    creatorID,
    tags,
    limit,
    page,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **layerID** | [**string**] | Which layer to place the experiment into. | (optional) defaults to undefined|
| **idType** | [**string**] | The idType the experiment will be performed on | (optional) defaults to undefined|
| **teamID** | [**string**] | The team ID associated with the experiment, Enterprise only. | (optional) defaults to undefined|
| **status** | **ConsoleV1ExperimentsGetStatusParameter** | The current status of the experiment | (optional) defaults to undefined|
| **targetAppID** | [**string**] |  | (optional) defaults to undefined|
| **createdStartDate** | [**string**] | Expected valid date in the form of YYYY-MM-DD | (optional) defaults to undefined|
| **createdEndDate** | [**string**] | Expected valid date in the form of YYYY-MM-DD | (optional) defaults to undefined|
| **experimentType** | **ConsoleV1ExperimentsGetExperimentTypeParameter** | Filter by experiment type | (optional) defaults to undefined|
| **creatorName** | [**string**] | Name of the creator. | (optional) defaults to undefined|
| **creatorID** | [**string**] | ID of the user who created the entity. | (optional) defaults to undefined|
| **tags** | **ConsoleV1AuditLogsGetTagsParameter** | Filter by tags | (optional) defaults to undefined|
| **limit** | [**number**] | Results per page | (optional) defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List Experiments Success |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdAbandonPut**
> ConsoleV1ExperimentsIdAbandonPut200Response consoleV1ExperimentsIdAbandonPut(experimentAbandonDto)


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    ExperimentAbandonDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let experimentAbandonDto: ExperimentAbandonDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdAbandonPut(
    id,
    experimentAbandonDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **experimentAbandonDto** | **ExperimentAbandonDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdAbandonPut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Abandon Experiment Success |  -  |
|**400** | Experiment has not yet started |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Experiment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdAbandonPut_0**
> ConsoleV1ExperimentsIdAbandonPut200Response consoleV1ExperimentsIdAbandonPut_0(experimentAbandonDto)


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    ExperimentAbandonDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let experimentAbandonDto: ExperimentAbandonDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdAbandonPut_0(
    id,
    experimentAbandonDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **experimentAbandonDto** | **ExperimentAbandonDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdAbandonPut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Abandon Experiment Success |  -  |
|**400** | Experiment has not yet started |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Experiment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdAlertsMetricIdResolvePost**
> ConsoleV1ExperimentsIdAlertsMetricIdResolvePost200Response consoleV1ExperimentsIdAlertsMetricIdResolvePost(resolveGuardrailAlertRequestDto)


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    ResolveGuardrailAlertRequestDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let metricId: string; //metric id (default to undefined)
let resolveGuardrailAlertRequestDto: ResolveGuardrailAlertRequestDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdAlertsMetricIdResolvePost(
    id,
    metricId,
    resolveGuardrailAlertRequestDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resolveGuardrailAlertRequestDto** | **ResolveGuardrailAlertRequestDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **metricId** | [**string**] | metric id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


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

# **consoleV1ExperimentsIdAlertsMetricIdResolvePost_0**
> ConsoleV1ExperimentsIdAlertsMetricIdResolvePost200Response consoleV1ExperimentsIdAlertsMetricIdResolvePost_0(resolveGuardrailAlertRequestDto)


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    ResolveGuardrailAlertRequestDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let metricId: string; //metric id (default to undefined)
let resolveGuardrailAlertRequestDto: ResolveGuardrailAlertRequestDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdAlertsMetricIdResolvePost_0(
    id,
    metricId,
    resolveGuardrailAlertRequestDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resolveGuardrailAlertRequestDto** | **ResolveGuardrailAlertRequestDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **metricId** | [**string**] | metric id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


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

# **consoleV1ExperimentsIdArchivePut**
> ConsoleV1ExperimentsIdArchivePut200Response consoleV1ExperimentsIdArchivePut(experimentArchiveDto)


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    ExperimentArchiveDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let experimentArchiveDto: ExperimentArchiveDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdArchivePut(
    id,
    experimentArchiveDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **experimentArchiveDto** | **ExperimentArchiveDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdArchivePut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Archive Experiment Success |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Experiment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdArchivePut_0**
> ConsoleV1ExperimentsIdArchivePut200Response consoleV1ExperimentsIdArchivePut_0(experimentArchiveDto)


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    ExperimentArchiveDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let experimentArchiveDto: ExperimentArchiveDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdArchivePut_0(
    id,
    experimentArchiveDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **experimentArchiveDto** | **ExperimentArchiveDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdArchivePut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Archive Experiment Success |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Experiment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdContextGet**
> ConsoleV1ExperimentsIdContextGet200Response consoleV1ExperimentsIdContextGet()


### Example

```typescript
import {
    ExperimentsApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdContextGet(
    id,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdContextGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get Experiment Context Success |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Experiment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdContextGet_0**
> ConsoleV1ExperimentsIdContextGet200Response consoleV1ExperimentsIdContextGet_0()


### Example

```typescript
import {
    ExperimentsApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdContextGet_0(
    id,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdContextGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get Experiment Context Success |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Experiment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdCumulativeExposuresGet**
> ConsoleV1ExperimentsIdCumulativeExposuresGet200Response consoleV1ExperimentsIdCumulativeExposuresGet()


### Example

```typescript
import {
    ExperimentsApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdCumulativeExposuresGet(
    id,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdCumulativeExposuresGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get cumulative exposures success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdCumulativeExposuresGet_0**
> ConsoleV1ExperimentsIdCumulativeExposuresGet200Response consoleV1ExperimentsIdCumulativeExposuresGet_0()


### Example

```typescript
import {
    ExperimentsApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdCumulativeExposuresGet_0(
    id,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdCumulativeExposuresGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get cumulative exposures success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdDelete**
> ConsoleV1ExperimentsIdDelete200Response consoleV1ExperimentsIdDelete()


### Example

```typescript
import {
    ExperimentsApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdDelete(
    id,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdDelete200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Delete Experiment Success |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Experiment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdDelete_0**
> ConsoleV1ExperimentsIdDelete200Response consoleV1ExperimentsIdDelete_0()


### Example

```typescript
import {
    ExperimentsApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdDelete_0(
    id,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdDelete200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Delete Experiment Success |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Experiment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdDisableGroupsPost**
> ConsoleV1ExperimentsIdDisableGroupsPost201Response consoleV1ExperimentsIdDisableGroupsPost(enableDisableGroupsDto)


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    EnableDisableGroupsDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let enableDisableGroupsDto: EnableDisableGroupsDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdDisableGroupsPost(
    id,
    enableDisableGroupsDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **enableDisableGroupsDto** | **EnableDisableGroupsDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdDisableGroupsPost201Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Disable experiment groups |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdDisableGroupsPost_0**
> ConsoleV1ExperimentsIdDisableGroupsPost201Response consoleV1ExperimentsIdDisableGroupsPost_0(enableDisableGroupsDto)


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    EnableDisableGroupsDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let enableDisableGroupsDto: EnableDisableGroupsDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdDisableGroupsPost_0(
    id,
    enableDisableGroupsDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **enableDisableGroupsDto** | **EnableDisableGroupsDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdDisableGroupsPost201Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Disable experiment groups |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdEnableGroupsPost**
> ConsoleV1ExperimentsIdDisableGroupsPost201Response consoleV1ExperimentsIdEnableGroupsPost(enableDisableGroupsDto)


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    EnableDisableGroupsDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let enableDisableGroupsDto: EnableDisableGroupsDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdEnableGroupsPost(
    id,
    enableDisableGroupsDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **enableDisableGroupsDto** | **EnableDisableGroupsDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdDisableGroupsPost201Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Enable experiment groups |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdEnableGroupsPost_0**
> ConsoleV1ExperimentsIdDisableGroupsPost201Response consoleV1ExperimentsIdEnableGroupsPost_0(enableDisableGroupsDto)


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    EnableDisableGroupsDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let enableDisableGroupsDto: EnableDisableGroupsDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdEnableGroupsPost_0(
    id,
    enableDisableGroupsDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **enableDisableGroupsDto** | **EnableDisableGroupsDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdDisableGroupsPost201Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Enable experiment groups |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdGet**
> ConsoleV1ExperimentsIdGet200Response consoleV1ExperimentsIdGet()


### Example

```typescript
import {
    ExperimentsApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdGet(
    id,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get Experiment Success |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Experiment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdGet_0**
> ConsoleV1ExperimentsIdGet200Response consoleV1ExperimentsIdGet_0()


### Example

```typescript
import {
    ExperimentsApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdGet_0(
    id,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get Experiment Success |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Experiment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdLoadPulsePost**
> ConsoleV1ExperimentsIdLoadPulsePost200Response consoleV1ExperimentsIdLoadPulsePost(echidnaLoadPulseQueryDto)


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    EchidnaLoadPulseQueryDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let echidnaLoadPulseQueryDto: EchidnaLoadPulseQueryDto; //
let refresh: 'full' | 'incremental' | 'metric'; // (optional) (default to 'full')
let metricIDs: Array<string>; // (optional) (default to undefined)
let ruleId: string; // (optional) (default to undefined)
let turboMode: boolean; // (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdLoadPulsePost(
    id,
    echidnaLoadPulseQueryDto,
    refresh,
    metricIDs,
    ruleId,
    turboMode,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **echidnaLoadPulseQueryDto** | **EchidnaLoadPulseQueryDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **refresh** | [**&#39;full&#39; | &#39;incremental&#39; | &#39;metric&#39;**]**Array<&#39;full&#39; &#124; &#39;incremental&#39; &#124; &#39;metric&#39;>** |  | (optional) defaults to 'full'|
| **metricIDs** | **Array&lt;string&gt;** |  | (optional) defaults to undefined|
| **ruleId** | [**string**] |  | (optional) defaults to undefined|
| **turboMode** | [**boolean**] |  | (optional) defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdLoadPulsePost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Load Pulse Success |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdMakeDecisionPut**
> ConsoleV1ExperimentsIdMakeDecisionPut200Response consoleV1ExperimentsIdMakeDecisionPut(experimentStatusUpdateDto)


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    ExperimentStatusUpdateDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let experimentStatusUpdateDto: ExperimentStatusUpdateDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdMakeDecisionPut(
    id,
    experimentStatusUpdateDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **experimentStatusUpdateDto** | **ExperimentStatusUpdateDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdMakeDecisionPut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Make Experiment Decision Success |  -  |
|**400** | Experiment has not yet started |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Experiment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdMakeDecisionPut_0**
> ConsoleV1ExperimentsIdMakeDecisionPut200Response consoleV1ExperimentsIdMakeDecisionPut_0(experimentStatusUpdateDto)


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    ExperimentStatusUpdateDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let experimentStatusUpdateDto: ExperimentStatusUpdateDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdMakeDecisionPut_0(
    id,
    experimentStatusUpdateDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **experimentStatusUpdateDto** | **ExperimentStatusUpdateDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdMakeDecisionPut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Make Experiment Decision Success |  -  |
|**400** | Experiment has not yet started |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Experiment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdOverridesDelete**
> ConsoleV1ExperimentsIdOverridesDelete200Response consoleV1ExperimentsIdOverridesDelete()


### Example

```typescript
import {
    ExperimentsApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdOverridesDelete(
    id,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdOverridesDelete200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Delete Update Experiment Overrides Success |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Experiment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdOverridesGet**
> ConsoleV1ExperimentsIdOverridesGet200Response consoleV1ExperimentsIdOverridesGet()


### Example

```typescript
import {
    ExperimentsApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdOverridesGet(
    id,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdOverridesGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get Experiment Overrides Success |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Experiment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdOverridesPatch**
> ConsoleV1ExperimentsIdOverridesPatch200Response consoleV1ExperimentsIdOverridesPatch(experimentOverridesDto)


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    ExperimentOverridesDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let experimentOverridesDto: ExperimentOverridesDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdOverridesPatch(
    id,
    experimentOverridesDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **experimentOverridesDto** | **ExperimentOverridesDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdOverridesPatch200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Partially Update Experiment Overrides Success |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Experiment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdOverridesPost**
> ConsoleV1ExperimentsIdOverridesPost200Response consoleV1ExperimentsIdOverridesPost(experimentOverridesDto)


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    ExperimentOverridesDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let experimentOverridesDto: ExperimentOverridesDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdOverridesPost(
    id,
    experimentOverridesDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **experimentOverridesDto** | **ExperimentOverridesDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdOverridesPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Update Experiment Overrides Success |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Experiment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdPatch**
> ConsoleV1ExperimentsIdPost200Response consoleV1ExperimentsIdPatch(experimentPartialUpdateDto)


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    ExperimentPartialUpdateDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let experimentPartialUpdateDto: ExperimentPartialUpdateDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdPatch(
    id,
    experimentPartialUpdateDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **experimentPartialUpdateDto** | **ExperimentPartialUpdateDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Partially Update Experiment Success |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Experiment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdPatch_0**
> ConsoleV1ExperimentsIdPost200Response consoleV1ExperimentsIdPatch_0(experimentPartialUpdateDto)


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    ExperimentPartialUpdateDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let experimentPartialUpdateDto: ExperimentPartialUpdateDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdPatch_0(
    id,
    experimentPartialUpdateDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **experimentPartialUpdateDto** | **ExperimentPartialUpdateDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Partially Update Experiment Success |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Experiment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdPost**
> ConsoleV1ExperimentsIdPost200Response consoleV1ExperimentsIdPost(experimentFullUpdateDto)


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    ExperimentFullUpdateDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let experimentFullUpdateDto: ExperimentFullUpdateDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdPost(
    id,
    experimentFullUpdateDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **experimentFullUpdateDto** | **ExperimentFullUpdateDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Fully Update Experiment Success |  -  |
|**400** | Name is already in use |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdPost_0**
> ConsoleV1ExperimentsIdPost200Response consoleV1ExperimentsIdPost_0(experimentFullUpdateDto)


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    ExperimentFullUpdateDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let experimentFullUpdateDto: ExperimentFullUpdateDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdPost_0(
    id,
    experimentFullUpdateDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **experimentFullUpdateDto** | **ExperimentFullUpdateDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Fully Update Experiment Success |  -  |
|**400** | Name is already in use |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdPulseLoadHistoryGet**
> ConsoleV1ExperimentsIdPulseLoadHistoryGet200Response consoleV1ExperimentsIdPulseLoadHistoryGet()


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    number,
    number
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let limit: number; //Results per page (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdPulseLoadHistoryGet(
    id,
    limit,
    page,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|
| **limit** | [**number**] | Results per page | (optional) defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdPulseLoadHistoryGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List Pulse Load History |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdPulseResultsGet**
> ConsoleV1ExperimentsIdPulseResultsGet200Response consoleV1ExperimentsIdPulseResultsGet()


### Example

```typescript
import {
    ExperimentsApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let control: string; //Control Group ID (default to undefined)
let test: string; //Test Group ID (default to undefined)
let cuped: string; //Whether to apply CUPED. Allowed values are \"true\" or \"false\". (optional) (default to undefined)
let confidence: string; //Confidence interval (0-100) (optional) (default to undefined)
let applyBonferroniPerVariant: string; //Whether to apply Bonferroni Per Variant. Allowed values are \"true\" or \"false\". (optional) (default to undefined)
let applyBonferroniPerMetric: string; //Whether to apply Bonferroni Per Metric. Allowed values are \"true\" or \"false\". (optional) (default to undefined)
let bonferroniPrimaryMetricWeight: string; //α allocated to primary metrics (optional) (default to undefined)
let applyBenjaminiHochbergPerMetric: string; //Whether to apply Benjamini-Hochberg Correction Per Metric. Allowed values are \"true\" or \"false\". (optional) (default to undefined)
let applyBenjaminiHochbergPerVariant: string; //Whether to apply Benjamini-Hochberg Correction Per Variant. Allowed values are \"true\" or \"false\". (optional) (default to undefined)
let date: string; //Date for pulse results. format must be YYYY-MM-DD (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdPulseResultsGet(
    id,
    control,
    test,
    cuped,
    confidence,
    applyBonferroniPerVariant,
    applyBonferroniPerMetric,
    bonferroniPrimaryMetricWeight,
    applyBenjaminiHochbergPerMetric,
    applyBenjaminiHochbergPerVariant,
    date,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|
| **control** | [**string**] | Control Group ID | defaults to undefined|
| **test** | [**string**] | Test Group ID | defaults to undefined|
| **cuped** | [**string**] | Whether to apply CUPED. Allowed values are \&quot;true\&quot; or \&quot;false\&quot;. | (optional) defaults to undefined|
| **confidence** | [**string**] | Confidence interval (0-100) | (optional) defaults to undefined|
| **applyBonferroniPerVariant** | [**string**] | Whether to apply Bonferroni Per Variant. Allowed values are \&quot;true\&quot; or \&quot;false\&quot;. | (optional) defaults to undefined|
| **applyBonferroniPerMetric** | [**string**] | Whether to apply Bonferroni Per Metric. Allowed values are \&quot;true\&quot; or \&quot;false\&quot;. | (optional) defaults to undefined|
| **bonferroniPrimaryMetricWeight** | [**string**] | α allocated to primary metrics | (optional) defaults to undefined|
| **applyBenjaminiHochbergPerMetric** | [**string**] | Whether to apply Benjamini-Hochberg Correction Per Metric. Allowed values are \&quot;true\&quot; or \&quot;false\&quot;. | (optional) defaults to undefined|
| **applyBenjaminiHochbergPerVariant** | [**string**] | Whether to apply Benjamini-Hochberg Correction Per Variant. Allowed values are \&quot;true\&quot; or \&quot;false\&quot;. | (optional) defaults to undefined|
| **date** | [**string**] | Date for pulse results. format must be YYYY-MM-DD | (optional) defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdPulseResultsGet200Response**

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

# **consoleV1ExperimentsIdPulseResultsGet_0**
> ConsoleV1ExperimentsIdPulseResultsGet200Response consoleV1ExperimentsIdPulseResultsGet_0()


### Example

```typescript
import {
    ExperimentsApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let control: string; //Control Group ID (default to undefined)
let test: string; //Test Group ID (default to undefined)
let cuped: string; //Whether to apply CUPED. Allowed values are \"true\" or \"false\". (optional) (default to undefined)
let confidence: string; //Confidence interval (0-100) (optional) (default to undefined)
let applyBonferroniPerVariant: string; //Whether to apply Bonferroni Per Variant. Allowed values are \"true\" or \"false\". (optional) (default to undefined)
let applyBonferroniPerMetric: string; //Whether to apply Bonferroni Per Metric. Allowed values are \"true\" or \"false\". (optional) (default to undefined)
let bonferroniPrimaryMetricWeight: string; //α allocated to primary metrics (optional) (default to undefined)
let applyBenjaminiHochbergPerMetric: string; //Whether to apply Benjamini-Hochberg Correction Per Metric. Allowed values are \"true\" or \"false\". (optional) (default to undefined)
let applyBenjaminiHochbergPerVariant: string; //Whether to apply Benjamini-Hochberg Correction Per Variant. Allowed values are \"true\" or \"false\". (optional) (default to undefined)
let date: string; //Date for pulse results. format must be YYYY-MM-DD (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdPulseResultsGet_0(
    id,
    control,
    test,
    cuped,
    confidence,
    applyBonferroniPerVariant,
    applyBonferroniPerMetric,
    bonferroniPrimaryMetricWeight,
    applyBenjaminiHochbergPerMetric,
    applyBenjaminiHochbergPerVariant,
    date,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|
| **control** | [**string**] | Control Group ID | defaults to undefined|
| **test** | [**string**] | Test Group ID | defaults to undefined|
| **cuped** | [**string**] | Whether to apply CUPED. Allowed values are \&quot;true\&quot; or \&quot;false\&quot;. | (optional) defaults to undefined|
| **confidence** | [**string**] | Confidence interval (0-100) | (optional) defaults to undefined|
| **applyBonferroniPerVariant** | [**string**] | Whether to apply Bonferroni Per Variant. Allowed values are \&quot;true\&quot; or \&quot;false\&quot;. | (optional) defaults to undefined|
| **applyBonferroniPerMetric** | [**string**] | Whether to apply Bonferroni Per Metric. Allowed values are \&quot;true\&quot; or \&quot;false\&quot;. | (optional) defaults to undefined|
| **bonferroniPrimaryMetricWeight** | [**string**] | α allocated to primary metrics | (optional) defaults to undefined|
| **applyBenjaminiHochbergPerMetric** | [**string**] | Whether to apply Benjamini-Hochberg Correction Per Metric. Allowed values are \&quot;true\&quot; or \&quot;false\&quot;. | (optional) defaults to undefined|
| **applyBenjaminiHochbergPerVariant** | [**string**] | Whether to apply Benjamini-Hochberg Correction Per Variant. Allowed values are \&quot;true\&quot; or \&quot;false\&quot;. | (optional) defaults to undefined|
| **date** | [**string**] | Date for pulse results. format must be YYYY-MM-DD | (optional) defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdPulseResultsGet200Response**

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

# **consoleV1ExperimentsIdResetPut**
> ConsoleV1ExperimentsIdResetPut200Response consoleV1ExperimentsIdResetPut()


### Example

```typescript
import {
    ExperimentsApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdResetPut(
    id,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdResetPut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Reset Experiment Success |  -  |
|**400** | Experiment has not yet started |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Experiment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdResetPut_0**
> ConsoleV1ExperimentsIdResetPut200Response consoleV1ExperimentsIdResetPut_0()


### Example

```typescript
import {
    ExperimentsApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdResetPut_0(
    id,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdResetPut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Reset Experiment Success |  -  |
|**400** | Experiment has not yet started |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Experiment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdRestartAsNewPost**
> ConsoleV1ExperimentsIdRestartAsNewPost200Response consoleV1ExperimentsIdRestartAsNewPost(experimentNameContractDto)


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    ExperimentNameContractDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let experimentNameContractDto: ExperimentNameContractDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdRestartAsNewPost(
    id,
    experimentNameContractDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **experimentNameContractDto** | **ExperimentNameContractDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdRestartAsNewPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Restart As New Experiment Success |  -  |
|**400** | Experiment has not yet started |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Experiment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdRestartAsNewPost_0**
> ConsoleV1ExperimentsIdRestartAsNewPost200Response consoleV1ExperimentsIdRestartAsNewPost_0(experimentNameContractDto)


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    ExperimentNameContractDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let experimentNameContractDto: ExperimentNameContractDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdRestartAsNewPost_0(
    id,
    experimentNameContractDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **experimentNameContractDto** | **ExperimentNameContractDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdRestartAsNewPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Restart As New Experiment Success |  -  |
|**400** | Experiment has not yet started |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Experiment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdReviewsReviewIDCommitPut**
> ConsoleV1ExperimentsIdReviewsReviewIDCommitPut200Response consoleV1ExperimentsIdReviewsReviewIDCommitPut()


### Example

```typescript
import {
    ExperimentsApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; // (default to undefined)
let reviewID: string; // (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdReviewsReviewIDCommitPut(
    id,
    reviewID,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **reviewID** | [**string**] |  | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdReviewsReviewIDCommitPut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Commit an approved experiment review |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdScheduleStartPost**
> ConsoleV1ExperimentsIdScheduleStartPost200Response consoleV1ExperimentsIdScheduleStartPost(scheduleExperimentStartParamDto)


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    ScheduleExperimentStartParamDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let scheduleExperimentStartParamDto: ScheduleExperimentStartParamDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdScheduleStartPost(
    id,
    scheduleExperimentStartParamDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **scheduleExperimentStartParamDto** | **ScheduleExperimentStartParamDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdScheduleStartPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Schedule Experiment Start Success |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Experiment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdScheduleStartPost_0**
> ConsoleV1ExperimentsIdScheduleStartPost200Response consoleV1ExperimentsIdScheduleStartPost_0(scheduleExperimentStartParamDto)


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    ScheduleExperimentStartParamDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let scheduleExperimentStartParamDto: ScheduleExperimentStartParamDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdScheduleStartPost_0(
    id,
    scheduleExperimentStartParamDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **scheduleExperimentStartParamDto** | **ScheduleExperimentStartParamDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdScheduleStartPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Schedule Experiment Start Success |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Experiment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdStartPut**
> ConsoleV1ExperimentsIdStartPut200Response consoleV1ExperimentsIdStartPut(experimentStartDto)


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    ExperimentStartDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let experimentStartDto: ExperimentStartDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdStartPut(
    id,
    experimentStartDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **experimentStartDto** | **ExperimentStartDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdStartPut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Start Experiment Success |  -  |
|**400** | Experiment has not yet started |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Experiment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdStartPut_0**
> ConsoleV1ExperimentsIdStartPut200Response consoleV1ExperimentsIdStartPut_0(experimentStartDto)


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    ExperimentStartDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let experimentStartDto: ExperimentStartDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdStartPut_0(
    id,
    experimentStartDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **experimentStartDto** | **ExperimentStartDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdStartPut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Start Experiment Success |  -  |
|**400** | Experiment has not yet started |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Experiment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdUnarchivePut**
> ConsoleV1ExperimentsIdUnarchivePut200Response consoleV1ExperimentsIdUnarchivePut()


### Example

```typescript
import {
    ExperimentsApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdUnarchivePut(
    id,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdUnarchivePut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Unarchive Experiment Success |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Experiment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdUnarchivePut_0**
> ConsoleV1ExperimentsIdUnarchivePut200Response consoleV1ExperimentsIdUnarchivePut_0()


### Example

```typescript
import {
    ExperimentsApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdUnarchivePut_0(
    id,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdUnarchivePut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Unarchive Experiment Success |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Experiment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdVersionsGet**
> ConsoleV1ExperimentsIdVersionsGet200Response consoleV1ExperimentsIdVersionsGet()


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    number,
    number
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let id: string; //id (default to undefined)
let limit: number; //Results per page (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdVersionsGet(
    id,
    limit,
    page,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|
| **limit** | [**number**] | Results per page | (optional) defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdVersionsGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List Experiment Versions Success |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsPost**
> ConsoleV1ExperimentsPost201Response consoleV1ExperimentsPost(experimentCreateDto)


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    ExperimentCreateDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let experimentCreateDto: ExperimentCreateDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsPost(
    experimentCreateDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **experimentCreateDto** | **ExperimentCreateDto**|  | |
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsPost201Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Create Experiment Success |  -  |
|**400** | Name is already in use |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsPost_0**
> ConsoleV1ExperimentsPost201Response consoleV1ExperimentsPost_0(experimentCreateDto)


### Example

```typescript
import {
    ExperimentsApi,
    Configuration,
    ExperimentCreateDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ExperimentsApi(configuration);

let experimentCreateDto: ExperimentCreateDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsPost_0(
    experimentCreateDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **experimentCreateDto** | **ExperimentCreateDto**|  | |
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsPost201Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Create Experiment Success |  -  |
|**400** | Name is already in use |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

