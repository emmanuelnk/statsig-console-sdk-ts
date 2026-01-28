# RoleContractDtoPermissions

The permissions of the role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invitation_access** | **boolean** |  | [optional] [default to undefined]
**create_configs** | **boolean** |  | [optional] [default to undefined]
**edit_or_delete_configs** | **boolean** |  | [optional] [default to undefined]
**launch_to_production** | **boolean** |  | [optional] [default to undefined]
**launch_or_disable_configs** | **boolean** |  | [optional] [default to undefined]
**start_experiments** | **boolean** |  | [optional] [default to undefined]
**create_or_edit_templates** | **boolean** |  | [optional] [default to undefined]
**create_or_edit_dashboards** | **boolean** |  | [optional] [default to undefined]
**create_teams** | **boolean** |  | [optional] [default to undefined]
**edit_dynamic_config_schemas** | **boolean** |  | [optional] [default to undefined]
**create_release_pipelines** | **boolean** |  | [optional] [default to undefined]
**approve_required_review_release_pipeline_phase** | **boolean** |  | [optional] [default to undefined]
**self_approve_review** | **boolean** |  | [optional] [default to undefined]
**approve_reviews** | **boolean** |  | [optional] [default to undefined]
**bypass_reviews_for_overrides** | **boolean** |  | [optional] [default to undefined]
**bypass_precommit_webhook** | **boolean** |  | [optional] [default to undefined]
**metric_management** | **boolean** |  | [optional] [default to undefined]
**event_dimensions_access** | **boolean** |  | [optional] [default to undefined]
**verify_metrics** | **boolean** |  | [optional] [default to undefined]
**use_metrics_explorer** | **boolean** |  | [optional] [default to undefined]
**local_metrics** | **boolean** |  | [optional] [default to undefined]
**manage_alerts** | **boolean** |  | [optional] [default to undefined]
**integrations_edit_access** | **boolean** |  | [optional] [default to undefined]
**source_connection_and_creation** | **boolean** |  | [optional] [default to undefined]
**whn_connection** | **boolean** |  | [optional] [default to undefined]
**data_warehouse_ingestion_and_exports_edit_access** | **boolean** |  | [optional] [default to undefined]
**edit_and_tag_configs_with_core_tag** | **boolean** |  | [optional] [default to undefined]
**reset_experiments** | **boolean** |  | [optional] [default to undefined]
**manual_whn_reload** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { RoleContractDtoPermissions } from '@emmanuelnk/statsig-console-sdk-ts';

const instance: RoleContractDtoPermissions = {
    invitation_access,
    create_configs,
    edit_or_delete_configs,
    launch_to_production,
    launch_or_disable_configs,
    start_experiments,
    create_or_edit_templates,
    create_or_edit_dashboards,
    create_teams,
    edit_dynamic_config_schemas,
    create_release_pipelines,
    approve_required_review_release_pipeline_phase,
    self_approve_review,
    approve_reviews,
    bypass_reviews_for_overrides,
    bypass_precommit_webhook,
    metric_management,
    event_dimensions_access,
    verify_metrics,
    use_metrics_explorer,
    local_metrics,
    manage_alerts,
    integrations_edit_access,
    source_connection_and_creation,
    whn_connection,
    data_warehouse_ingestion_and_exports_edit_access,
    edit_and_tag_configs_with_core_tag,
    reset_experiments,
    manual_whn_reload,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
