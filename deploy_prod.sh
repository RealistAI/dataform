#!/bin/bash
cat dataform_prod.json > dataform.json
mv replace/whitestone_master_schedule_staging_prod.sqlx definitions/staging/
mv definitions/staging/whitestone_master_schedule_staging_test.sqlx replace/
mv replace/whitestone_master_schedule_prod.sqlx definitions/reporting/
mv definitions/reporting/whitestone_master_schedule_test.sqlx replace/
mv replace/whitestone_private_equity_schedule_prod.sqlx definitions/reporting/
mv definitions/reporting/whitestone_private_equity_schedule_test.sqlx replace/
dataform run
