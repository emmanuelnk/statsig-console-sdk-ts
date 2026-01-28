# SegmentsApi

All URIs are relative to *https://statsigapi.net*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**consoleV1SegmentsGet**](#consolev1segmentsget) | **GET** /console/v1/segments | List Segments|
|[**consoleV1SegmentsIdAddIdsPatch**](#consolev1segmentsidaddidspatch) | **PATCH** /console/v1/segments/{id}/add_ids | Add IDs to User Store ID List|
|[**consoleV1SegmentsIdArchivePut**](#consolev1segmentsidarchiveput) | **PUT** /console/v1/segments/{id}/archive | Archive Segment|
|[**consoleV1SegmentsIdConditionalPost**](#consolev1segmentsidconditionalpost) | **POST** /console/v1/segments/{id}/conditional | Update Segment Rules|
|[**consoleV1SegmentsIdDelete**](#consolev1segmentsiddelete) | **DELETE** /console/v1/segments/{id} | Delete Segment|
|[**consoleV1SegmentsIdGet**](#consolev1segmentsidget) | **GET** /console/v1/segments/{id} | Get Segment|
|[**consoleV1SegmentsIdIdListDelete**](#consolev1segmentsididlistdelete) | **DELETE** /console/v1/segments/{id}/id_list | Remove IDs from Segment|
|[**consoleV1SegmentsIdIdListGet**](#consolev1segmentsididlistget) | **GET** /console/v1/segments/{id}/id_list | Get IDs in a Segment|
|[**consoleV1SegmentsIdIdListPatch**](#consolev1segmentsididlistpatch) | **PATCH** /console/v1/segments/{id}/id_list | Add IDs to Segment|
|[**consoleV1SegmentsIdIdListResetPost**](#consolev1segmentsididlistresetpost) | **POST** /console/v1/segments/{id}/id_list/reset | Reset ID List Segment|
|[**consoleV1SegmentsIdIdlistMetadataGet**](#consolev1segmentsididlistmetadataget) | **GET** /console/v1/segments/{id}/idlist_metadata | Get ID List Metadata|
|[**consoleV1SegmentsIdRemoveIdsPatch**](#consolev1segmentsidremoveidspatch) | **PATCH** /console/v1/segments/{id}/remove_ids | Remove IDs from User Store ID List|
|[**consoleV1SegmentsIdReviewsReviewIDCommitPut**](#consolev1segmentsidreviewsreviewidcommitput) | **PUT** /console/v1/segments/{id}/reviews/{reviewID}/commit | Commit Segment Review|
|[**consoleV1SegmentsPost**](#consolev1segmentspost) | **POST** /console/v1/segments | Create Segment|

# **consoleV1SegmentsGet**
> Getconsolev1segmentsResponse consoleV1SegmentsGet()


### Example

```typescript
import {
    SegmentsApi,
    Configuration,
    number,
    number
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let limit: number; //Results per page (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1SegmentsGet(
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

**Getconsolev1segmentsResponse**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List Segments Success |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1SegmentsIdAddIdsPatch**
> ConsoleV1SegmentsIdAddIdsPatch200Response consoleV1SegmentsIdAddIdsPatch(segmentIDListUserStoreContractDto)

This endpoint has a limit of 1000 ids per request

### Example

```typescript
import {
    SegmentsApi,
    Configuration,
    SegmentIDListUserStoreContractDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let id: string; //id (default to undefined)
let segmentIDListUserStoreContractDto: SegmentIDListUserStoreContractDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1SegmentsIdAddIdsPatch(
    id,
    segmentIDListUserStoreContractDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **segmentIDListUserStoreContractDto** | **SegmentIDListUserStoreContractDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1SegmentsIdAddIdsPatch200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User Store ID List updated successfully. |  -  |
|**400** | Segment must be of type \&#39;user_store_id_list\&#39; to be modified on this endpoint |  -  |
|**404** | Segment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1SegmentsIdArchivePut**
> ConsoleV1SegmentsIdArchivePut200Response consoleV1SegmentsIdArchivePut()


### Example

```typescript
import {
    SegmentsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1SegmentsIdArchivePut(
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

**ConsoleV1SegmentsIdArchivePut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Archive Segment Success |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Segment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1SegmentsIdConditionalPost**
> ConsoleV1SegmentsIdConditionalPost200Response consoleV1SegmentsIdConditionalPost(segmentCreateContractDtoRulesInner)


### Example

```typescript
import {
    SegmentsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let id: string; //id (default to undefined)
let segmentCreateContractDtoRulesInner: Array<SegmentCreateContractDtoRulesInner>; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1SegmentsIdConditionalPost(
    id,
    segmentCreateContractDtoRulesInner,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **segmentCreateContractDtoRulesInner** | **Array<SegmentCreateContractDtoRulesInner>**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1SegmentsIdConditionalPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Rules Successfully Updated |  -  |
|**400** | Segment must be of type \&#39;rule_based\&#39; to be modified on this endpoint |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Segment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1SegmentsIdDelete**
> ConsoleV1SegmentsIdDelete200Response consoleV1SegmentsIdDelete()


### Example

```typescript
import {
    SegmentsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1SegmentsIdDelete(
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

**ConsoleV1SegmentsIdDelete200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Delete Segment Success |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Segment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1SegmentsIdGet**
> ConsoleV1SegmentsIdGet200Response consoleV1SegmentsIdGet()


### Example

```typescript
import {
    SegmentsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1SegmentsIdGet(
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

**ConsoleV1SegmentsIdGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get Segment Success |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Segment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1SegmentsIdIdListDelete**
> ConsoleV1SegmentsIdIdListDelete200Response consoleV1SegmentsIdIdListDelete()

This endpoint is rate limited to 900 requests /15m or 12 requests /10s.

### Example

```typescript
import {
    SegmentsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1SegmentsIdIdListDelete(
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

**ConsoleV1SegmentsIdIdListDelete200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Segment ids deleted successfully. |  -  |
|**400** | Segment must be of type \&#39;id_list\&#39; to be modified on this endpoint |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Segment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1SegmentsIdIdListGet**
> ConsoleV1SegmentsIdIdListGet200Response consoleV1SegmentsIdIdListGet()

This endpoint is rate limited to 100

### Example

```typescript
import {
    SegmentsApi,
    Configuration,
    number,
    number
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let id: string; // (default to undefined)
let limit: number; //Results per page (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1SegmentsIdIdListGet(
    id,
    limit,
    page,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **limit** | [**number**] | Results per page | (optional) defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1SegmentsIdIdListGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | IDs read successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1SegmentsIdIdListPatch**
> ConsoleV1SegmentsIdAddIdsPatch200Response consoleV1SegmentsIdIdListPatch(segmentIDListContractDto)

This endpoint is rate limited to 900 requests /15m or 12 requests /10s.

### Example

```typescript
import {
    SegmentsApi,
    Configuration,
    SegmentIDListContractDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let id: string; //id (default to undefined)
let segmentIDListContractDto: SegmentIDListContractDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1SegmentsIdIdListPatch(
    id,
    segmentIDListContractDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **segmentIDListContractDto** | **SegmentIDListContractDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1SegmentsIdAddIdsPatch200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Segment ids updated successfully. |  -  |
|**400** | Segment must be of type \&#39;id_list\&#39; to be modified on this endpoint |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Segment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1SegmentsIdIdListResetPost**
> ConsoleV1SegmentsIdIdListResetPost200Response consoleV1SegmentsIdIdListResetPost(segmentIDListResetContractDto)

Warning: Not atomic for big ID lists (> 1000)

### Example

```typescript
import {
    SegmentsApi,
    Configuration,
    SegmentIDListResetContractDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let id: string; //id (default to undefined)
let segmentIDListResetContractDto: SegmentIDListResetContractDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1SegmentsIdIdListResetPost(
    id,
    segmentIDListResetContractDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **segmentIDListResetContractDto** | **SegmentIDListResetContractDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1SegmentsIdIdListResetPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Reset ID List Segment Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1SegmentsIdIdlistMetadataGet**
> ConsoleV1SegmentsIdIdlistMetadataGet200Response consoleV1SegmentsIdIdlistMetadataGet()

This endpoint gets the metadata of the ID List.

### Example

```typescript
import {
    SegmentsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let id: string; // (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1SegmentsIdIdlistMetadataGet(
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

**ConsoleV1SegmentsIdIdlistMetadataGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ID List metadata read successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1SegmentsIdRemoveIdsPatch**
> ConsoleV1SegmentsIdIdListDelete200Response consoleV1SegmentsIdRemoveIdsPatch(segmentIDListUserStoreContractDto)

This endpoint has a limit of 1000 ids per request

### Example

```typescript
import {
    SegmentsApi,
    Configuration,
    SegmentIDListUserStoreContractDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let id: string; //id (default to undefined)
let segmentIDListUserStoreContractDto: SegmentIDListUserStoreContractDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1SegmentsIdRemoveIdsPatch(
    id,
    segmentIDListUserStoreContractDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **segmentIDListUserStoreContractDto** | **SegmentIDListUserStoreContractDto**|  | |
| **id** | [**string**] | id | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1SegmentsIdIdListDelete200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User Store ID List updated successfully. |  -  |
|**400** | Segment must be of type \&#39;user_store_id_list\&#39; to be modified on this endpoint |  -  |
|**404** | Segment not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1SegmentsIdReviewsReviewIDCommitPut**
> ConsoleV1SegmentsIdReviewsReviewIDCommitPut200Response consoleV1SegmentsIdReviewsReviewIDCommitPut()


### Example

```typescript
import {
    SegmentsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let id: string; // (default to undefined)
let reviewID: string; // (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1SegmentsIdReviewsReviewIDCommitPut(
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

**ConsoleV1SegmentsIdReviewsReviewIDCommitPut200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Commit an approved segment review |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1SegmentsPost**
> ConsoleV1SegmentsPost201Response consoleV1SegmentsPost(segmentCreateContractDto)


### Example

```typescript
import {
    SegmentsApi,
    Configuration,
    SegmentCreateContractDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let segmentCreateContractDto: SegmentCreateContractDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1SegmentsPost(
    segmentCreateContractDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **segmentCreateContractDto** | **SegmentCreateContractDto**|  | |
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1SegmentsPost201Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Create Segment Success |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

