#!/bin/bash
cat dataform_test.json > dataform.json
sudo mv replace/whitestone_master_schedule_staging_test.sqlx definitions/staging/
sudo mv definitions/staging/whitestone_master_schedule_staging_prod.sqlx replace/
sudo mv replace/whitestone_master_schedule_test.sqlx definitions/reporting/
sudo mv definitions/reporting/whitestone_master_schedule_prod.sqlx replace/
sudo mv replace/whitestone_private_equity_schedule_test.sqlx definitions/reporting/  
sudo mv definitions/reporting/whitestone_private_equity_schedule_prod.sqlx replace/
dataform run
