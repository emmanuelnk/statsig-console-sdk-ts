# DynamicConfigsApi

All URIs are relative to *https://statsigapi.net*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**consoleV1DynamicConfigsGet**](#consolev1dynamicconfigsget) | **GET** /console/v1/dynamic_configs | List Dynamic Configs|
|[**consoleV1DynamicConfigsIdArchivePut**](#consolev1dynamicconfigsidarchiveput) | **PUT** /console/v1/dynamic_configs/{id}/archive | Archive Dynamic Config|
|[**consoleV1DynamicConfigsIdDelete**](#consolev1dynamicconfigsiddelete) | **DELETE** /console/v1/dynamic_configs/{id} | Delete Dynamic Config|
|[**consoleV1DynamicConfigsIdDisablePut**](#consolev1dynamicconfigsiddisableput) | **PUT** /console/v1/dynamic_configs/{id}/disable | Disable Dynamic Config|
|[**consoleV1DynamicConfigsIdEnablePut**](#consolev1dynamicconfigsidenableput) | **PUT** /console/v1/dynamic_configs/{id}/enable | Enable Dynamic Config|
|[**consoleV1DynamicConfigsIdGet**](#consolev1dynamicconfigsidget) | **GET** /console/v1/dynamic_configs/{id} | Get Dynamic Config|
|[**consoleV1DynamicConfigsIdPatch**](#consolev1dynamicconfigsidpatch) | **PATCH** /console/v1/dynamic_configs/{id} | Partially Update Dynamic Config|
|[**consoleV1DynamicConfigsIdPost**](#consolev1dynamicconfigsidpost) | **POST** /console/v1/dynamic_configs/{id} | Fully Update Dynamic Config|
|[**consoleV1DynamicConfigsIdReviewsReviewIDCommitPut**](#consolev1dynamicconfigsidreviewsreviewidcommitput) | **PUT** /console/v1/dynamic_configs/{id}/reviews/{reviewID}/commit | Commit Dynamic Config Review|
|[**consoleV1DynamicConfigsIdRuleRuleIdDelete**](#consolev1dynamicconfigsidruleruleiddelete) | **DELETE** /console/v1/dynamic_configs/{id}/rule/{ruleId} | Delete Dynamic Config Rule|
|[**consoleV1DynamicConfigsIdRuleRuleIdGet**](#consolev1dynamicconfigsidruleruleidget) | **GET** /console/v1/dynamic_configs/{id}/rule/{ruleId} | Get Specific Dynamic Config Rule|
|[**consoleV1DynamicConfigsIdRuleRuleIdPatch**](#consolev1dynamicconfigsidruleruleidpatch) | **PATCH** /console/v1/dynamic_configs/{id}/rule/{ruleId} | Update Dynamic Config Rule By Id|
|[**consoleV1DynamicConfigsIdRulesGet**](#consolev1dynamicconfigsidrulesget) | **GET** /console/v1/dynamic_configs/{id}/rules | Get Dynamic Config Rules|
|[**consoleV1DynamicConfigsIdUnarchivePut**](#consolev1dynamicconfigsidunarchiveput) | **PUT** /console/v1/dynamic_configs/{id}/unarchive | Unarchive Dynamic Config|
|[**consoleV1DynamicConfigsIdVersionsGet**](#consolev1dynamicconfigsidversionsget) | **GET** /console/v1/dynamic_configs/{id}/versions | List Dynamic Config Versions|
|[**consoleV1DynamicConfigsPost**](#consolev1dynamicconfigspost) | **POST** /console/v1/dynamic_configs | Create Dynamic Config|

# **consoleV1DynamicConfigsGet**
> ConsoleV1DynamicConfigsGet200Response consoleV1DynamicConfigsGet()


### Example

```typescript
import {
    DynamicConfigsApi,
    Configuration,
    ConsoleV1AuditLogsGetTagsParameter,
    number,
    number
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new DynamicConfigsApi(configuration);

let releasePipelineID: string; //The release pipeline ID associated with the dynamic config (optional) (default to undefined)
let creatorName: string; //Name of the creator. (optional) (default to undefined)
let creatorID: string; //ID of the user who created the entity. (optional) (default to undefined)
let tags: ConsoleV1AuditLogsGetTagsParameter; //Filter by tags (optional) (default to undefined)
let limit: number; //Results per page (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1DynamicConfigsGet(
    releasePipelineID,
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
| **releasePipelineID** | [**string**] | The release pipeline ID associated with the dynamic config | (optional) defaults to undefined|
| **creatorName** | [**string**] | Name of the creator. | (optional) defaults to undefined|
| **creatorID** | [**string**] | ID of the user who created the entity. | (optional) defaults to undefined|
| **tags** | **ConsoleV1AuditLogsGetTagsParameter** | Filter by tags | (optional) defaults to undefined|
| **limit** | [**number**] | Results per page | (optional) defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1DynamicConfigsGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List Dynamic Configs Success |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1DynamicConfigsIdArchivePut**
> ConsoleV1DynamicConfigsIdArchivePut200Response consoleV1DynamicConfigsIdArchivePut(archiveSchemaDto)


### Example

```typescript
import {
    DynamicConfigsApi,
    Configuration,
    ArchiveSchemaDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new DynamicConfigsApi(configuration);

let id: string; //id (default to undefined)
let archiveSchemaDto: ArchiveSchemaDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1DynamicConfigsIdArchivePut(
    id,
    archiveSchemaDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **archiveSchemaDto** | **ArchiveSchemaDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1DynamicConfigsIdArchivePut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Archive Dynamic Config Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1DynamicConfigsIdDelete**
> ConsoleV1DynamicConfigsIdDelete200Response consoleV1DynamicConfigsIdDelete()


### Example

```typescript
import {
    DynamicConfigsApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new DynamicConfigsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1DynamicConfigsIdDelete(
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

**ConsoleV1DynamicConfigsIdDelete200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Delete Dynamic Config Response |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1DynamicConfigsIdDisablePut**
> ConsoleV1DynamicConfigsIdArchivePut200Response consoleV1DynamicConfigsIdDisablePut()


### Example

```typescript
import {
    DynamicConfigsApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new DynamicConfigsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1DynamicConfigsIdDisablePut(
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

**ConsoleV1DynamicConfigsIdArchivePut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Disable Dynamic Config Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1DynamicConfigsIdEnablePut**
> ConsoleV1DynamicConfigsIdArchivePut200Response consoleV1DynamicConfigsIdEnablePut()


### Example

```typescript
import {
    DynamicConfigsApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new DynamicConfigsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1DynamicConfigsIdEnablePut(
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

**ConsoleV1DynamicConfigsIdArchivePut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Enable Dynamic Config Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1DynamicConfigsIdGet**
> ConsoleV1DynamicConfigsIdGet200Response consoleV1DynamicConfigsIdGet()


### Example

```typescript
import {
    DynamicConfigsApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new DynamicConfigsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1DynamicConfigsIdGet(
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

**ConsoleV1DynamicConfigsIdGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get Dynamic Config Response |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1DynamicConfigsIdPatch**
> ConsoleV1DynamicConfigsIdPost200Response consoleV1DynamicConfigsIdPatch(dynamicConfigPartialUpdateDto)


### Example

```typescript
import {
    DynamicConfigsApi,
    Configuration,
    DynamicConfigPartialUpdateDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new DynamicConfigsApi(configuration);

let id: string; //id (default to undefined)
let dynamicConfigPartialUpdateDto: DynamicConfigPartialUpdateDto; //
let dryRun: boolean; //Skips persisting updates to the entity (used to validate that inputs are correct) (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1DynamicConfigsIdPatch(
    id,
    dynamicConfigPartialUpdateDto,
    dryRun,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dynamicConfigPartialUpdateDto** | **DynamicConfigPartialUpdateDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **dryRun** | [**boolean**] | Skips persisting updates to the entity (used to validate that inputs are correct) | (optional) defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1DynamicConfigsIdPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Partially Update Dynamic Config Response |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1DynamicConfigsIdPost**
> ConsoleV1DynamicConfigsIdPost200Response consoleV1DynamicConfigsIdPost(dynamicConfigFullUpdateDto)


### Example

```typescript
import {
    DynamicConfigsApi,
    Configuration,
    DynamicConfigFullUpdateDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new DynamicConfigsApi(configuration);

let id: string; //id (default to undefined)
let dynamicConfigFullUpdateDto: DynamicConfigFullUpdateDto; //
let dryRun: boolean; //Skips persisting updates to the entity (used to validate that inputs are correct) (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1DynamicConfigsIdPost(
    id,
    dynamicConfigFullUpdateDto,
    dryRun,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dynamicConfigFullUpdateDto** | **DynamicConfigFullUpdateDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **dryRun** | [**boolean**] | Skips persisting updates to the entity (used to validate that inputs are correct) | (optional) defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1DynamicConfigsIdPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Fully Update Dynamic Config Response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**403** | Forbidden. The request was valid, but the server is refusing action. You might not have the necessary permissions to access the resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1DynamicConfigsIdReviewsReviewIDCommitPut**
> ConsoleV1DynamicConfigsIdReviewsReviewIDCommitPut200Response consoleV1DynamicConfigsIdReviewsReviewIDCommitPut()


### Example

```typescript
import {
    DynamicConfigsApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new DynamicConfigsApi(configuration);

let id: string; // (default to undefined)
let reviewID: string; // (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1DynamicConfigsIdReviewsReviewIDCommitPut(
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

**ConsoleV1DynamicConfigsIdReviewsReviewIDCommitPut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Commit an approved dynamic config review |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1DynamicConfigsIdRuleRuleIdDelete**
> ConsoleV1DynamicConfigsIdRuleRuleIdDelete200Response consoleV1DynamicConfigsIdRuleRuleIdDelete()


### Example

```typescript
import {
    DynamicConfigsApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new DynamicConfigsApi(configuration);

let id: string; //Dynamic Config ID (default to undefined)
let ruleId: string; //Rule ID (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1DynamicConfigsIdRuleRuleIdDelete(
    id,
    ruleId,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Dynamic Config ID | defaults to undefined|
| **ruleId** | [**string**] | Rule ID | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1DynamicConfigsIdRuleRuleIdDelete200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Delete Dynamic Config Rule Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1DynamicConfigsIdRuleRuleIdGet**
> ConsoleV1DynamicConfigsIdRuleRuleIdGet200Response consoleV1DynamicConfigsIdRuleRuleIdGet()


### Example

```typescript
import {
    DynamicConfigsApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new DynamicConfigsApi(configuration);

let id: string; //Dynamic Config ID (default to undefined)
let ruleId: string; //Rule ID (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1DynamicConfigsIdRuleRuleIdGet(
    id,
    ruleId,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Dynamic Config ID | defaults to undefined|
| **ruleId** | [**string**] | Rule ID | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1DynamicConfigsIdRuleRuleIdGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get Specific Dynamic Config Rule Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1DynamicConfigsIdRuleRuleIdPatch**
> ConsoleV1DynamicConfigsIdRuleRuleIdPatch200Response consoleV1DynamicConfigsIdRuleRuleIdPatch(dynamicConfigRulePartialDto)


### Example

```typescript
import {
    DynamicConfigsApi,
    Configuration,
    DynamicConfigRulePartialDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new DynamicConfigsApi(configuration);

let id: string; //Dynamic Config ID (default to undefined)
let ruleId: string; //Rule ID (default to undefined)
let dynamicConfigRulePartialDto: DynamicConfigRulePartialDto; //
let dryRun: boolean; //Skips persisting updates to the entity (used to validate that inputs are correct) (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1DynamicConfigsIdRuleRuleIdPatch(
    id,
    ruleId,
    dynamicConfigRulePartialDto,
    dryRun,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dynamicConfigRulePartialDto** | **DynamicConfigRulePartialDto**|  | |
| **id** | [**string**] | Dynamic Config ID | defaults to undefined|
| **ruleId** | [**string**] | Rule ID | defaults to undefined|
| **dryRun** | [**boolean**] | Skips persisting updates to the entity (used to validate that inputs are correct) | (optional) defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1DynamicConfigsIdRuleRuleIdPatch200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Update Dynamic Config Rule Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1DynamicConfigsIdRulesGet**
> ConsoleV1DynamicConfigsIdRulesGet200Response consoleV1DynamicConfigsIdRulesGet()


### Example

```typescript
import {
    DynamicConfigsApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new DynamicConfigsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1DynamicConfigsIdRulesGet(
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

**ConsoleV1DynamicConfigsIdRulesGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get Dynamic Config Rules Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1DynamicConfigsIdUnarchivePut**
> ConsoleV1DynamicConfigsIdArchivePut200Response consoleV1DynamicConfigsIdUnarchivePut(unarchiveSchemaDto)


### Example

```typescript
import {
    DynamicConfigsApi,
    Configuration,
    UnarchiveSchemaDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new DynamicConfigsApi(configuration);

let id: string; //id (default to undefined)
let unarchiveSchemaDto: UnarchiveSchemaDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1DynamicConfigsIdUnarchivePut(
    id,
    unarchiveSchemaDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **unarchiveSchemaDto** | **UnarchiveSchemaDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1DynamicConfigsIdArchivePut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Unarchive Dynamic Config Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1DynamicConfigsIdVersionsGet**
> ConsoleV1DynamicConfigsIdVersionsGet200Response consoleV1DynamicConfigsIdVersionsGet()


### Example

```typescript
import {
    DynamicConfigsApi,
    Configuration,
    number,
    number
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new DynamicConfigsApi(configuration);

let id: string; //id (default to undefined)
let limit: number; //Results per page (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1DynamicConfigsIdVersionsGet(
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

**ConsoleV1DynamicConfigsIdVersionsGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List Dynamic Config Versions Success |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1DynamicConfigsPost**
> ConsoleV1DynamicConfigsPost201Response consoleV1DynamicConfigsPost(dynamicConfigCreateDto)


### Example

```typescript
import {
    DynamicConfigsApi,
    Configuration,
    DynamicConfigCreateDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new DynamicConfigsApi(configuration);

let dynamicConfigCreateDto: DynamicConfigCreateDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1DynamicConfigsPost(
    dynamicConfigCreateDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dynamicConfigCreateDto** | **DynamicConfigCreateDto**|  | |
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1DynamicConfigsPost201Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Create Dynamic Config |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**403** | Forbidden. The request was valid, but the server is refusing action. You might not have the necessary permissions to access the resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

