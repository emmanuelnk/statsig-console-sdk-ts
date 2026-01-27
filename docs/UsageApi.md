# UsageApi

All URIs are relative to *https://statsigapi.net*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**consoleV1ProjectUsageBillingReportGet**](#consolev1projectusagebillingreportget) | **GET** /console/v1/project/usage_billing/report | Get Report in CSV format|

# **consoleV1ProjectUsageBillingReportGet**
> File consoleV1ProjectUsageBillingReportGet()


### Example

```typescript
import {
    UsageApi,
    Configuration
} from 'statsig-console-sdk-nodejs';

const configuration = new Configuration();
const apiInstance = new UsageApi(configuration);

let end: number; //Unix timestamp in ms (default to undefined)
let start: number; //Unix timestamp in ms (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ProjectUsageBillingReportGet(
    end,
    start,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **end** | [**number**] | Unix timestamp in ms | defaults to undefined|
| **start** | [**number**] | Unix timestamp in ms | (optional) defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**File**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/csv, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Report URL generated successfully |  -  |
|**400** | Data is not available |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

