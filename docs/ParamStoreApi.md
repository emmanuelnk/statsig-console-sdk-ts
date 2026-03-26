# ParamStoreApi

All URIs are relative to *https://statsigapi.net*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**consoleV1ParamStoresGet**](#consolev1paramstoresget) | **GET** /console/v1/param_stores | List Param Stores|
|[**consoleV1ParamStoresNameDelete**](#consolev1paramstoresnamedelete) | **DELETE** /console/v1/param_stores/{name} | Delete Param Store|
|[**consoleV1ParamStoresNameGet**](#consolev1paramstoresnameget) | **GET** /console/v1/param_stores/{name} | Get Param Store|
|[**consoleV1ParamStoresNamePost**](#consolev1paramstoresnamepost) | **POST** /console/v1/param_stores/{name} | Update Param Store|
|[**consoleV1ParamStoresPost**](#consolev1paramstorespost) | **POST** /console/v1/param_stores | Create Param Store|

# **consoleV1ParamStoresGet**
> Getconsolev1paramstoresResponse consoleV1ParamStoresGet()


### Example

```typescript
import {
    ParamStoreApi,
    Configuration,
    number,
    number
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new ParamStoreApi(configuration);

let limit: number; //Results per page (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ParamStoresGet(
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

**Getconsolev1paramstoresResponse**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List param stores |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ParamStoresNameDelete**
> ConsoleV1ParamStoresNameDelete200Response consoleV1ParamStoresNameDelete()


### Example

```typescript
import {
    ParamStoreApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new ParamStoreApi(configuration);

let name: string; // (default to undefined)

const { status, data } = await apiInstance.consoleV1ParamStoresNameDelete(
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] |  | defaults to undefined|


### Return type

**ConsoleV1ParamStoresNameDelete200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Delete param store |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Param Store not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ParamStoresNameGet**
> ConsoleV1ParamStoresPost200Response consoleV1ParamStoresNameGet()


### Example

```typescript
import {
    ParamStoreApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new ParamStoreApi(configuration);

let name: string; // (default to undefined)

const { status, data } = await apiInstance.consoleV1ParamStoresNameGet(
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] |  | defaults to undefined|


### Return type

**ConsoleV1ParamStoresPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get param store |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ParamStoresNamePost**
> ConsoleV1ParamStoresPost200Response consoleV1ParamStoresNamePost(paramStoreUpdateDto)


### Example

```typescript
import {
    ParamStoreApi,
    Configuration,
    ParamStoreUpdateDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new ParamStoreApi(configuration);

let name: string; // (default to undefined)
let paramStoreUpdateDto: ParamStoreUpdateDto; //

const { status, data } = await apiInstance.consoleV1ParamStoresNamePost(
    name,
    paramStoreUpdateDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paramStoreUpdateDto** | **ParamStoreUpdateDto**|  | |
| **name** | [**string**] |  | defaults to undefined|


### Return type

**ConsoleV1ParamStoresPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Update param store |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ParamStoresPost**
> ConsoleV1ParamStoresPost200Response consoleV1ParamStoresPost(paramStoreCreateDto)


### Example

```typescript
import {
    ParamStoreApi,
    Configuration,
    ParamStoreCreateDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new ParamStoreApi(configuration);

let paramStoreCreateDto: ParamStoreCreateDto; //

const { status, data } = await apiInstance.consoleV1ParamStoresPost(
    paramStoreCreateDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paramStoreCreateDto** | **ParamStoreCreateDto**|  | |


### Return type

**ConsoleV1ParamStoresPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Create param store |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

