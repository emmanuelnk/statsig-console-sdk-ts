# ChangeValidationApi

All URIs are relative to *https://statsigapi.net*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**consoleV1ChangeValidationMessagePatch**](#consolev1changevalidationmessagepatch) | **PATCH** /console/v1/change_validation/message | Update change validation message|
|[**consoleV1ChangeValidationPost**](#consolev1changevalidationpost) | **POST** /console/v1/change_validation | Change Validation|

# **consoleV1ChangeValidationMessagePatch**
> ConsoleV1ChangeValidationMessagePatch200Response consoleV1ChangeValidationMessagePatch(changeValidationUpdateMessageDto)


### Example

```typescript
import {
    ChangeValidationApi,
    Configuration,
    ChangeValidationUpdateMessageDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ChangeValidationApi(configuration);

let changeValidationUpdateMessageDto: ChangeValidationUpdateMessageDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ChangeValidationMessagePatch(
    changeValidationUpdateMessageDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changeValidationUpdateMessageDto** | **ChangeValidationUpdateMessageDto**|  | |
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ChangeValidationMessagePatch200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Update Change Validation Message Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1ChangeValidationPost**
> ConsoleV1ChangeValidationPost200Response consoleV1ChangeValidationPost(changeValidationDto)

See how change validation works [here](https://docs.statsig.com/guides/setting-up-reviews#configuring-custom-approval-workflows-pre-commit-webhooks)

### Example

```typescript
import {
    ChangeValidationApi,
    Configuration,
    ChangeValidationDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ChangeValidationApi(configuration);

let changeValidationDto: ChangeValidationDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ChangeValidationPost(
    changeValidationDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changeValidationDto** | **ChangeValidationDto**|  | |
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ChangeValidationPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Change Validation Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

