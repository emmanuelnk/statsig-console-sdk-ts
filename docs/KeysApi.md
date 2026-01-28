# KeysApi

All URIs are relative to *https://statsigapi.net*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**consoleV1KeysGet**](#consolev1keysget) | **GET** /console/v1/keys | List Keys|
|[**consoleV1KeysIdDeactivatePatch**](#consolev1keysiddeactivatepatch) | **PATCH** /console/v1/keys/{id}/deactivate | Deactivate Key|
|[**consoleV1KeysIdDelete**](#consolev1keysiddelete) | **DELETE** /console/v1/keys/{id} | Delete Key|
|[**consoleV1KeysIdGet**](#consolev1keysidget) | **GET** /console/v1/keys/{id} | Read Key|
|[**consoleV1KeysIdPatch**](#consolev1keysidpatch) | **PATCH** /console/v1/keys/{id} | Update Key|
|[**consoleV1KeysIdRotatePatch**](#consolev1keysidrotatepatch) | **PATCH** /console/v1/keys/{id}/rotate | Rotate Key|
|[**consoleV1KeysPost**](#consolev1keyspost) | **POST** /console/v1/keys | Create Key|

# **consoleV1KeysGet**
> Getconsolev1keysResponse consoleV1KeysGet()


### Example

```typescript
import {
    KeysApi,
    Configuration,
    number,
    number
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new KeysApi(configuration);

let primaryTargetApp: string; // (optional) (default to undefined)
let environment: string; // (optional) (default to undefined)
let limit: number; //Results per page (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1KeysGet(
    primaryTargetApp,
    environment,
    limit,
    page,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **primaryTargetApp** | [**string**] |  | (optional) defaults to undefined|
| **environment** | [**string**] |  | (optional) defaults to undefined|
| **limit** | [**number**] | Results per page | (optional) defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**Getconsolev1keysResponse**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Keys listed successfully |  -  |
|**403** | Insufficient permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1KeysIdDeactivatePatch**
> ConsoleV1KeysIdDeactivatePatch200Response consoleV1KeysIdDeactivatePatch()


### Example

```typescript
import {
    KeysApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new KeysApi(configuration);

let id: string; // (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1KeysIdDeactivatePatch(
    id,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1KeysIdDeactivatePatch200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Key deactivated successfully |  -  |
|**403** | Insufficient permissions. |  -  |
|**404** | Key not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1KeysIdDelete**
> ConsoleV1KeysIdDelete200Response consoleV1KeysIdDelete()


### Example

```typescript
import {
    KeysApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new KeysApi(configuration);

let id: string; // (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1KeysIdDelete(
    id,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1KeysIdDelete200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Key deleted successfully |  -  |
|**403** | Insufficient permissions. |  -  |
|**404** | Key not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1KeysIdGet**
> ConsoleV1KeysIdGet200Response consoleV1KeysIdGet()


### Example

```typescript
import {
    KeysApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new KeysApi(configuration);

let id: string; // (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1KeysIdGet(
    id,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1KeysIdGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Key read successfully |  -  |
|**403** | Insufficient permissions. |  -  |
|**404** | Key not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1KeysIdPatch**
> ConsoleV1KeysIdPatch200Response consoleV1KeysIdPatch(keyUpdateContractDto)


### Example

```typescript
import {
    KeysApi,
    Configuration,
    KeyUpdateContractDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new KeysApi(configuration);

let id: string; // (default to undefined)
let keyUpdateContractDto: KeyUpdateContractDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1KeysIdPatch(
    id,
    keyUpdateContractDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **keyUpdateContractDto** | **KeyUpdateContractDto**|  | |
| **id** | [**string**] |  | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1KeysIdPatch200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Key updated successfully |  -  |
|**403** | Insufficient permissions. |  -  |
|**404** | Key not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1KeysIdRotatePatch**
> ConsoleV1KeysIdRotatePatch200Response consoleV1KeysIdRotatePatch()


### Example

```typescript
import {
    KeysApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new KeysApi(configuration);

let id: string; // (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1KeysIdRotatePatch(
    id,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1KeysIdRotatePatch200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Key rotated successfully |  -  |
|**403** | Insufficient permissions. |  -  |
|**404** | Key not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1KeysPost**
> ConsoleV1KeysPost200Response consoleV1KeysPost(keyCreateContractDto)


### Example

```typescript
import {
    KeysApi,
    Configuration,
    KeyCreateContractDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new KeysApi(configuration);

let keyCreateContractDto: KeyCreateContractDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1KeysPost(
    keyCreateContractDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **keyCreateContractDto** | **KeyCreateContractDto**|  | |
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1KeysPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Key created successfully |  -  |
|**403** | Insufficient permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

