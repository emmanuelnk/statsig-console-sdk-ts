# WarehouseConnectionsApi

All URIs are relative to *https://statsigapi.net*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**consoleV1WhConnectionsPatch**](#consolev1whconnectionspatch) | **PATCH** /console/v1/wh_connections | Update Warehouse Connection Parameters|

# **consoleV1WhConnectionsPatch**
> ConsoleV1WhConnectionsPatch200Response consoleV1WhConnectionsPatch(whConnectionUpdateDto)


### Example

```typescript
import {
    WarehouseConnectionsApi,
    Configuration,
    WhConnectionUpdateDto
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new WarehouseConnectionsApi(configuration);

let whConnectionUpdateDto: WhConnectionUpdateDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1WhConnectionsPatch(
    whConnectionUpdateDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **whConnectionUpdateDto** | **WhConnectionUpdateDto**|  | |
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1WhConnectionsPatch200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Connection updated successfully |  -  |
|**403** | Insufficient permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

