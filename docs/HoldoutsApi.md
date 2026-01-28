# HoldoutsApi

All URIs are relative to *https://statsigapi.net*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**consoleV1HoldoutsGet**](#consolev1holdoutsget) | **GET** /console/v1/holdouts | List Holdouts|
|[**consoleV1HoldoutsIdDelete**](#consolev1holdoutsiddelete) | **DELETE** /console/v1/holdouts/{id} | Delete holdout by id|
|[**consoleV1HoldoutsIdGet**](#consolev1holdoutsidget) | **GET** /console/v1/holdouts/{id} | Get holdout by id|
|[**consoleV1HoldoutsIdOverridesDelete**](#consolev1holdoutsidoverridesdelete) | **DELETE** /console/v1/holdouts/{id}/overrides | Remove Holdout Overrides|
|[**consoleV1HoldoutsIdOverridesGet**](#consolev1holdoutsidoverridesget) | **GET** /console/v1/holdouts/{id}/overrides | Read Holdout Overrides|
|[**consoleV1HoldoutsIdOverridesPatch**](#consolev1holdoutsidoverridespatch) | **PATCH** /console/v1/holdouts/{id}/overrides | Add Holdout Overrides|
|[**consoleV1HoldoutsIdOverridesPost**](#consolev1holdoutsidoverridespost) | **POST** /console/v1/holdouts/{id}/overrides | Update Holdout Overrides|
|[**consoleV1HoldoutsIdPatch**](#consolev1holdoutsidpatch) | **PATCH** /console/v1/holdouts/{id} | Patch holdout by id. You can pass in only the data you want to update.|
|[**consoleV1HoldoutsIdPost**](#consolev1holdoutsidpost) | **POST** /console/v1/holdouts/{id} | Update holdout by id|
|[**consoleV1HoldoutsIdPulseResultsGet**](#consolev1holdoutsidpulseresultsget) | **GET** /console/v1/holdouts/{id}/pulse_results | Retrieve Pulse Results|
|[**consoleV1HoldoutsPost**](#consolev1holdoutspost) | **POST** /console/v1/holdouts | Create holdout|

# **consoleV1HoldoutsGet**
> Getconsolev1holdoutsResponse consoleV1HoldoutsGet()


### Example

```typescript
import {
    HoldoutsApi,
    Configuration,
    ConsoleV1AuditLogsGetTagsParameter,
    number,
    number
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new HoldoutsApi(configuration);

let creatorName: string; //Name of the creator. (optional) (default to undefined)
let creatorID: string; //ID of the user who created the entity. (optional) (default to undefined)
let tags: ConsoleV1AuditLogsGetTagsParameter; //Filter by tags (optional) (default to undefined)
let limit: number; //Results per page (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1HoldoutsGet(
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
| **creatorName** | [**string**] | Name of the creator. | (optional) defaults to undefined|
| **creatorID** | [**string**] | ID of the user who created the entity. | (optional) defaults to undefined|
| **tags** | **ConsoleV1AuditLogsGetTagsParameter** | Filter by tags | (optional) defaults to undefined|
| **limit** | [**number**] | Results per page | (optional) defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**Getconsolev1holdoutsResponse**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List holdouts response |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1HoldoutsIdDelete**
> ConsoleV1HoldoutsIdDelete200Response consoleV1HoldoutsIdDelete()


### Example

```typescript
import {
    HoldoutsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new HoldoutsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1HoldoutsIdDelete(
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

**ConsoleV1HoldoutsIdDelete200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Delete holdout response |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Holdout not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1HoldoutsIdGet**
> ConsoleV1HoldoutsIdGet200Response consoleV1HoldoutsIdGet()


### Example

```typescript
import {
    HoldoutsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new HoldoutsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1HoldoutsIdGet(
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

**ConsoleV1HoldoutsIdGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get holdout by id response |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1HoldoutsIdOverridesDelete**
> ConsoleV1HoldoutsIdOverridesDelete200Response consoleV1HoldoutsIdOverridesDelete()

Remove selected ids from an id list

### Example

```typescript
import {
    HoldoutsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new HoldoutsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1HoldoutsIdOverridesDelete(
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

**ConsoleV1HoldoutsIdOverridesDelete200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Remove Holdout Overrides Success |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1HoldoutsIdOverridesGet**
> ConsoleV1HoldoutsIdOverridesGet200Response consoleV1HoldoutsIdOverridesGet()


### Example

```typescript
import {
    HoldoutsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new HoldoutsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1HoldoutsIdOverridesGet(
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

**ConsoleV1HoldoutsIdOverridesGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Read Holdout Overrides Success |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1HoldoutsIdOverridesPatch**
> ConsoleV1HoldoutsIdOverridesPost200Response consoleV1HoldoutsIdOverridesPatch(updateOverridesContractDto)


### Example

```typescript
import {
    HoldoutsApi,
    Configuration,
    UpdateOverridesContractDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new HoldoutsApi(configuration);

let id: string; //id (default to undefined)
let updateOverridesContractDto: UpdateOverridesContractDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1HoldoutsIdOverridesPatch(
    id,
    updateOverridesContractDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateOverridesContractDto** | **UpdateOverridesContractDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1HoldoutsIdOverridesPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Add Holdout Overrides Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1HoldoutsIdOverridesPost**
> ConsoleV1HoldoutsIdOverridesPost200Response consoleV1HoldoutsIdOverridesPost(updateOverridesContractDto)


### Example

```typescript
import {
    HoldoutsApi,
    Configuration,
    UpdateOverridesContractDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new HoldoutsApi(configuration);

let id: string; //id (default to undefined)
let updateOverridesContractDto: UpdateOverridesContractDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1HoldoutsIdOverridesPost(
    id,
    updateOverridesContractDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateOverridesContractDto** | **UpdateOverridesContractDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1HoldoutsIdOverridesPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Update Holdout Overrides Success |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1HoldoutsIdPatch**
> ConsoleV1HoldoutsIdPatch200Response consoleV1HoldoutsIdPatch(holdoutPartialUpdateContractDto)


### Example

```typescript
import {
    HoldoutsApi,
    Configuration,
    HoldoutPartialUpdateContractDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new HoldoutsApi(configuration);

let id: string; //id (default to undefined)
let holdoutPartialUpdateContractDto: HoldoutPartialUpdateContractDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1HoldoutsIdPatch(
    id,
    holdoutPartialUpdateContractDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **holdoutPartialUpdateContractDto** | **HoldoutPartialUpdateContractDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1HoldoutsIdPatch200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Update holdout response |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Holdout not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1HoldoutsIdPost**
> ConsoleV1HoldoutsIdPost200Response consoleV1HoldoutsIdPost(holdoutFullUpdateContractDto)


### Example

```typescript
import {
    HoldoutsApi,
    Configuration,
    HoldoutFullUpdateContractDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new HoldoutsApi(configuration);

let id: string; //id (default to undefined)
let holdoutFullUpdateContractDto: HoldoutFullUpdateContractDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1HoldoutsIdPost(
    id,
    holdoutFullUpdateContractDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **holdoutFullUpdateContractDto** | **HoldoutFullUpdateContractDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1HoldoutsIdPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Update holdout response |  -  |
|**400** | Name is already in use |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1HoldoutsIdPulseResultsGet**
> ConsoleV1HoldoutsIdPulseResultsGet200Response consoleV1HoldoutsIdPulseResultsGet()


### Example

```typescript
import {
    HoldoutsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new HoldoutsApi(configuration);

let id: string; //id (default to undefined)
let cuped: string; //Whether to apply CUPED. Allowed values are \"true\" or \"false\". (optional) (default to undefined)
let confidence: string; //Confidence interval (0-100) (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1HoldoutsIdPulseResultsGet(
    id,
    cuped,
    confidence,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|
| **cuped** | [**string**] | Whether to apply CUPED. Allowed values are \&quot;true\&quot; or \&quot;false\&quot;. | (optional) defaults to undefined|
| **confidence** | [**string**] | Confidence interval (0-100) | (optional) defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1HoldoutsIdPulseResultsGet200Response**

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

# **consoleV1HoldoutsPost**
> ConsoleV1HoldoutsPost200Response consoleV1HoldoutsPost(holdoutCreateContractDto)


### Example

```typescript
import {
    HoldoutsApi,
    Configuration,
    HoldoutCreateContractDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new HoldoutsApi(configuration);

let holdoutCreateContractDto: HoldoutCreateContractDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1HoldoutsPost(
    holdoutCreateContractDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **holdoutCreateContractDto** | **HoldoutCreateContractDto**|  | |
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1HoldoutsPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Create holdout response |  -  |
|**400** | Name is already in use |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found Exception |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

