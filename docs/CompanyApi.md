# CompanyApi

All URIs are relative to *https://statsigapi.net*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**consoleV1CompanyGet**](#consolev1companyget) | **GET** /console/v1/company | Get Company Info|

# **consoleV1CompanyGet**
> ConsoleV1CompanyGet200Response consoleV1CompanyGet()


### Example

```typescript
import {
    CompanyApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new CompanyApi(configuration);

const { status, data } = await apiInstance.consoleV1CompanyGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ConsoleV1CompanyGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get company info response |  -  |
|**403** | Forbidden resource |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

