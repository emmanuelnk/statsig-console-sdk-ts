# ExperimentsWarehouseNativeApi

All URIs are relative to *https://statsigapi.net*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**consoleV1ExperimentsAssignmentSourceNameDelete**](#consolev1experimentsassignmentsourcenamedelete) | **DELETE** /console/v1/experiments/assignment_source/{name} | Delete Assignment Source|
|[**consoleV1ExperimentsAssignmentSourceNamePatch**](#consolev1experimentsassignmentsourcenamepatch) | **PATCH** /console/v1/experiments/assignment_source/{name} | Patch Assignment Source|
|[**consoleV1ExperimentsAssignmentSourceNamePost**](#consolev1experimentsassignmentsourcenamepost) | **POST** /console/v1/experiments/assignment_source/{name} | Post Assignment Source|
|[**consoleV1ExperimentsAssignmentSourcesGet**](#consolev1experimentsassignmentsourcesget) | **GET** /console/v1/experiments/assignment_sources | List Assignment Sources|
|[**consoleV1ExperimentsAssignmentSourcesPost**](#consolev1experimentsassignmentsourcespost) | **POST** /console/v1/experiments/assignment_sources | Create Assignment Source|
|[**consoleV1ExperimentsEntityPropertiesGet**](#consolev1experimentsentitypropertiesget) | **GET** /console/v1/experiments/entity_properties | List Entity Property Sources|
|[**consoleV1ExperimentsEntityPropertiesPost**](#consolev1experimentsentitypropertiespost) | **POST** /console/v1/experiments/entity_properties | Create Entity Property Source|
|[**consoleV1ExperimentsEntityPropertyNameDelete**](#consolev1experimentsentitypropertynamedelete) | **DELETE** /console/v1/experiments/entity_property/{name} | Delete Entity Property Source|
|[**consoleV1ExperimentsEntityPropertyNameGet**](#consolev1experimentsentitypropertynameget) | **GET** /console/v1/experiments/entity_property/{name} | Get Entity Property Source|
|[**consoleV1ExperimentsEntityPropertyNamePatch**](#consolev1experimentsentitypropertynamepatch) | **PATCH** /console/v1/experiments/entity_property/{name} | Patch Entity Property Source|
|[**consoleV1ExperimentsEntityPropertyNamePost**](#consolev1experimentsentitypropertynamepost) | **POST** /console/v1/experiments/entity_property/{name} | Post Entity Property Source|
|[**consoleV1ExperimentsIdLoadPulsePost**](#consolev1experimentsidloadpulsepost) | **POST** /console/v1/experiments/{id}/load_pulse | Load Pulse (Warehouse Native)|
|[**consoleV1ExperimentsIdPulseLoadHistoryGet**](#consolev1experimentsidpulseloadhistoryget) | **GET** /console/v1/experiments/{id}/pulse_load_history | Pulse Load History (Warehouse Native)|
|[**consoleV1ExperimentsQualifyingEventsGet**](#consolev1experimentsqualifyingeventsget) | **GET** /console/v1/experiments/qualifying_events | List qualifying event|
|[**consoleV1ExperimentsQualifyingEventsGet_0**](#consolev1experimentsqualifyingeventsget_0) | **GET** /console/v1/experiments/qualifying_events | List qualifying event|
|[**consoleV1ExperimentsQualifyingEventsNameDelete**](#consolev1experimentsqualifyingeventsnamedelete) | **DELETE** /console/v1/experiments/qualifying_events/{name} | Delete Qualifying Event|
|[**consoleV1ExperimentsQualifyingEventsNameDelete_0**](#consolev1experimentsqualifyingeventsnamedelete_0) | **DELETE** /console/v1/experiments/qualifying_events/{name} | Delete Qualifying Event|
|[**consoleV1ExperimentsQualifyingEventsNameGet**](#consolev1experimentsqualifyingeventsnameget) | **GET** /console/v1/experiments/qualifying_events/{name} | Read Qualifying Event|
|[**consoleV1ExperimentsQualifyingEventsNameGet_0**](#consolev1experimentsqualifyingeventsnameget_0) | **GET** /console/v1/experiments/qualifying_events/{name} | Read Qualifying Event|
|[**consoleV1ExperimentsQualifyingEventsNamePost**](#consolev1experimentsqualifyingeventsnamepost) | **POST** /console/v1/experiments/qualifying_events/{name} | Update Qualifying Event|
|[**consoleV1ExperimentsQualifyingEventsNamePost_0**](#consolev1experimentsqualifyingeventsnamepost_0) | **POST** /console/v1/experiments/qualifying_events/{name} | Update Qualifying Event|
|[**consoleV1ExperimentsQualifyingEventsPost**](#consolev1experimentsqualifyingeventspost) | **POST** /console/v1/experiments/qualifying_events | Create Qualifying Event|
|[**consoleV1ExperimentsQualifyingEventsPost_0**](#consolev1experimentsqualifyingeventspost_0) | **POST** /console/v1/experiments/qualifying_events | Create Qualifying Event|

# **consoleV1ExperimentsAssignmentSourceNameDelete**
> ConsoleV1ExperimentsAssignmentSourceNameDelete200Response consoleV1ExperimentsAssignmentSourceNameDelete()


### Example

```typescript
import {
    ExperimentsWarehouseNativeApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new ExperimentsWarehouseNativeApi(configuration);

let name: string; //Name of the assignment source (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsAssignmentSourceNameDelete(
    name,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | Name of the assignment source | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsAssignmentSourceNameDelete200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Delete Assignment Source response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsAssignmentSourceNamePatch**
> ConsoleV1ExperimentsAssignmentSourceNamePost200Response consoleV1ExperimentsAssignmentSourceNamePatch(assignmentSourcePartialUpdateDto)


### Example

```typescript
import {
    ExperimentsWarehouseNativeApi,
    Configuration,
    AssignmentSourcePartialUpdateDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new ExperimentsWarehouseNativeApi(configuration);

let name: string; //Name of the assignment source (default to undefined)
let assignmentSourcePartialUpdateDto: AssignmentSourcePartialUpdateDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsAssignmentSourceNamePatch(
    name,
    assignmentSourcePartialUpdateDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assignmentSourcePartialUpdateDto** | **AssignmentSourcePartialUpdateDto**|  | |
| **name** | [**string**] | Name of the assignment source | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsAssignmentSourceNamePost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Patch Assignment Source response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsAssignmentSourceNamePost**
> ConsoleV1ExperimentsAssignmentSourceNamePost200Response consoleV1ExperimentsAssignmentSourceNamePost(assignmentSourceQueryUpdateDto)


### Example

```typescript
import {
    ExperimentsWarehouseNativeApi,
    Configuration,
    AssignmentSourceQueryUpdateDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new ExperimentsWarehouseNativeApi(configuration);

let name: string; //Name of the assignment source (default to undefined)
let assignmentSourceQueryUpdateDto: AssignmentSourceQueryUpdateDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsAssignmentSourceNamePost(
    name,
    assignmentSourceQueryUpdateDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assignmentSourceQueryUpdateDto** | **AssignmentSourceQueryUpdateDto**|  | |
| **name** | [**string**] | Name of the assignment source | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsAssignmentSourceNamePost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Post Assignment Source response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsAssignmentSourcesGet**
> Getconsolev1experimentsassignmentsourcesResponse consoleV1ExperimentsAssignmentSourcesGet()


### Example

```typescript
import {
    ExperimentsWarehouseNativeApi,
    Configuration,
    number,
    number
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new ExperimentsWarehouseNativeApi(configuration);

let limit: number; //Results per page (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsAssignmentSourcesGet(
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

**Getconsolev1experimentsassignmentsourcesResponse**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List Assignment Sources response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsAssignmentSourcesPost**
> ConsoleV1ExperimentsAssignmentSourcesPost201Response consoleV1ExperimentsAssignmentSourcesPost(assignmentSourceCreationDto)


### Example

```typescript
import {
    ExperimentsWarehouseNativeApi,
    Configuration,
    AssignmentSourceCreationDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new ExperimentsWarehouseNativeApi(configuration);

let assignmentSourceCreationDto: AssignmentSourceCreationDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsAssignmentSourcesPost(
    assignmentSourceCreationDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assignmentSourceCreationDto** | **AssignmentSourceCreationDto**|  | |
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsAssignmentSourcesPost201Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Create Assignment Source response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsEntityPropertiesGet**
> Getconsolev1experimentsentitypropertiesResponse consoleV1ExperimentsEntityPropertiesGet()


### Example

```typescript
import {
    ExperimentsWarehouseNativeApi,
    Configuration,
    number,
    number
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new ExperimentsWarehouseNativeApi(configuration);

let limit: number; //Results per page (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsEntityPropertiesGet(
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

**Getconsolev1experimentsentitypropertiesResponse**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List Entity Property Sources response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsEntityPropertiesPost**
> ConsoleV1ExperimentsEntityPropertiesPost201Response consoleV1ExperimentsEntityPropertiesPost(entityPropertySourceCreationDto)


### Example

```typescript
import {
    ExperimentsWarehouseNativeApi,
    Configuration,
    EntityPropertySourceCreationDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new ExperimentsWarehouseNativeApi(configuration);

let entityPropertySourceCreationDto: EntityPropertySourceCreationDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsEntityPropertiesPost(
    entityPropertySourceCreationDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityPropertySourceCreationDto** | **EntityPropertySourceCreationDto**|  | |
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsEntityPropertiesPost201Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Create Entity Property Source response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsEntityPropertyNameDelete**
> ConsoleV1ExperimentsEntityPropertyNameDelete200Response consoleV1ExperimentsEntityPropertyNameDelete()


### Example

```typescript
import {
    ExperimentsWarehouseNativeApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new ExperimentsWarehouseNativeApi(configuration);

let name: string; //name (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsEntityPropertyNameDelete(
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

**ConsoleV1ExperimentsEntityPropertyNameDelete200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Delete Entity Property Source response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsEntityPropertyNameGet**
> ConsoleV1ExperimentsEntityPropertyNameGet200Response consoleV1ExperimentsEntityPropertyNameGet()


### Example

```typescript
import {
    ExperimentsWarehouseNativeApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new ExperimentsWarehouseNativeApi(configuration);

let name: string; //Name of entity property source (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsEntityPropertyNameGet(
    name,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | Name of entity property source | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsEntityPropertyNameGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get Entity Property Source response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsEntityPropertyNamePatch**
> ConsoleV1ExperimentsEntityPropertyNamePatch200Response consoleV1ExperimentsEntityPropertyNamePatch(entityPropertySourcePartialUpdateDto)


### Example

```typescript
import {
    ExperimentsWarehouseNativeApi,
    Configuration,
    EntityPropertySourcePartialUpdateDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new ExperimentsWarehouseNativeApi(configuration);

let name: string; //Name of entity property source (default to undefined)
let entityPropertySourcePartialUpdateDto: EntityPropertySourcePartialUpdateDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsEntityPropertyNamePatch(
    name,
    entityPropertySourcePartialUpdateDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityPropertySourcePartialUpdateDto** | **EntityPropertySourcePartialUpdateDto**|  | |
| **name** | [**string**] | Name of entity property source | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsEntityPropertyNamePatch200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Patch Entity Property Source response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsEntityPropertyNamePost**
> ConsoleV1ExperimentsEntityPropertyNamePost200Response consoleV1ExperimentsEntityPropertyNamePost(entityPropertySourceQueryUpdateDto)


### Example

```typescript
import {
    ExperimentsWarehouseNativeApi,
    Configuration,
    EntityPropertySourceQueryUpdateDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new ExperimentsWarehouseNativeApi(configuration);

let name: string; //name (default to undefined)
let entityPropertySourceQueryUpdateDto: EntityPropertySourceQueryUpdateDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsEntityPropertyNamePost(
    name,
    entityPropertySourceQueryUpdateDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityPropertySourceQueryUpdateDto** | **EntityPropertySourceQueryUpdateDto**|  | |
| **name** | [**string**] | name | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsEntityPropertyNamePost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Post Entity Property Source response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdLoadPulsePost**
> ConsoleV1ExperimentsIdLoadPulsePost200Response consoleV1ExperimentsIdLoadPulsePost(echidnaLoadPulseQueryDto)


### Example

```typescript
import {
    ExperimentsWarehouseNativeApi,
    Configuration,
    EchidnaLoadPulseQueryDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new ExperimentsWarehouseNativeApi(configuration);

let id: string; //id (default to undefined)
let echidnaLoadPulseQueryDto: EchidnaLoadPulseQueryDto; //
let refresh: 'full' | 'incremental' | 'metric'; // (optional) (default to 'full')
let metricIDs: Array<string>; // (optional) (default to undefined)
let ruleId: string; // (optional) (default to undefined)
let turboMode: boolean; // (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdLoadPulsePost(
    id,
    echidnaLoadPulseQueryDto,
    refresh,
    metricIDs,
    ruleId,
    turboMode,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **echidnaLoadPulseQueryDto** | **EchidnaLoadPulseQueryDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **refresh** | [**&#39;full&#39; | &#39;incremental&#39; | &#39;metric&#39;**]**Array<&#39;full&#39; &#124; &#39;incremental&#39; &#124; &#39;metric&#39;>** |  | (optional) defaults to 'full'|
| **metricIDs** | **Array&lt;string&gt;** |  | (optional) defaults to undefined|
| **ruleId** | [**string**] |  | (optional) defaults to undefined|
| **turboMode** | [**boolean**] |  | (optional) defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExperimentsIdLoadPulsePost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Load Pulse Success |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsIdPulseLoadHistoryGet**
> Getconsolev1experimentsidpulseloadhistoryResponse consoleV1ExperimentsIdPulseLoadHistoryGet()


### Example

```typescript
import {
    ExperimentsWarehouseNativeApi,
    Configuration,
    number,
    number
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new ExperimentsWarehouseNativeApi(configuration);

let id: string; //id (default to undefined)
let limit: number; //Results per page (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsIdPulseLoadHistoryGet(
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

**Getconsolev1experimentsidpulseloadhistoryResponse**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List Pulse Load History |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsQualifyingEventsGet**
> Getconsolev1experimentsqualifyingeventsResponse consoleV1ExperimentsQualifyingEventsGet()


### Example

```typescript
import {
    ExperimentsWarehouseNativeApi,
    Configuration,
    number,
    number
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new ExperimentsWarehouseNativeApi(configuration);

let limit: number; //Results per page (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsQualifyingEventsGet(
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

**Getconsolev1experimentsqualifyingeventsResponse**

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

# **consoleV1ExperimentsQualifyingEventsGet_0**
> Getconsolev1experimentsqualifyingeventsResponse consoleV1ExperimentsQualifyingEventsGet_0()


### Example

```typescript
import {
    ExperimentsWarehouseNativeApi,
    Configuration,
    number,
    number
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new ExperimentsWarehouseNativeApi(configuration);

let limit: number; //Results per page (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsQualifyingEventsGet_0(
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

**Getconsolev1experimentsqualifyingeventsResponse**

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

# **consoleV1ExperimentsQualifyingEventsNameDelete**
> ConsoleV1ExperimentsQualifyingEventsNameDelete200Response consoleV1ExperimentsQualifyingEventsNameDelete()


### Example

```typescript
import {
    ExperimentsWarehouseNativeApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new ExperimentsWarehouseNativeApi(configuration);

let name: string; //name (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsQualifyingEventsNameDelete(
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

**ConsoleV1ExperimentsQualifyingEventsNameDelete200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Delete Qualifying Event response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsQualifyingEventsNameDelete_0**
> ConsoleV1ExperimentsQualifyingEventsNameDelete200Response consoleV1ExperimentsQualifyingEventsNameDelete_0()


### Example

```typescript
import {
    ExperimentsWarehouseNativeApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new ExperimentsWarehouseNativeApi(configuration);

let name: string; //name (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsQualifyingEventsNameDelete_0(
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

**ConsoleV1ExperimentsQualifyingEventsNameDelete200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Delete Qualifying Event response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsQualifyingEventsNameGet**
> ConsoleV1ExperimentsQualifyingEventsNameGet200Response consoleV1ExperimentsQualifyingEventsNameGet()


### Example

```typescript
import {
    ExperimentsWarehouseNativeApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new ExperimentsWarehouseNativeApi(configuration);

let name: string; //name (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsQualifyingEventsNameGet(
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

**ConsoleV1ExperimentsQualifyingEventsNameGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Read Qualifying Event response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsQualifyingEventsNameGet_0**
> ConsoleV1ExperimentsQualifyingEventsNameGet200Response consoleV1ExperimentsQualifyingEventsNameGet_0()


### Example

```typescript
import {
    ExperimentsWarehouseNativeApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new ExperimentsWarehouseNativeApi(configuration);

let name: string; //name (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsQualifyingEventsNameGet_0(
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

**ConsoleV1ExperimentsQualifyingEventsNameGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Read Qualifying Event response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsQualifyingEventsNamePost**
> ConsoleV1ExperimentsQualifyingEventsNamePost200Response consoleV1ExperimentsQualifyingEventsNamePost(metricSourceUpdateContractDto)


### Example

```typescript
import {
    ExperimentsWarehouseNativeApi,
    Configuration,
    MetricSourceUpdateContractDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new ExperimentsWarehouseNativeApi(configuration);

let name: string; //name (default to undefined)
let metricSourceUpdateContractDto: MetricSourceUpdateContractDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsQualifyingEventsNamePost(
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

**ConsoleV1ExperimentsQualifyingEventsNamePost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Update Qualifying Event response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsQualifyingEventsNamePost_0**
> ConsoleV1ExperimentsQualifyingEventsNamePost200Response consoleV1ExperimentsQualifyingEventsNamePost_0(metricSourceUpdateContractDto)


### Example

```typescript
import {
    ExperimentsWarehouseNativeApi,
    Configuration,
    MetricSourceUpdateContractDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new ExperimentsWarehouseNativeApi(configuration);

let name: string; //name (default to undefined)
let metricSourceUpdateContractDto: MetricSourceUpdateContractDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsQualifyingEventsNamePost_0(
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

**ConsoleV1ExperimentsQualifyingEventsNamePost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Update Qualifying Event response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsQualifyingEventsPost**
> ConsoleV1ExperimentsQualifyingEventsPost201Response consoleV1ExperimentsQualifyingEventsPost(metricSourceCreationContractDto)


### Example

```typescript
import {
    ExperimentsWarehouseNativeApi,
    Configuration,
    MetricSourceCreationContractDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new ExperimentsWarehouseNativeApi(configuration);

let metricSourceCreationContractDto: MetricSourceCreationContractDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsQualifyingEventsPost(
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

**ConsoleV1ExperimentsQualifyingEventsPost201Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Create qualifying event response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ExperimentsQualifyingEventsPost_0**
> ConsoleV1ExperimentsQualifyingEventsPost201Response consoleV1ExperimentsQualifyingEventsPost_0(metricSourceCreationContractDto)


### Example

```typescript
import {
    ExperimentsWarehouseNativeApi,
    Configuration,
    MetricSourceCreationContractDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new ExperimentsWarehouseNativeApi(configuration);

let metricSourceCreationContractDto: MetricSourceCreationContractDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExperimentsQualifyingEventsPost_0(
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

**ConsoleV1ExperimentsQualifyingEventsPost201Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Create qualifying event response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

