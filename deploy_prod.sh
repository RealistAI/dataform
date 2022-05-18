#!/bin/bash
cat dataform_prod.json > dataform.json
mv replace/whitestone_master_schedule_prod.sqlx definitions/reporting/ && mv definitions/reporting/whitestone_master_schedule_test.sqlx replace/
dataform run
