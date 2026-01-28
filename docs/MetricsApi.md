# MetricsApi

All URIs are relative to *https://statsigapi.net*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**consoleV1MetricsGet**](#consolev1metricsget) | **GET** /console/v1/metrics | Read Single Metric Value|
|[**consoleV1MetricsGet_0**](#consolev1metricsget_0) | **GET** /console/v1/metrics | Read Single Metric Value|
|[**consoleV1MetricsIdCancelArchivePut**](#consolev1metricsidcancelarchiveput) | **PUT** /console/v1/metrics/{id}/cancel_archive | Cancel archive a metric|
|[**consoleV1MetricsIdCancelArchivePut_0**](#consolev1metricsidcancelarchiveput_0) | **PUT** /console/v1/metrics/{id}/cancel_archive | Cancel archive a metric|
|[**consoleV1MetricsIdDelete**](#consolev1metricsiddelete) | **DELETE** /console/v1/metrics/{id} | Delete a metric|
|[**consoleV1MetricsIdDelete_0**](#consolev1metricsiddelete_0) | **DELETE** /console/v1/metrics/{id} | Delete a metric|
|[**consoleV1MetricsIdExperimentsGet**](#consolev1metricsidexperimentsget) | **GET** /console/v1/metrics/{id}/experiments | Lineage: List experiments related to Metric|
|[**consoleV1MetricsIdExperimentsGet_0**](#consolev1metricsidexperimentsget_0) | **GET** /console/v1/metrics/{id}/experiments | Lineage: List experiments related to Metric|
|[**consoleV1MetricsIdGet**](#consolev1metricsidget) | **GET** /console/v1/metrics/{id} | Read Metric Definition|
|[**consoleV1MetricsIdGet_0**](#consolev1metricsidget_0) | **GET** /console/v1/metrics/{id} | Read Metric Definition|
|[**consoleV1MetricsIdPost**](#consolev1metricsidpost) | **POST** /console/v1/metrics/{id} | Update a metric|
|[**consoleV1MetricsIdPost_0**](#consolev1metricsidpost_0) | **POST** /console/v1/metrics/{id} | Update a metric|
|[**consoleV1MetricsIdReloadPost**](#consolev1metricsidreloadpost) | **POST** /console/v1/metrics/{id}/reload | Reload metric data|
|[**consoleV1MetricsIdScheduleArchivePut**](#consolev1metricsidschedulearchiveput) | **PUT** /console/v1/metrics/{id}/schedule_archive | Schedule a metric archive|
|[**consoleV1MetricsIdScheduleArchivePut_0**](#consolev1metricsidschedulearchiveput_0) | **PUT** /console/v1/metrics/{id}/schedule_archive | Schedule a metric archive|
|[**consoleV1MetricsIdSqlGet**](#consolev1metricsidsqlget) | **GET** /console/v1/metrics/{id}/sql | Get SQL for a metric|
|[**consoleV1MetricsIdSqlGet_0**](#consolev1metricsidsqlget_0) | **GET** /console/v1/metrics/{id}/sql | Get SQL for a metric|
|[**consoleV1MetricsIdUnarchivePut**](#consolev1metricsidunarchiveput) | **PUT** /console/v1/metrics/{id}/unarchive | Unarchive a metric|
|[**consoleV1MetricsIdUnarchivePut_0**](#consolev1metricsidunarchiveput_0) | **PUT** /console/v1/metrics/{id}/unarchive | Unarchive a metric|
|[**consoleV1MetricsListGet**](#consolev1metricslistget) | **GET** /console/v1/metrics/list | List all Metrics|
|[**consoleV1MetricsListGet_0**](#consolev1metricslistget_0) | **GET** /console/v1/metrics/list | List all Metrics|
|[**consoleV1MetricsMetricSourceListGet**](#consolev1metricsmetricsourcelistget) | **GET** /console/v1/metrics/metric_source/list | List metric source|
|[**consoleV1MetricsMetricSourceNameDelete**](#consolev1metricsmetricsourcenamedelete) | **DELETE** /console/v1/metrics/metric_source/{name} | Delete Metric Source|
|[**consoleV1MetricsMetricSourceNameGet**](#consolev1metricsmetricsourcenameget) | **GET** /console/v1/metrics/metric_source/{name} | Read Metric Source|
|[**consoleV1MetricsMetricSourceNameMetricsGet**](#consolev1metricsmetricsourcenamemetricsget) | **GET** /console/v1/metrics/metric_source/{name}/metrics | Read Metric Source Metrics|
|[**consoleV1MetricsMetricSourceNamePost**](#consolev1metricsmetricsourcenamepost) | **POST** /console/v1/metrics/metric_source/{name} | Update Metric Source|
|[**consoleV1MetricsMetricSourcePost**](#consolev1metricsmetricsourcepost) | **POST** /console/v1/metrics/metric_source | Create Metric Source|
|[**consoleV1MetricsNameTypeGet**](#consolev1metricsnametypeget) | **GET** /console/v1/metrics/{name}/{type} | Read Metric Definition by Name|
|[**consoleV1MetricsNameTypeGet_0**](#consolev1metricsnametypeget_0) | **GET** /console/v1/metrics/{name}/{type} | Read Metric Definition by Name|
|[**consoleV1MetricsPost**](#consolev1metricspost) | **POST** /console/v1/metrics | Create Metric|
|[**consoleV1MetricsPost_0**](#consolev1metricspost_0) | **POST** /console/v1/metrics | Create Metric|
|[**consoleV1MetricsValuesGet**](#consolev1metricsvaluesget) | **GET** /console/v1/metrics/values | List All Metric Values|

# **consoleV1MetricsGet**
> Getconsolev1metricsResponse consoleV1MetricsGet()


### Example

```typescript
import {
    MetricsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let id: string; //The unique identifier of the metric with format <metric_id>::<type> (default to undefined)
let date: string; //Expected valid date in the form of YYYY-MM-DD (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1MetricsGet(
    id,
    date,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The unique identifier of the metric with format &lt;metric_id&gt;::&lt;type&gt; | defaults to undefined|
| **date** | [**string**] | Expected valid date in the form of YYYY-MM-DD | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**Getconsolev1metricsResponse**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get metric data on given date response |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1MetricsGet_0**
> Getconsolev1metricsResponse consoleV1MetricsGet_0()


### Example

```typescript
import {
    MetricsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let id: string; //The unique identifier of the metric with format <metric_id>::<type> (default to undefined)
let date: string; //Expected valid date in the form of YYYY-MM-DD (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1MetricsGet_0(
    id,
    date,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The unique identifier of the metric with format &lt;metric_id&gt;::&lt;type&gt; | defaults to undefined|
| **date** | [**string**] | Expected valid date in the form of YYYY-MM-DD | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**Getconsolev1metricsResponse**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get metric data on given date response |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1MetricsIdCancelArchivePut**
> ConsoleV1MetricsIdCancelArchivePut200Response consoleV1MetricsIdCancelArchivePut()


### Example

```typescript
import {
    MetricsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1MetricsIdCancelArchivePut(
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

**ConsoleV1MetricsIdCancelArchivePut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Cancel archive metric response |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1MetricsIdCancelArchivePut_0**
> ConsoleV1MetricsIdCancelArchivePut200Response consoleV1MetricsIdCancelArchivePut_0()


### Example

```typescript
import {
    MetricsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1MetricsIdCancelArchivePut_0(
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

**ConsoleV1MetricsIdCancelArchivePut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Cancel archive metric response |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1MetricsIdDelete**
> ConsoleV1MetricsIdDelete200Response consoleV1MetricsIdDelete()


### Example

```typescript
import {
    MetricsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1MetricsIdDelete(
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

**ConsoleV1MetricsIdDelete200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Delete metric response |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1MetricsIdDelete_0**
> ConsoleV1MetricsIdDelete200Response consoleV1MetricsIdDelete_0()


### Example

```typescript
import {
    MetricsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1MetricsIdDelete_0(
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

**ConsoleV1MetricsIdDelete200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Delete metric response |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1MetricsIdExperimentsGet**
> Getconsolev1metricsidexperimentsResponse consoleV1MetricsIdExperimentsGet()


### Example

```typescript
import {
    MetricsApi,
    Configuration,
    ConsoleV1ExperimentsGetStatusParameter,
    ConsoleV1ExperimentsGetExperimentTypeParameter,
    ConsoleV1AuditLogsGetTagsParameter,
    number,
    number
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let id: string; //id (default to undefined)
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

const { status, data } = await apiInstance.consoleV1MetricsIdExperimentsGet(
    id,
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
| **id** | [**string**] | id | defaults to undefined|
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

**Getconsolev1metricsidexperimentsResponse**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List experiments using metric response |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1MetricsIdExperimentsGet_0**
> Getconsolev1metricsidexperimentsResponse consoleV1MetricsIdExperimentsGet_0()


### Example

```typescript
import {
    MetricsApi,
    Configuration,
    ConsoleV1ExperimentsGetStatusParameter,
    ConsoleV1ExperimentsGetExperimentTypeParameter,
    ConsoleV1AuditLogsGetTagsParameter,
    number,
    number
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let id: string; //id (default to undefined)
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

const { status, data } = await apiInstance.consoleV1MetricsIdExperimentsGet_0(
    id,
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
| **id** | [**string**] | id | defaults to undefined|
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

**Getconsolev1metricsidexperimentsResponse**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List experiments using metric response |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1MetricsIdGet**
> ConsoleV1MetricsIdGet200Response consoleV1MetricsIdGet()


### Example

```typescript
import {
    MetricsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1MetricsIdGet(
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

**ConsoleV1MetricsIdGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get Metric Definition response |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1MetricsIdGet_0**
> ConsoleV1MetricsIdGet200Response consoleV1MetricsIdGet_0()


### Example

```typescript
import {
    MetricsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1MetricsIdGet_0(
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

**ConsoleV1MetricsIdGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get Metric Definition response |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1MetricsIdPost**
> ConsoleV1MetricsIdPost200Response consoleV1MetricsIdPost(metricsUpdateContractDto)


### Example

```typescript
import {
    MetricsApi,
    Configuration,
    MetricsUpdateContractDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let id: string; //id (default to undefined)
let metricsUpdateContractDto: MetricsUpdateContractDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1MetricsIdPost(
    id,
    metricsUpdateContractDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **metricsUpdateContractDto** | **MetricsUpdateContractDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1MetricsIdPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Update metric response |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1MetricsIdPost_0**
> ConsoleV1MetricsIdPost200Response consoleV1MetricsIdPost_0(metricsUpdateContractDto)


### Example

```typescript
import {
    MetricsApi,
    Configuration,
    MetricsUpdateContractDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let id: string; //id (default to undefined)
let metricsUpdateContractDto: MetricsUpdateContractDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1MetricsIdPost_0(
    id,
    metricsUpdateContractDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **metricsUpdateContractDto** | **MetricsUpdateContractDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1MetricsIdPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Update metric response |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1MetricsIdReloadPost**
> ConsoleV1MetricsIdReloadPost200Response consoleV1MetricsIdReloadPost()


### Example

```typescript
import {
    MetricsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let id: string; //id (default to undefined)
let incremental: 'true' | 'false'; //Incremental reload of the metric (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1MetricsIdReloadPost(
    id,
    incremental,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|
| **incremental** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | Incremental reload of the metric | (optional) defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1MetricsIdReloadPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Reload metric data response |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1MetricsIdScheduleArchivePut**
> ConsoleV1MetricsIdScheduleArchivePut200Response consoleV1MetricsIdScheduleArchivePut()


### Example

```typescript
import {
    MetricsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1MetricsIdScheduleArchivePut(
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

**ConsoleV1MetricsIdScheduleArchivePut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Schedule a metric archive |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1MetricsIdScheduleArchivePut_0**
> ConsoleV1MetricsIdScheduleArchivePut200Response consoleV1MetricsIdScheduleArchivePut_0()


### Example

```typescript
import {
    MetricsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1MetricsIdScheduleArchivePut_0(
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

**ConsoleV1MetricsIdScheduleArchivePut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Schedule a metric archive |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1MetricsIdSqlGet**
> ConsoleV1MetricsIdSqlGet200Response consoleV1MetricsIdSqlGet()


### Example

```typescript
import {
    MetricsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1MetricsIdSqlGet(
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

**ConsoleV1MetricsIdSqlGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get SQL for a metric |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1MetricsIdSqlGet_0**
> ConsoleV1MetricsIdSqlGet200Response consoleV1MetricsIdSqlGet_0()


### Example

```typescript
import {
    MetricsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1MetricsIdSqlGet_0(
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

**ConsoleV1MetricsIdSqlGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get SQL for a metric |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1MetricsIdUnarchivePut**
> ConsoleV1MetricsIdUnarchivePut200Response consoleV1MetricsIdUnarchivePut()


### Example

```typescript
import {
    MetricsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1MetricsIdUnarchivePut(
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

**ConsoleV1MetricsIdUnarchivePut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Unarchive metric response |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1MetricsIdUnarchivePut_0**
> ConsoleV1MetricsIdUnarchivePut200Response consoleV1MetricsIdUnarchivePut_0()


### Example

```typescript
import {
    MetricsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1MetricsIdUnarchivePut_0(
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

**ConsoleV1MetricsIdUnarchivePut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Unarchive metric response |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1MetricsListGet**
> Getconsolev1metricslistResponse consoleV1MetricsListGet()


### Example

```typescript
import {
    MetricsApi,
    Configuration,
    ConsoleV1AuditLogsGetTagsParameter,
    number,
    number
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let showHiddenMetrics: 'true' | 'false'; //Should hidden metrics be returned: Allowed values are \"true\" or \"false\". (optional) (default to undefined)
let tags: ConsoleV1AuditLogsGetTagsParameter; //Filter metrics based on a given tagID, found on /tags endpoint. Can be a single string or an array of strings. (optional) (default to undefined)
let filters: string; //Additional filters for metrics. Can be a string or an object with tags filter. (optional) (default to undefined)
let limit: number; //Results per page (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1MetricsListGet(
    showHiddenMetrics,
    tags,
    filters,
    limit,
    page,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **showHiddenMetrics** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | Should hidden metrics be returned: Allowed values are \&quot;true\&quot; or \&quot;false\&quot;. | (optional) defaults to undefined|
| **tags** | **ConsoleV1AuditLogsGetTagsParameter** | Filter metrics based on a given tagID, found on /tags endpoint. Can be a single string or an array of strings. | (optional) defaults to undefined|
| **filters** | [**string**] | Additional filters for metrics. Can be a string or an object with tags filter. | (optional) defaults to undefined|
| **limit** | [**number**] | Results per page | (optional) defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**Getconsolev1metricslistResponse**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List all metrics in the project response |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1MetricsListGet_0**
> Getconsolev1metricslistResponse consoleV1MetricsListGet_0()


### Example

```typescript
import {
    MetricsApi,
    Configuration,
    ConsoleV1AuditLogsGetTagsParameter,
    number,
    number
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let showHiddenMetrics: 'true' | 'false'; //Should hidden metrics be returned: Allowed values are \"true\" or \"false\". (optional) (default to undefined)
let tags: ConsoleV1AuditLogsGetTagsParameter; //Filter metrics based on a given tagID, found on /tags endpoint. Can be a single string or an array of strings. (optional) (default to undefined)
let filters: string; //Additional filters for metrics. Can be a string or an object with tags filter. (optional) (default to undefined)
let limit: number; //Results per page (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1MetricsListGet_0(
    showHiddenMetrics,
    tags,
    filters,
    limit,
    page,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **showHiddenMetrics** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | Should hidden metrics be returned: Allowed values are \&quot;true\&quot; or \&quot;false\&quot;. | (optional) defaults to undefined|
| **tags** | **ConsoleV1AuditLogsGetTagsParameter** | Filter metrics based on a given tagID, found on /tags endpoint. Can be a single string or an array of strings. | (optional) defaults to undefined|
| **filters** | [**string**] | Additional filters for metrics. Can be a string or an object with tags filter. | (optional) defaults to undefined|
| **limit** | [**number**] | Results per page | (optional) defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**Getconsolev1metricslistResponse**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List all metrics in the project response |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1MetricsMetricSourceListGet**
> Getconsolev1metricsmetricsourcelistResponse consoleV1MetricsMetricSourceListGet()


### Example

```typescript
import {
    MetricsApi,
    Configuration,
    number,
    number
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let limit: number; //Results per page (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1MetricsMetricSourceListGet(
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

**Getconsolev1metricsmetricsourcelistResponse**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List metric source response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1MetricsMetricSourceNameDelete**
> ConsoleV1MetricsMetricSourceNameDelete200Response consoleV1MetricsMetricSourceNameDelete()


### Example

```typescript
import {
    MetricsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let name: string; //name (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1MetricsMetricSourceNameDelete(
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

**ConsoleV1MetricsMetricSourceNameDelete200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Delete metric source response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1MetricsMetricSourceNameGet**
> ConsoleV1MetricsMetricSourceNameGet200Response consoleV1MetricsMetricSourceNameGet()


### Example

```typescript
import {
    MetricsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let name: string; //name (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1MetricsMetricSourceNameGet(
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

**ConsoleV1MetricsMetricSourceNameGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Read metric source response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1MetricsMetricSourceNameMetricsGet**
> Getconsolev1metricsmetricsourcenamemetricsResponse consoleV1MetricsMetricSourceNameMetricsGet()


### Example

```typescript
import {
    MetricsApi,
    Configuration,
    number,
    number
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let name: string; //name (default to undefined)
let limit: number; //Results per page (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1MetricsMetricSourceNameMetricsGet(
    name,
    limit,
    page,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | name | defaults to undefined|
| **limit** | [**number**] | Results per page | (optional) defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**Getconsolev1metricsmetricsourcenamemetricsResponse**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Read metric source metrics response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1MetricsMetricSourceNamePost**
> ConsoleV1MetricsMetricSourceNamePost200Response consoleV1MetricsMetricSourceNamePost(metricSourceUpdateContractDto)


### Example

```typescript
import {
    MetricsApi,
    Configuration,
    MetricSourceUpdateContractDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let name: string; //name (default to undefined)
let metricSourceUpdateContractDto: MetricSourceUpdateContractDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1MetricsMetricSourceNamePost(
    name,
    metricSourceUpdateContractDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **metricSourceUpdateContractDto** | **MetricSourceUpdateContractDto**|  | |
| **name** | [**string**] | name | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1MetricsMetricSourceNamePost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Update metric source response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1MetricsMetricSourcePost**
> ConsoleV1MetricsMetricSourcePost201Response consoleV1MetricsMetricSourcePost(metricSourceCreationContractDto)


### Example

```typescript
import {
    MetricsApi,
    Configuration,
    MetricSourceCreationContractDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let metricSourceCreationContractDto: MetricSourceCreationContractDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1MetricsMetricSourcePost(
    metricSourceCreationContractDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **metricSourceCreationContractDto** | **MetricSourceCreationContractDto**|  | |
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1MetricsMetricSourcePost201Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Create metric source response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1MetricsNameTypeGet**
> ConsoleV1MetricsIdGet200Response consoleV1MetricsNameTypeGet()


### Example

```typescript
import {
    MetricsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let name: string; //name (default to undefined)
let type: string; //type (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1MetricsNameTypeGet(
    name,
    type,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | name | defaults to undefined|
| **type** | [**string**] | type | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1MetricsIdGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get Metric Definition by name response |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1MetricsNameTypeGet_0**
> ConsoleV1MetricsIdGet200Response consoleV1MetricsNameTypeGet_0()


### Example

```typescript
import {
    MetricsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let name: string; //name (default to undefined)
let type: string; //type (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1MetricsNameTypeGet_0(
    name,
    type,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | name | defaults to undefined|
| **type** | [**string**] | type | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1MetricsIdGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get Metric Definition by name response |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1MetricsPost**
> ConsoleV1MetricsPost201Response consoleV1MetricsPost(metricCreationContractDto)


### Example

```typescript
import {
    MetricsApi,
    Configuration,
    MetricCreationContractDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let metricCreationContractDto: MetricCreationContractDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1MetricsPost(
    metricCreationContractDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **metricCreationContractDto** | **MetricCreationContractDto**|  | |
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1MetricsPost201Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Create metric response |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1MetricsPost_0**
> ConsoleV1MetricsPost201Response consoleV1MetricsPost_0(metricCreationContractDto)


### Example

```typescript
import {
    MetricsApi,
    Configuration,
    MetricCreationContractDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let metricCreationContractDto: MetricCreationContractDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1MetricsPost_0(
    metricCreationContractDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **metricCreationContractDto** | **MetricCreationContractDto**|  | |
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1MetricsPost201Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Create metric response |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1MetricsValuesGet**
> Getconsolev1metricsvaluesResponse consoleV1MetricsValuesGet()

List all metric values

### Example

```typescript
import {
    MetricsApi,
    Configuration,
    number,
    number
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new MetricsApi(configuration);

let date: string; //Expected valid date in the form of YYYY-MM-DD (default to undefined)
let metricName: string; // (optional) (default to undefined)
let metricType: string; // (optional) (default to undefined)
let limit: number; //Results per page (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1MetricsValuesGet(
    date,
    metricName,
    metricType,
    limit,
    page,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **date** | [**string**] | Expected valid date in the form of YYYY-MM-DD | defaults to undefined|
| **metricName** | [**string**] |  | (optional) defaults to undefined|
| **metricType** | [**string**] |  | (optional) defaults to undefined|
| **limit** | [**number**] | Results per page | (optional) defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**Getconsolev1metricsvaluesResponse**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List All Metric Values Response |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

