# LayerOverridesPatchDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** | **string** | Add a layer override | [default to undefined]
**conditionalOverrides** | [**Array&lt;LayerOverridesDtoConditionalOverridesInner&gt;**](LayerOverridesDtoConditionalOverridesInner.md) |  | [default to undefined]
**idOverrides** | [**Array&lt;LayerOverridesDtoIdOverridesInner&gt;**](LayerOverridesDtoIdOverridesInner.md) |  | [default to undefined]

## Example

```typescript
import { LayerOverridesPatchDto } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: LayerOverridesPatchDto = {
    op,
    conditionalOverrides,
    idOverrides,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
