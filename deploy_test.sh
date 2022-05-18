#!/bin/bash
cat dataform_test.json > dataform.json
mv replace/whitestone_master_schedule_test.sqlx definitions/reporting/ && mv definitions/reporting/whitestone_master_schedule_prod.sqlx replace/
dataform run
