# ReleasePipelinesApi

All URIs are relative to *https://statsigapi.net*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**consoleV1ReleasePipelineTriggersGet**](#consolev1releasepipelinetriggersget) | **GET** /console/v1/release_pipeline_triggers | List Pipeline Triggers|
|[**consoleV1ReleasePipelineTriggersIdAbortPut**](#consolev1releasepipelinetriggersidabortput) | **PUT** /console/v1/release_pipeline_triggers/{id}/abort | Abort Pipeline Trigger|
|[**consoleV1ReleasePipelineTriggersIdApprovePut**](#consolev1releasepipelinetriggersidapproveput) | **PUT** /console/v1/release_pipeline_triggers/{id}/approve | Approve Pipeline Trigger Phase|
|[**consoleV1ReleasePipelineTriggersIdGet**](#consolev1releasepipelinetriggersidget) | **GET** /console/v1/release_pipeline_triggers/{id} | Get Pipeline Trigger|
|[**consoleV1ReleasePipelineTriggersIdPausePut**](#consolev1releasepipelinetriggersidpauseput) | **PUT** /console/v1/release_pipeline_triggers/{id}/pause | Pause Pipeline Trigger|
|[**consoleV1ReleasePipelineTriggersIdRolloutPut**](#consolev1releasepipelinetriggersidrolloutput) | **PUT** /console/v1/release_pipeline_triggers/{id}/rollout | Fully Roll Out Pipeline Trigger|
|[**consoleV1ReleasePipelineTriggersIdSkipPut**](#consolev1releasepipelinetriggersidskipput) | **PUT** /console/v1/release_pipeline_triggers/{id}/skip | Skip to Pipeline Trigger Phase|
|[**consoleV1ReleasePipelineTriggersIdUnpausePut**](#consolev1releasepipelinetriggersidunpauseput) | **PUT** /console/v1/release_pipeline_triggers/{id}/unpause | Unpause Pipeline Trigger|
|[**consoleV1ReleasePipelinesGet**](#consolev1releasepipelinesget) | **GET** /console/v1/release_pipelines | List Pipelines|
|[**consoleV1ReleasePipelinesIdDelete**](#consolev1releasepipelinesiddelete) | **DELETE** /console/v1/release_pipelines/{id} | Delete Pipeline|
|[**consoleV1ReleasePipelinesIdGet**](#consolev1releasepipelinesidget) | **GET** /console/v1/release_pipelines/{id} | Get Pipeline|
|[**consoleV1ReleasePipelinesIdPost**](#consolev1releasepipelinesidpost) | **POST** /console/v1/release_pipelines/{id} | Update Pipeline|
|[**consoleV1ReleasePipelinesPost**](#consolev1releasepipelinespost) | **POST** /console/v1/release_pipelines | Create Pipeline|

# **consoleV1ReleasePipelineTriggersGet**
> ConsoleV1ReleasePipelineTriggersGet200Response consoleV1ReleasePipelineTriggersGet()


### Example

```typescript
import {
    ReleasePipelinesApi,
    Configuration,
    ConsoleV1ReleasePipelineTriggersGetStatusParameter,
    number,
    number
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ReleasePipelinesApi(configuration);

let releasePipelineID: string; //Filter by Release Pipeline ID (optional) (default to undefined)
let gateID: string; //Filter by Gate ID (optional) (default to undefined)
let dynamicConfigID: string; //Filter by Dynamic Config ID (optional) (default to undefined)
let status: ConsoleV1ReleasePipelineTriggersGetStatusParameter; //Filter by Status (optional) (default to undefined)
let startDate: string; //Filter by the start date of the date range of the trigger\'s creation date in UTC, inclusive (optional) (default to undefined)
let endDate: string; //Filter by the end date of the date range of the trigger\'s creation date in UTC, inclusive (i.e. until the end of the day); defaults to today\'s date if not provided (optional) (default to undefined)
let limit: number; //Results per page (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ReleasePipelineTriggersGet(
    releasePipelineID,
    gateID,
    dynamicConfigID,
    status,
    startDate,
    endDate,
    limit,
    page,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **releasePipelineID** | [**string**] | Filter by Release Pipeline ID | (optional) defaults to undefined|
| **gateID** | [**string**] | Filter by Gate ID | (optional) defaults to undefined|
| **dynamicConfigID** | [**string**] | Filter by Dynamic Config ID | (optional) defaults to undefined|
| **status** | **ConsoleV1ReleasePipelineTriggersGetStatusParameter** | Filter by Status | (optional) defaults to undefined|
| **startDate** | [**string**] | Filter by the start date of the date range of the trigger\&#39;s creation date in UTC, inclusive | (optional) defaults to undefined|
| **endDate** | [**string**] | Filter by the end date of the date range of the trigger\&#39;s creation date in UTC, inclusive (i.e. until the end of the day); defaults to today\&#39;s date if not provided | (optional) defaults to undefined|
| **limit** | [**number**] | Results per page | (optional) defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ReleasePipelineTriggersGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List pipeline triggers success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ReleasePipelineTriggersIdAbortPut**
> ConsoleV1ReleasePipelineTriggersIdAbortPut200Response consoleV1ReleasePipelineTriggersIdAbortPut()


### Example

```typescript
import {
    ReleasePipelinesApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ReleasePipelinesApi(configuration);

let id: string; // (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ReleasePipelineTriggersIdAbortPut(
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

**ConsoleV1ReleasePipelineTriggersIdAbortPut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Aborted pipeline trigger successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ReleasePipelineTriggersIdApprovePut**
> ConsoleV1ReleasePipelineTriggersIdAbortPut200Response consoleV1ReleasePipelineTriggersIdApprovePut(releasePipelineTriggerActionBodyDto)


### Example

```typescript
import {
    ReleasePipelinesApi,
    Configuration,
    ReleasePipelineTriggerActionBodyDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ReleasePipelinesApi(configuration);

let id: string; // (default to undefined)
let releasePipelineTriggerActionBodyDto: ReleasePipelineTriggerActionBodyDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ReleasePipelineTriggersIdApprovePut(
    id,
    releasePipelineTriggerActionBodyDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **releasePipelineTriggerActionBodyDto** | **ReleasePipelineTriggerActionBodyDto**|  | |
| **id** | [**string**] |  | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ReleasePipelineTriggersIdAbortPut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Approved pipeline trigger phase successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ReleasePipelineTriggersIdGet**
> ConsoleV1ReleasePipelineTriggersIdGet200Response consoleV1ReleasePipelineTriggersIdGet()


### Example

```typescript
import {
    ReleasePipelinesApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ReleasePipelinesApi(configuration);

let id: string; // (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ReleasePipelineTriggersIdGet(
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

**ConsoleV1ReleasePipelineTriggersIdGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get pipeline trigger success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ReleasePipelineTriggersIdPausePut**
> ConsoleV1ReleasePipelineTriggersIdAbortPut200Response consoleV1ReleasePipelineTriggersIdPausePut(releasePipelineTriggerActionBodyDto)


### Example

```typescript
import {
    ReleasePipelinesApi,
    Configuration,
    ReleasePipelineTriggerActionBodyDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ReleasePipelinesApi(configuration);

let id: string; // (default to undefined)
let releasePipelineTriggerActionBodyDto: ReleasePipelineTriggerActionBodyDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ReleasePipelineTriggersIdPausePut(
    id,
    releasePipelineTriggerActionBodyDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **releasePipelineTriggerActionBodyDto** | **ReleasePipelineTriggerActionBodyDto**|  | |
| **id** | [**string**] |  | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ReleasePipelineTriggersIdAbortPut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Paused pipeline trigger successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ReleasePipelineTriggersIdRolloutPut**
> ConsoleV1ReleasePipelineTriggersIdAbortPut200Response consoleV1ReleasePipelineTriggersIdRolloutPut()


### Example

```typescript
import {
    ReleasePipelinesApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ReleasePipelinesApi(configuration);

let id: string; // (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ReleasePipelineTriggersIdRolloutPut(
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

**ConsoleV1ReleasePipelineTriggersIdAbortPut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Fully rolled out pipeline trigger successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ReleasePipelineTriggersIdSkipPut**
> ConsoleV1ReleasePipelineTriggersIdAbortPut200Response consoleV1ReleasePipelineTriggersIdSkipPut(releasePipelineTriggerActionBodyDto)


### Example

```typescript
import {
    ReleasePipelinesApi,
    Configuration,
    ReleasePipelineTriggerActionBodyDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ReleasePipelinesApi(configuration);

let id: string; // (default to undefined)
let releasePipelineTriggerActionBodyDto: ReleasePipelineTriggerActionBodyDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ReleasePipelineTriggersIdSkipPut(
    id,
    releasePipelineTriggerActionBodyDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **releasePipelineTriggerActionBodyDto** | **ReleasePipelineTriggerActionBodyDto**|  | |
| **id** | [**string**] |  | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ReleasePipelineTriggersIdAbortPut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Skipped pipeline trigger phase successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ReleasePipelineTriggersIdUnpausePut**
> ConsoleV1ReleasePipelineTriggersIdAbortPut200Response consoleV1ReleasePipelineTriggersIdUnpausePut(releasePipelineTriggerActionBodyDto)


### Example

```typescript
import {
    ReleasePipelinesApi,
    Configuration,
    ReleasePipelineTriggerActionBodyDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ReleasePipelinesApi(configuration);

let id: string; // (default to undefined)
let releasePipelineTriggerActionBodyDto: ReleasePipelineTriggerActionBodyDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ReleasePipelineTriggersIdUnpausePut(
    id,
    releasePipelineTriggerActionBodyDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **releasePipelineTriggerActionBodyDto** | **ReleasePipelineTriggerActionBodyDto**|  | |
| **id** | [**string**] |  | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ReleasePipelineTriggersIdAbortPut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Unpaused pipeline trigger successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ReleasePipelinesGet**
> ConsoleV1ReleasePipelinesGet200Response consoleV1ReleasePipelinesGet()


### Example

```typescript
import {
    ReleasePipelinesApi,
    Configuration,
    number,
    number
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ReleasePipelinesApi(configuration);

let limit: number; //Results per page (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ReleasePipelinesGet(
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

**ConsoleV1ReleasePipelinesGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List pipelines |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ReleasePipelinesIdDelete**
> ConsoleV1ReleasePipelinesIdDelete200Response consoleV1ReleasePipelinesIdDelete()


### Example

```typescript
import {
    ReleasePipelinesApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ReleasePipelinesApi(configuration);

let id: string; // (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ReleasePipelinesIdDelete(
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

**ConsoleV1ReleasePipelinesIdDelete200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Delete pipeline |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ReleasePipelinesIdGet**
> ConsoleV1ReleasePipelinesPost200Response consoleV1ReleasePipelinesIdGet()


### Example

```typescript
import {
    ReleasePipelinesApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ReleasePipelinesApi(configuration);

let id: string; // (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ReleasePipelinesIdGet(
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

**ConsoleV1ReleasePipelinesPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get pipeline |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ReleasePipelinesIdPost**
> ConsoleV1ReleasePipelinesPost200Response consoleV1ReleasePipelinesIdPost(releasePipelineUpdateDto)


### Example

```typescript
import {
    ReleasePipelinesApi,
    Configuration,
    ReleasePipelineUpdateDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ReleasePipelinesApi(configuration);

let id: string; // (default to undefined)
let releasePipelineUpdateDto: ReleasePipelineUpdateDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ReleasePipelinesIdPost(
    id,
    releasePipelineUpdateDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **releasePipelineUpdateDto** | **ReleasePipelineUpdateDto**|  | |
| **id** | [**string**] |  | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ReleasePipelinesPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Update pipeline |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ReleasePipelinesPost**
> ConsoleV1ReleasePipelinesPost200Response consoleV1ReleasePipelinesPost(releasePipelineCreateDto)


### Example

```typescript
import {
    ReleasePipelinesApi,
    Configuration,
    ReleasePipelineCreateDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ReleasePipelinesApi(configuration);

let releasePipelineCreateDto: ReleasePipelineCreateDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ReleasePipelinesPost(
    releasePipelineCreateDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **releasePipelineCreateDto** | **ReleasePipelineCreateDto**|  | |
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ReleasePipelinesPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Create pipeline |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

