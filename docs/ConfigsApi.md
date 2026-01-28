# ConfigsApi

All URIs are relative to *https://statsigapi.net*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**consoleV1ExposureCountGet**](#consolev1exposurecountget) | **GET** /console/v1/exposure_count | Read Exposure Event Count|

# **consoleV1ExposureCountGet**
> ConsoleV1ExposureCountGet200Response consoleV1ExposureCountGet()

Get the count of exposure events recently received by Statsig.

### Example

```typescript
import {
    ConfigsApi,
    Configuration,
    ConsoleV1ExposureCountGetExperimentsParameter,
    ConsoleV1ExposureCountGetExperimentsParameter,
    ConsoleV1ExposureCountGetExperimentsParameter
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new ConfigsApi(configuration);

let experiments: ConsoleV1ExposureCountGetExperimentsParameter; // (optional) (default to undefined)
let gates: ConsoleV1ExposureCountGetExperimentsParameter; // (optional) (default to undefined)
let dynamicConfigs: ConsoleV1ExposureCountGetExperimentsParameter; // (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1ExposureCountGet(
    experiments,
    gates,
    dynamicConfigs,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **experiments** | **ConsoleV1ExposureCountGetExperimentsParameter** |  | (optional) defaults to undefined|
| **gates** | **ConsoleV1ExposureCountGetExperimentsParameter** |  | (optional) defaults to undefined|
| **dynamicConfigs** | **ConsoleV1ExposureCountGetExperimentsParameter** |  | (optional) defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1ExposureCountGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get Experiment Success |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

