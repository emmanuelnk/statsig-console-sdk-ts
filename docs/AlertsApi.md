# AlertsApi

All URIs are relative to *https://statsigapi.net*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**consoleV1AlertsGet**](#consolev1alertsget) | **GET** /console/v1/alerts | List Topline Alerts|
|[**consoleV1AlertsIdEventsEventIdGet**](#consolev1alertsideventseventidget) | **GET** /console/v1/alerts/{id}/events/{eventId} | Read Topline Alert Event|
|[**consoleV1AlertsIdEventsGet**](#consolev1alertsideventsget) | **GET** /console/v1/alerts/{id}/events | List Topline Alert Events|
|[**consoleV1AlertsIdGet**](#consolev1alertsidget) | **GET** /console/v1/alerts/{id} | Read Topline Alert|

# **consoleV1AlertsGet**
> Getconsolev1alertsResponse consoleV1AlertsGet()


### Example

```typescript
import {
    AlertsApi,
    Configuration,
    number,
    number
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new AlertsApi(configuration);

let limit: number; //Results per page (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1AlertsGet(
    limit,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Results per page | (optional) defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to undefined|


### Return type

**Getconsolev1alertsResponse**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List Alerts success response |  -  |
|**403** | Forbidden resource |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1AlertsIdEventsEventIdGet**
> ConsoleV1AlertsIdEventsEventIdGet200Response consoleV1AlertsIdEventsEventIdGet()


### Example

```typescript
import {
    AlertsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new AlertsApi(configuration);

let id: string; //id (default to undefined)
let eventId: string; //alert event id (default to undefined)

const { status, data } = await apiInstance.consoleV1AlertsIdEventsEventIdGet(
    id,
    eventId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|
| **eventId** | [**string**] | alert event id | defaults to undefined|


### Return type

**ConsoleV1AlertsIdEventsEventIdGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Read Alert Event success response |  -  |
|**403** | Forbidden resource |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1AlertsIdEventsGet**
> Getconsolev1alertsideventsResponse consoleV1AlertsIdEventsGet()


### Example

```typescript
import {
    AlertsApi,
    Configuration,
    number,
    number
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new AlertsApi(configuration);

let id: string; //id (default to undefined)
let limit: number; //Results per page (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1AlertsIdEventsGet(
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

**Getconsolev1alertsideventsResponse**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List Alert Events success response |  -  |
|**403** | Forbidden resource |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1AlertsIdGet**
> ConsoleV1AlertsIdGet200Response consoleV1AlertsIdGet()


### Example

```typescript
import {
    AlertsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new AlertsApi(configuration);

let id: string; //id (default to undefined)

const { status, data } = await apiInstance.consoleV1AlertsIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|


### Return type

**ConsoleV1AlertsIdGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Read Alert success response |  -  |
|**403** | Forbidden resource |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

