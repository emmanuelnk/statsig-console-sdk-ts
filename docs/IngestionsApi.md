# IngestionsApi

All URIs are relative to *https://statsigapi.net*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**consoleV1IngestionBackfillPost**](#consolev1ingestionbackfillpost) | **POST** /console/v1/ingestion/backfill | Backfill Ingestion|
|[**consoleV1IngestionConnectionDatabricksPost**](#consolev1ingestionconnectiondatabrickspost) | **POST** /console/v1/ingestion/connection/databricks | Create Ingestion Databricks|
|[**consoleV1IngestionDelete**](#consolev1ingestiondelete) | **DELETE** /console/v1/ingestion | Delete Ingestion Source|
|[**consoleV1IngestionEventsCountGet**](#consolev1ingestioneventscountget) | **GET** /console/v1/ingestion/events/count | Get Ingestion Event Count|
|[**consoleV1IngestionEventsDeltaGet**](#consolev1ingestioneventsdeltaget) | **GET** /console/v1/ingestion/events/delta | Get Ingestion Event Delta Ledger|
|[**consoleV1IngestionGet**](#consolev1ingestionget) | **GET** /console/v1/ingestion | Read Ingestion|
|[**consoleV1IngestionPatch**](#consolev1ingestionpatch) | **PATCH** /console/v1/ingestion | Update Ingestion Source|
|[**consoleV1IngestionPost**](#consolev1ingestionpost) | **POST** /console/v1/ingestion | Create Ingestion Source|
|[**consoleV1IngestionRunsGet**](#consolev1ingestionrunsget) | **GET** /console/v1/ingestion/runs | List Ingestion Runs|
|[**consoleV1IngestionRunsIdGet**](#consolev1ingestionrunsidget) | **GET** /console/v1/ingestion/runs/{id} | Read Ingestion Run|
|[**consoleV1IngestionScheduleGet**](#consolev1ingestionscheduleget) | **GET** /console/v1/ingestion/schedule | Read Ingestion Schedule|
|[**consoleV1IngestionSchedulePost**](#consolev1ingestionschedulepost) | **POST** /console/v1/ingestion/schedule | Update Ingestion Schedule|
|[**consoleV1IngestionStatusGet**](#consolev1ingestionstatusget) | **GET** /console/v1/ingestion/status | List Ingestions Status|

# **consoleV1IngestionBackfillPost**
> ConsoleV1IngestionBackfillPost200Response consoleV1IngestionBackfillPost(ingestionBackfillContractDto)


### Example

```typescript
import {
    IngestionsApi,
    Configuration,
    IngestionBackfillContractDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new IngestionsApi(configuration);

let ingestionBackfillContractDto: IngestionBackfillContractDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1IngestionBackfillPost(
    ingestionBackfillContractDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ingestionBackfillContractDto** | **IngestionBackfillContractDto**|  | |
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1IngestionBackfillPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Backfill Ingestion Success |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1IngestionConnectionDatabricksPost**
> ConsoleV1IngestionConnectionDatabricksPost200Response consoleV1IngestionConnectionDatabricksPost(ingestionCreateDatabricksConnectionContractDto)


### Example

```typescript
import {
    IngestionsApi,
    Configuration,
    IngestionCreateDatabricksConnectionContractDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new IngestionsApi(configuration);

let ingestionCreateDatabricksConnectionContractDto: IngestionCreateDatabricksConnectionContractDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1IngestionConnectionDatabricksPost(
    ingestionCreateDatabricksConnectionContractDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ingestionCreateDatabricksConnectionContractDto** | **IngestionCreateDatabricksConnectionContractDto**|  | |
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1IngestionConnectionDatabricksPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Create Ingestion Databricks Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1IngestionDelete**
> ConsoleV1IngestionDelete200Response consoleV1IngestionDelete()


### Example

```typescript
import {
    IngestionsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new IngestionsApi(configuration);

let type: 'redshift' | 'bigquery-v2' | 'snowflake-v2' | 'databricks' | 'azure-synapse' | 's3' | 'athena' | 'adls'; // (default to undefined)
let dataset: 'Events' | 'Metrics' | 'entity_properties' | 'export_exposures' | 'export_events'; // (default to undefined)
let sourceName: string; // (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1IngestionDelete(
    type,
    dataset,
    sourceName,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**&#39;redshift&#39; | &#39;bigquery-v2&#39; | &#39;snowflake-v2&#39; | &#39;databricks&#39; | &#39;azure-synapse&#39; | &#39;s3&#39; | &#39;athena&#39; | &#39;adls&#39;**]**Array<&#39;redshift&#39; &#124; &#39;bigquery-v2&#39; &#124; &#39;snowflake-v2&#39; &#124; &#39;databricks&#39; &#124; &#39;azure-synapse&#39; &#124; &#39;s3&#39; &#124; &#39;athena&#39; &#124; &#39;adls&#39;>** |  | defaults to undefined|
| **dataset** | [**&#39;Events&#39; | &#39;Metrics&#39; | &#39;entity_properties&#39; | &#39;export_exposures&#39; | &#39;export_events&#39;**]**Array<&#39;Events&#39; &#124; &#39;Metrics&#39; &#124; &#39;entity_properties&#39; &#124; &#39;export_exposures&#39; &#124; &#39;export_events&#39;>** |  | defaults to undefined|
| **sourceName** | [**string**] |  | (optional) defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1IngestionDelete200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Delete Ingestion Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1IngestionEventsCountGet**
> ConsoleV1IngestionEventsCountGet200Response consoleV1IngestionEventsCountGet()


### Example

```typescript
import {
    IngestionsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new IngestionsApi(configuration);

let startDate: string; //Expected valid date in the form of YYYY-MM-DD (default to undefined)
let endDate: string; //Expected valid date in the form of YYYY-MM-DD (default to undefined)
let sourceName: string; // (optional) (default to undefined)
let eventName: string; // (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1IngestionEventsCountGet(
    startDate,
    endDate,
    sourceName,
    eventName,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **startDate** | [**string**] | Expected valid date in the form of YYYY-MM-DD | defaults to undefined|
| **endDate** | [**string**] | Expected valid date in the form of YYYY-MM-DD | defaults to undefined|
| **sourceName** | [**string**] |  | (optional) defaults to undefined|
| **eventName** | [**string**] |  | (optional) defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1IngestionEventsCountGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get Ingestion Event Count Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1IngestionEventsDeltaGet**
> ConsoleV1IngestionEventsDeltaGet200Response consoleV1IngestionEventsDeltaGet()


### Example

```typescript
import {
    IngestionsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new IngestionsApi(configuration);

let startDate: string; //Expected valid date in the form of YYYY-MM-DD (default to undefined)
let endDate: string; //Expected valid date in the form of YYYY-MM-DD (default to undefined)
let sourceName: string; // (optional) (default to undefined)
let eventName: string; // (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1IngestionEventsDeltaGet(
    startDate,
    endDate,
    sourceName,
    eventName,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **startDate** | [**string**] | Expected valid date in the form of YYYY-MM-DD | defaults to undefined|
| **endDate** | [**string**] | Expected valid date in the form of YYYY-MM-DD | defaults to undefined|
| **sourceName** | [**string**] |  | (optional) defaults to undefined|
| **eventName** | [**string**] |  | (optional) defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1IngestionEventsDeltaGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get Ingestion Event Delta Ledger Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1IngestionGet**
> ConsoleV1IngestionGet200Response consoleV1IngestionGet()


### Example

```typescript
import {
    IngestionsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new IngestionsApi(configuration);

let type: 'redshift' | 'bigquery-v2' | 'snowflake-v2' | 'databricks' | 'azure-synapse' | 's3' | 'athena' | 'adls'; // (default to undefined)
let dataset: 'Events' | 'Metrics' | 'entity_properties' | 'export_exposures' | 'export_events'; // (default to undefined)
let sourceName: string; // (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1IngestionGet(
    type,
    dataset,
    sourceName,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**&#39;redshift&#39; | &#39;bigquery-v2&#39; | &#39;snowflake-v2&#39; | &#39;databricks&#39; | &#39;azure-synapse&#39; | &#39;s3&#39; | &#39;athena&#39; | &#39;adls&#39;**]**Array<&#39;redshift&#39; &#124; &#39;bigquery-v2&#39; &#124; &#39;snowflake-v2&#39; &#124; &#39;databricks&#39; &#124; &#39;azure-synapse&#39; &#124; &#39;s3&#39; &#124; &#39;athena&#39; &#124; &#39;adls&#39;>** |  | defaults to undefined|
| **dataset** | [**&#39;Events&#39; | &#39;Metrics&#39; | &#39;entity_properties&#39; | &#39;export_exposures&#39; | &#39;export_events&#39;**]**Array<&#39;Events&#39; &#124; &#39;Metrics&#39; &#124; &#39;entity_properties&#39; &#124; &#39;export_exposures&#39; &#124; &#39;export_events&#39;>** |  | defaults to undefined|
| **sourceName** | [**string**] |  | (optional) defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1IngestionGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Read Ingestion Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1IngestionPatch**
> ConsoleV1IngestionPatch200Response consoleV1IngestionPatch(ingestionUpdateContractDto)


### Example

```typescript
import {
    IngestionsApi,
    Configuration,
    IngestionUpdateContractDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new IngestionsApi(configuration);

let ingestionUpdateContractDto: IngestionUpdateContractDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1IngestionPatch(
    ingestionUpdateContractDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ingestionUpdateContractDto** | **IngestionUpdateContractDto**|  | |
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1IngestionPatch200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Update Ingestion Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1IngestionPost**
> ConsoleV1IngestionPost200Response consoleV1IngestionPost(ingestionSourceCreateContractDto)


### Example

```typescript
import {
    IngestionsApi,
    Configuration,
    IngestionSourceCreateContractDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new IngestionsApi(configuration);

let ingestionSourceCreateContractDto: IngestionSourceCreateContractDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1IngestionPost(
    ingestionSourceCreateContractDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ingestionSourceCreateContractDto** | **IngestionSourceCreateContractDto**|  | |
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1IngestionPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Create Ingestion Success |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1IngestionRunsGet**
> Getconsolev1ingestionrunsResponse consoleV1IngestionRunsGet()


### Example

```typescript
import {
    IngestionsApi,
    Configuration,
    ConsoleV1IngestionRunsGetPageParameter
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new IngestionsApi(configuration);

let page: ConsoleV1IngestionRunsGetPageParameter; // (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1IngestionRunsGet(
    page,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | **ConsoleV1IngestionRunsGetPageParameter** |  | (optional) defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**Getconsolev1ingestionrunsResponse**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List Ingestion Runs Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1IngestionRunsIdGet**
> ConsoleV1IngestionRunsIdGet200Response consoleV1IngestionRunsIdGet()


### Example

```typescript
import {
    IngestionsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new IngestionsApi(configuration);

let id: string; //id (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1IngestionRunsIdGet(
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

**ConsoleV1IngestionRunsIdGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Read Ingestion Run Success |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1IngestionScheduleGet**
> ConsoleV1IngestionScheduleGet200Response consoleV1IngestionScheduleGet()


### Example

```typescript
import {
    IngestionsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new IngestionsApi(configuration);

let dataset: 'Events' | 'Metrics' | 'entity_properties' | 'export_exposures' | 'export_events'; // (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1IngestionScheduleGet(
    dataset,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dataset** | [**&#39;Events&#39; | &#39;Metrics&#39; | &#39;entity_properties&#39; | &#39;export_exposures&#39; | &#39;export_events&#39;**]**Array<&#39;Events&#39; &#124; &#39;Metrics&#39; &#124; &#39;entity_properties&#39; &#124; &#39;export_exposures&#39; &#124; &#39;export_events&#39;>** |  | defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1IngestionScheduleGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Read Ingestion Schedule Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1IngestionSchedulePost**
> ConsoleV1IngestionSchedulePost200Response consoleV1IngestionSchedulePost(ingestionScheduleUpdateContractDto)


### Example

```typescript
import {
    IngestionsApi,
    Configuration,
    IngestionScheduleUpdateContractDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new IngestionsApi(configuration);

let ingestionScheduleUpdateContractDto: IngestionScheduleUpdateContractDto; //
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1IngestionSchedulePost(
    ingestionScheduleUpdateContractDto,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ingestionScheduleUpdateContractDto** | **IngestionScheduleUpdateContractDto**|  | |
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**ConsoleV1IngestionSchedulePost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Update Ingestion Schedule Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1IngestionStatusGet**
> Getconsolev1ingestionstatusResponse consoleV1IngestionStatusGet()


### Example

```typescript
import {
    IngestionsApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new IngestionsApi(configuration);

let startDate: string; //Expected valid date in the form of YYYY-MM-DD (default to undefined)
let endDate: string; //Expected valid date in the form of YYYY-MM-DD (default to undefined)
let source: string; // (optional) (default to undefined)
let dataset: 'Events' | 'Metrics' | 'entity_properties' | 'export_exposures' | 'export_events'; // (optional) (default to undefined)
let status: 'IMPORT_SUCCESSFUL' | 'ROWS_INSERTED' | 'LOADED_EMPTY_DATA' | 'IMPORT_SCHEDULED' | 'IMPORT_RESCHEDULED' | 'IMPORT_STARTED' | 'FILE_CREATED' | 'DOWNLOAD_COMPLETED' | 'BACKFILL_REQUESTED' | 'ERROR' | 'CONNECTION_CONFIG_ERROR' | 'SSH_ERROR' | 'QUERY_CONSTRUCTION_ERROR' | 'INTERNAL_WRITE_ERROR_METRICS' | 'INTERNAL_WRITE_ERROR_EVENTS' | 'INTERNAL_WRITE_ERROR_EXPOSURES' | 'QUERY_ERROR' | 'SETUP_ERROR' | 'AUTHENTICATION_ERROR' | 'CONNECTION_ERROR' | 'BULK_LOAD_ERROR' | 'BULK_LOAD_SUCCESSFUL' | '%Other'; // (optional) (default to undefined)
let statuses: Array<'IMPORT_SUCCESSFUL' | 'ROWS_INSERTED' | 'LOADED_EMPTY_DATA' | 'IMPORT_SCHEDULED' | 'IMPORT_RESCHEDULED' | 'IMPORT_STARTED' | 'FILE_CREATED' | 'DOWNLOAD_COMPLETED' | 'BACKFILL_REQUESTED' | 'ERROR' | 'CONNECTION_CONFIG_ERROR' | 'SSH_ERROR' | 'QUERY_CONSTRUCTION_ERROR' | 'INTERNAL_WRITE_ERROR_METRICS' | 'INTERNAL_WRITE_ERROR_EVENTS' | 'INTERNAL_WRITE_ERROR_EXPOSURES' | 'QUERY_ERROR' | 'SETUP_ERROR' | 'AUTHENTICATION_ERROR' | 'CONNECTION_ERROR' | 'BULK_LOAD_ERROR' | 'BULK_LOAD_SUCCESSFUL' | '%Other'>; // (optional) (default to undefined)
let xRespectReviewSettings: string; //Optional header to respect review settings for mutation endpoints. (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1IngestionStatusGet(
    startDate,
    endDate,
    source,
    dataset,
    status,
    statuses,
    xRespectReviewSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **startDate** | [**string**] | Expected valid date in the form of YYYY-MM-DD | defaults to undefined|
| **endDate** | [**string**] | Expected valid date in the form of YYYY-MM-DD | defaults to undefined|
| **source** | [**string**] |  | (optional) defaults to undefined|
| **dataset** | [**&#39;Events&#39; | &#39;Metrics&#39; | &#39;entity_properties&#39; | &#39;export_exposures&#39; | &#39;export_events&#39;**]**Array<&#39;Events&#39; &#124; &#39;Metrics&#39; &#124; &#39;entity_properties&#39; &#124; &#39;export_exposures&#39; &#124; &#39;export_events&#39;>** |  | (optional) defaults to undefined|
| **status** | [**&#39;IMPORT_SUCCESSFUL&#39; | &#39;ROWS_INSERTED&#39; | &#39;LOADED_EMPTY_DATA&#39; | &#39;IMPORT_SCHEDULED&#39; | &#39;IMPORT_RESCHEDULED&#39; | &#39;IMPORT_STARTED&#39; | &#39;FILE_CREATED&#39; | &#39;DOWNLOAD_COMPLETED&#39; | &#39;BACKFILL_REQUESTED&#39; | &#39;ERROR&#39; | &#39;CONNECTION_CONFIG_ERROR&#39; | &#39;SSH_ERROR&#39; | &#39;QUERY_CONSTRUCTION_ERROR&#39; | &#39;INTERNAL_WRITE_ERROR_METRICS&#39; | &#39;INTERNAL_WRITE_ERROR_EVENTS&#39; | &#39;INTERNAL_WRITE_ERROR_EXPOSURES&#39; | &#39;QUERY_ERROR&#39; | &#39;SETUP_ERROR&#39; | &#39;AUTHENTICATION_ERROR&#39; | &#39;CONNECTION_ERROR&#39; | &#39;BULK_LOAD_ERROR&#39; | &#39;BULK_LOAD_SUCCESSFUL&#39; | &#39;%Other&#39;**]**Array<&#39;IMPORT_SUCCESSFUL&#39; &#124; &#39;ROWS_INSERTED&#39; &#124; &#39;LOADED_EMPTY_DATA&#39; &#124; &#39;IMPORT_SCHEDULED&#39; &#124; &#39;IMPORT_RESCHEDULED&#39; &#124; &#39;IMPORT_STARTED&#39; &#124; &#39;FILE_CREATED&#39; &#124; &#39;DOWNLOAD_COMPLETED&#39; &#124; &#39;BACKFILL_REQUESTED&#39; &#124; &#39;ERROR&#39; &#124; &#39;CONNECTION_CONFIG_ERROR&#39; &#124; &#39;SSH_ERROR&#39; &#124; &#39;QUERY_CONSTRUCTION_ERROR&#39; &#124; &#39;INTERNAL_WRITE_ERROR_METRICS&#39; &#124; &#39;INTERNAL_WRITE_ERROR_EVENTS&#39; &#124; &#39;INTERNAL_WRITE_ERROR_EXPOSURES&#39; &#124; &#39;QUERY_ERROR&#39; &#124; &#39;SETUP_ERROR&#39; &#124; &#39;AUTHENTICATION_ERROR&#39; &#124; &#39;CONNECTION_ERROR&#39; &#124; &#39;BULK_LOAD_ERROR&#39; &#124; &#39;BULK_LOAD_SUCCESSFUL&#39; &#124; &#39;%Other&#39;>** |  | (optional) defaults to undefined|
| **statuses** | **Array<&#39;IMPORT_SUCCESSFUL&#39; &#124; &#39;ROWS_INSERTED&#39; &#124; &#39;LOADED_EMPTY_DATA&#39; &#124; &#39;IMPORT_SCHEDULED&#39; &#124; &#39;IMPORT_RESCHEDULED&#39; &#124; &#39;IMPORT_STARTED&#39; &#124; &#39;FILE_CREATED&#39; &#124; &#39;DOWNLOAD_COMPLETED&#39; &#124; &#39;BACKFILL_REQUESTED&#39; &#124; &#39;ERROR&#39; &#124; &#39;CONNECTION_CONFIG_ERROR&#39; &#124; &#39;SSH_ERROR&#39; &#124; &#39;QUERY_CONSTRUCTION_ERROR&#39; &#124; &#39;INTERNAL_WRITE_ERROR_METRICS&#39; &#124; &#39;INTERNAL_WRITE_ERROR_EVENTS&#39; &#124; &#39;INTERNAL_WRITE_ERROR_EXPOSURES&#39; &#124; &#39;QUERY_ERROR&#39; &#124; &#39;SETUP_ERROR&#39; &#124; &#39;AUTHENTICATION_ERROR&#39; &#124; &#39;CONNECTION_ERROR&#39; &#124; &#39;BULK_LOAD_ERROR&#39; &#124; &#39;BULK_LOAD_SUCCESSFUL&#39; &#124; &#39;%Other&#39;>** |  | (optional) defaults to undefined|
| **xRespectReviewSettings** | [**string**] | Optional header to respect review settings for mutation endpoints. | (optional) defaults to undefined|


### Return type

**Getconsolev1ingestionstatusResponse**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List Ingestions Status Success |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

