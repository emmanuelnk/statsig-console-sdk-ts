# ReportsApi

All URIs are relative to *https://statsigapi.net*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**consoleV1ReportsGet**](#consolev1reportsget) | **GET** /console/v1/reports | Get Reports|

# **consoleV1ReportsGet**
> ConsoleV1ReportsGet200Response consoleV1ReportsGet()


### Example

```typescript
import {
    ReportsApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let type: 'first_exposures' | 'pulse_daily' | 'topline_impact_daily'; //report type (default to undefined)
let date: string; //date for the report (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ReportsGet(
    type,
    date,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**&#39;first_exposures&#39; | &#39;pulse_daily&#39; | &#39;topline_impact_daily&#39;**]**Array<&#39;first_exposures&#39; &#124; &#39;pulse_daily&#39; &#124; &#39;topline_impact_daily&#39;>** | report type | defaults to undefined|
| **date** | [**string**] | date for the report | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ReportsGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get Reports |  -  |
|**400** | Data is not available |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

