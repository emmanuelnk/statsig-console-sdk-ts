# UsersApi

All URIs are relative to *https://statsigapi.net*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**consoleV1UsersEmailGet**](#consolev1usersemailget) | **GET** /console/v1/users/{email} | Get user by email|
|[**consoleV1UsersEmailPost**](#consolev1usersemailpost) | **POST** /console/v1/users/{email} | Update user|
|[**consoleV1UsersGet**](#consolev1usersget) | **GET** /console/v1/users | List Users|
|[**consoleV1UsersIdIdGet**](#consolev1usersididget) | **GET** /console/v1/users/id/{id} | Get user by ID|
|[**consoleV1UsersInvitePost**](#consolev1usersinvitepost) | **POST** /console/v1/users/invite | Invite users|
|[**consoleV1UsersTeamsGet**](#consolev1usersteamsget) | **GET** /console/v1/users/teams | List Teams|
|[**consoleV1UsersTeamsIdDelete**](#consolev1usersteamsiddelete) | **DELETE** /console/v1/users/teams/{id} | Delete Team|
|[**consoleV1UsersTeamsIdGet**](#consolev1usersteamsidget) | **GET** /console/v1/users/teams/{id} | Get Team|
|[**consoleV1UsersTeamsIdPatch**](#consolev1usersteamsidpatch) | **PATCH** /console/v1/users/teams/{id} | Update team|
|[**consoleV1UsersTeamsPost**](#consolev1usersteamspost) | **POST** /console/v1/users/teams | Create Team|

# **consoleV1UsersEmailGet**
> ConsoleV1UsersEmailGet200Response consoleV1UsersEmailGet()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let email: string; //email (default to undefined)

const { status, data } = await apiInstance.consoleV1UsersEmailGet(
    email
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **email** | [**string**] | email | defaults to undefined|


### Return type

**ConsoleV1UsersEmailGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get user response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1UsersEmailPost**
> ConsoleV1UsersEmailPost200Response consoleV1UsersEmailPost(userUpdateDto)


### Example

```typescript
import {
    UsersApi,
    Configuration,
    UserUpdateDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let email: string; //email (default to undefined)
let userUpdateDto: UserUpdateDto; //

const { status, data } = await apiInstance.consoleV1UsersEmailPost(
    email,
    userUpdateDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userUpdateDto** | **UserUpdateDto**|  | |
| **email** | [**string**] | email | defaults to undefined|


### Return type

**ConsoleV1UsersEmailPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Update user response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**403** | Forbidden. The request was valid, but the server is refusing action. You might not have the necessary permissions to access the resource. |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1UsersGet**
> Getconsolev1usersResponse consoleV1UsersGet()


### Example

```typescript
import {
    UsersApi,
    Configuration,
    number,
    number
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let limit: number; //Results per page (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)
let includeStaleMembers: boolean; //Whether to include stale company-user membership edges. Defaults to false, which returns only effective current members (matching the Settings UI). (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1UsersGet(
    limit,
    page,
    includeStaleMembers
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Results per page | (optional) defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to undefined|
| **includeStaleMembers** | [**boolean**] | Whether to include stale company-user membership edges. Defaults to false, which returns only effective current members (matching the Settings UI). | (optional) defaults to undefined|


### Return type

**Getconsolev1usersResponse**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List users response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1UsersIdIdGet**
> ConsoleV1UsersEmailGet200Response consoleV1UsersIdIdGet()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let id: string; //id (default to undefined)

const { status, data } = await apiInstance.consoleV1UsersIdIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|


### Return type

**ConsoleV1UsersEmailGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get user response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |
|**404** | Not Found. The requested resource could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1UsersInvitePost**
> ConsoleV1UsersInvitePost200Response consoleV1UsersInvitePost(userInvitesDto)

Invite a list of users with assigned roles and teams. To avoid spamming, invitation emails are not sent. Invitee will see invitation notification in-app after logging in.

### Example

```typescript
import {
    UsersApi,
    Configuration,
    UserInvitesDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userInvitesDto: UserInvitesDto; //

const { status, data } = await apiInstance.consoleV1UsersInvitePost(
    userInvitesDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userInvitesDto** | **UserInvitesDto**|  | |


### Return type

**ConsoleV1UsersInvitePost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Invite user response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1UsersTeamsGet**
> Getconsolev1usersteamsResponse consoleV1UsersTeamsGet()


### Example

```typescript
import {
    UsersApi,
    Configuration,
    number,
    number
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let limit: number; //Results per page (optional) (default to undefined)
let page: number; //Page number (optional) (default to undefined)

const { status, data } = await apiInstance.consoleV1UsersTeamsGet(
    limit,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Results per page | (optional) defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to undefined|


### Return type

**Getconsolev1usersteamsResponse**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get teams response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1UsersTeamsIdDelete**
> ConsoleV1UsersTeamsIdDelete200Response consoleV1UsersTeamsIdDelete()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let id: string; //id (default to undefined)

const { status, data } = await apiInstance.consoleV1UsersTeamsIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|


### Return type

**ConsoleV1UsersTeamsIdDelete200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Delete team response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1UsersTeamsIdGet**
> ConsoleV1UsersTeamsIdGet200Response consoleV1UsersTeamsIdGet()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let id: string; //id (default to undefined)

const { status, data } = await apiInstance.consoleV1UsersTeamsIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | id | defaults to undefined|


### Return type

**ConsoleV1UsersTeamsIdGet200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get team response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1UsersTeamsIdPatch**
> ConsoleV1UsersTeamsIdPatch200Response consoleV1UsersTeamsIdPatch(teamPartialUpdateDto)

Replace the team definition. Use GET to fetch current data if you intend to add fields without overwriting existing values.

### Example

```typescript
import {
    UsersApi,
    Configuration,
    TeamPartialUpdateDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let id: string; //id (default to undefined)
let teamPartialUpdateDto: TeamPartialUpdateDto; //

const { status, data } = await apiInstance.consoleV1UsersTeamsIdPatch(
    id,
    teamPartialUpdateDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **teamPartialUpdateDto** | **TeamPartialUpdateDto**|  | |
| **id** | [**string**] | id | defaults to undefined|


### Return type

**ConsoleV1UsersTeamsIdPatch200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Update team response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consoleV1UsersTeamsPost**
> ConsoleV1UsersTeamsPost200Response consoleV1UsersTeamsPost(teamCreationDto)


### Example

```typescript
import {
    UsersApi,
    Configuration,
    TeamCreationDto
} from '@emmanuelnk/statsig-console-sdk-ts';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let teamCreationDto: TeamCreationDto; //

const { status, data } = await apiInstance.consoleV1UsersTeamsPost(
    teamCreationDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **teamCreationDto** | **TeamCreationDto**|  | |


### Return type

**ConsoleV1UsersTeamsPost200Response**

### Authorization

[STATSIG-API-KEY](../README.md#STATSIG-API-KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Create team response |  -  |
|**400** | Invalid request. Please check the request input and try again. |  -  |
|**401** | This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

