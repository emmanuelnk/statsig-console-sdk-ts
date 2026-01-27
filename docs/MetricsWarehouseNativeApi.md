# MetricsWarehouseNativeApi

All URIs are relative to *https://statsigapi.net*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**consoleV1MetricsIdReloadPost**](#consolev1metricsidreloadpost) | **POST** /console/v1/metrics/{id}/reload | Reload metric data|
|[**consoleV1MetricsMetricSourceListGet**](#consolev1metricsmetricsourcelistget) | **GET** /console/v1/metrics/metric_source/list | List metric source|
|[**consoleV1MetricsMetricSourceNameDelete**](#consolev1metricsmetricsourcenamedelete) | **DELETE** /console/v1/metrics/metric_source/{name} | Delete Metric Source|
|[**consoleV1MetricsMetricSourceNameGet**](#consolev1metricsmetricsourcenameget) | **GET** /console/v1/metrics/metric_source/{name} | Read Metric Source|
|[**consoleV1MetricsMetricSourceNameMetricsGet**](#consolev1metricsmetricsourcenamemetricsget) | **GET** /console/v1/metrics/metric_source/{name}/metrics | Read Metric Source Metrics|
|[**consoleV1MetricsMetricSourceNamePost**](#consolev1metricsmetricsourcenamepost) | **POST** /console/v1/metrics/metric_source/{name} | Update Metric Source|
|[**consoleV1MetricsMetricSourcePost**](#consolev1metricsmetricsourcepost) | **POST** /console/v1/metrics/metric_source | Create Metric Source|

# **consoleV1MetricsIdReloadPost**
> ConsoleV1MetricsIdReloadPost200Response consoleV1MetricsIdReloadPost()


### Example

```typescript
import {
    MetricsWarehouseNativeApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new MetricsWarehouseNativeApi(configuration);

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

# **consoleV1MetricsMetricSourceListGet**
> ConsoleV1MetricsMetricSourceListGet200Response consoleV1MetricsMetricSourceListGet()


### Example

```typescript
import {
    MetricsWarehouseNativeApi,
    Configuration,
    number,
    number
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new MetricsWarehouseNativeApi(configuration);

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

**ConsoleV1MetricsMetricSourceListGet200Response**

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
    MetricsWarehouseNativeApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new MetricsWarehouseNativeApi(configuration);

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
    MetricsWarehouseNativeApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new MetricsWarehouseNativeApi(configuration);

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
> ConsoleV1MetricsMetricSourceNameMetricsGet200Response consoleV1MetricsMetricSourceNameMetricsGet()


### Example

```typescript
import {
    MetricsWarehouseNativeApi,
    Configuration,
    number,
    number
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new MetricsWarehouseNativeApi(configuration);

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

**ConsoleV1MetricsMetricSourceNameMetricsGet200Response**

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
    MetricsWarehouseNativeApi,
    Configuration,
    MetricSourceUpdateContractDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new MetricsWarehouseNativeApi(configuration);

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
    MetricsWarehouseNativeApi,
    Configuration,
    MetricSourceCreationContractDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new MetricsWarehouseNativeApi(configuration);

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

