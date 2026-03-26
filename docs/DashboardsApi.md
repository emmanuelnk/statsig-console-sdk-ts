# DashboardsApi

All URIs are relative to *https://statsigapi.net*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**consoleV1DashboardsGet**](#consolev1dashboardsget) | **GET** /console/v1/dashboards | List Dashboards|
|[**consoleV1DashboardsIdGet**](#consolev1dashboardsidget) | **GET** /console/v1/dashboards/{id} | Read Dashboard|
|[**consoleV1DashboardsIdWidgetsPost**](#consolev1dashboardsidwidgetspost) | **POST** /console/v1/dashboards/{id}/widgets | Add Widgets to Dashboard|
|[**consoleV1DashboardsIdWidgetsPut**](#consolev1dashboardsidwidgetsput) | **PUT** /console/v1/dashboards/{id}/widgets | Replace Widgets on Dashboard|
|[**consoleV1DashboardsIdWidgetsWidgetIdResultsGet**](#consolev1dashboardsidwidgetswidgetidresultsget) | **GET** /console/v1/dashboards/{id}/widgets/{widgetId}/results | Read Dashboard Widget Results|
|[**consoleV1DashboardsPost**](#consolev1dashboardspost) | **POST** /console/v1/dashboards | Create Dashboard|

# **consoleV1DashboardsGet**
> Getconsolev1dashboardsResponse consoleV1DashboardsGet()


### Example

```typescript
import {
    DashboardsApi,
    Configuration,
    number,
    number
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new DashboardsApi(configuration);

let limit: number; //Results per page (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)
let search: string; //Filter dashboards by name using a partial match. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1DashboardsGet(
    limit,
    page,
    search
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Results per page | (optional) defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to undefined|
| **search** | [**string**] | Filter dashboards by name using a partial match. | (optional) defaults to undefined|


### Return type

**Getconsolev1dashboardsResponse**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List dashboards response |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1DashboardsIdGet**
> ConsoleV1DashboardsIdGet200Response consoleV1DashboardsIdGet()


### Example

```typescript
import {
    DashboardsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new DashboardsApi(configuration);

let id: string; //id (default to undefined)

const { status, data } = await apiInstance.consoleV1DashboardsIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|


### Return type

**ConsoleV1DashboardsIdGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Read dashboard response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1DashboardsIdWidgetsPost**
> ConsoleV1DashboardsIdWidgetsPost200Response consoleV1DashboardsIdWidgetsPost(addDashboardWidgetsDto)


### Example

```typescript
import {
    DashboardsApi,
    Configuration,
    AddDashboardWidgetsDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new DashboardsApi(configuration);

let id: string; //id (default to undefined)
let addDashboardWidgetsDto: AddDashboardWidgetsDto; //

const { status, data } = await apiInstance.consoleV1DashboardsIdWidgetsPost(
    id,
    addDashboardWidgetsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addDashboardWidgetsDto** | **AddDashboardWidgetsDto**|  | |
| **id** | [**string**] | id | defaults to undefined|


### Return type

**ConsoleV1DashboardsIdWidgetsPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Add dashboard widgets response |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1DashboardsIdWidgetsPut**
> ConsoleV1DashboardsIdWidgetsPut200Response consoleV1DashboardsIdWidgetsPut(replaceDashboardWidgetsDto)


### Example

```typescript
import {
    DashboardsApi,
    Configuration,
    ReplaceDashboardWidgetsDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new DashboardsApi(configuration);

let id: string; //id (default to undefined)
let replaceDashboardWidgetsDto: ReplaceDashboardWidgetsDto; //

const { status, data } = await apiInstance.consoleV1DashboardsIdWidgetsPut(
    id,
    replaceDashboardWidgetsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **replaceDashboardWidgetsDto** | **ReplaceDashboardWidgetsDto**|  | |
| **id** | [**string**] | id | defaults to undefined|


### Return type

**ConsoleV1DashboardsIdWidgetsPut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Replace dashboard widgets response |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1DashboardsIdWidgetsWidgetIdResultsGet**
> ConsoleV1DashboardsIdWidgetsWidgetIdResultsGet200Response consoleV1DashboardsIdWidgetsWidgetIdResultsGet()


### Example

```typescript
import {
    DashboardsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new DashboardsApi(configuration);

let id: string; //dashboard id (default to undefined)
let widgetId: string; //widget id (default to undefined)
let samplingEnabled: boolean; //Whether funnel sampling should be enabled for this results query. Defaults to true. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1DashboardsIdWidgetsWidgetIdResultsGet(
    id,
    widgetId,
    samplingEnabled
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | dashboard id | defaults to undefined|
| **widgetId** | [**string**] | widget id | defaults to undefined|
| **samplingEnabled** | [**boolean**] | Whether funnel sampling should be enabled for this results query. Defaults to true. | (optional) defaults to undefined|


### Return type

**ConsoleV1DashboardsIdWidgetsWidgetIdResultsGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Read dashboard widget results response. Currently only supported for funnel widgets. |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1DashboardsPost**
> ConsoleV1DashboardsPost200Response consoleV1DashboardsPost(createDashboardDto)


### Example

```typescript
import {
    DashboardsApi,
    Configuration,
    CreateDashboardDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new DashboardsApi(configuration);

let createDashboardDto: CreateDashboardDto; //

const { status, data } = await apiInstance.consoleV1DashboardsPost(
    createDashboardDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createDashboardDto** | **CreateDashboardDto**|  | |


### Return type

**ConsoleV1DashboardsPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Create dashboard response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

