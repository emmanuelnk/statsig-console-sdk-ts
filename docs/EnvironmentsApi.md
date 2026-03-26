# EnvironmentsApi

All URIs are relative to *https://statsigapi.net*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**consoleV1EnvironmentsGet**](#consolev1environmentsget) | **GET** /console/v1/environments | Get Environments|
|[**consoleV1EnvironmentsPost**](#consolev1environmentspost) | **POST** /console/v1/environments | Update Environments|

# **consoleV1EnvironmentsGet**
> ConsoleV1EnvironmentsGet200Response consoleV1EnvironmentsGet()


### Example

```typescript
import {
    EnvironmentsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new EnvironmentsApi(configuration);

const { status, data } = await apiInstance.consoleV1EnvironmentsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ConsoleV1EnvironmentsGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get Environments Response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1EnvironmentsPost**
> ConsoleV1EnvironmentsPost200Response consoleV1EnvironmentsPost(environmentsUpdateContractDto)


### Example

```typescript
import {
    EnvironmentsApi,
    Configuration,
    EnvironmentsUpdateContractDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new EnvironmentsApi(configuration);

let environmentsUpdateContractDto: EnvironmentsUpdateContractDto; //

const { status, data } = await apiInstance.consoleV1EnvironmentsPost(
    environmentsUpdateContractDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **environmentsUpdateContractDto** | **EnvironmentsUpdateContractDto**|  | |


### Return type

**ConsoleV1EnvironmentsPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Update Environments Response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

