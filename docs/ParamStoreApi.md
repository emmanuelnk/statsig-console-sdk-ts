# ParamStoreApi

All URIs are relative to *https://statsigapi.net*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**consoleV1ParamStoresGet**](#consolev1paramstoresget) | **GET** /console/v1/param_stores | List Param Stores|
|[**consoleV1ParamStoresNameGet**](#consolev1paramstoresnameget) | **GET** /console/v1/param_stores/{name} | Get Param Store|
|[**consoleV1ParamStoresNamePost**](#consolev1paramstoresnamepost) | **POST** /console/v1/param_stores/{name} | Update Param Store|
|[**consoleV1ParamStoresPost**](#consolev1paramstorespost) | **POST** /console/v1/param_stores | Create Param Store|

# **consoleV1ParamStoresGet**
> ConsoleV1ParamStoresGet200Response consoleV1ParamStoresGet()


### Example

```typescript
import {
    ParamStoreApi,
    Configuration,
    number,
    number
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ParamStoreApi(configuration);

let limit: number; //Results per page (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ParamStoresGet(
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

**ConsoleV1ParamStoresGet200Response**

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

# **consoleV1ParamStoresNameGet**
> ConsoleV1ParamStoresPost200Response consoleV1ParamStoresNameGet()


### Example

```typescript
import {
    ParamStoreApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ParamStoreApi(configuration);

let name: string; // (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ParamStoresNameGet(
    name,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] |  | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


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
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ParamStoreApi(configuration);

let name: string; // (default to undefined)
let paramStoreUpdateDto: ParamStoreUpdateDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ParamStoresNamePost(
    name,
    paramStoreUpdateDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paramStoreUpdateDto** | **ParamStoreUpdateDto**|  | |
| **name** | [**string**] |  | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


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
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ParamStoreApi(configuration);

let paramStoreCreateDto: ParamStoreCreateDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ParamStoresPost(
    paramStoreCreateDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paramStoreCreateDto** | **ParamStoreCreateDto**|  | |
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


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

