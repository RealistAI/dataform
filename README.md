# Setup
After you pull the repository make sure to fetch origin.
After that run `npm install` to install dataform and dependencies.
Then you can run `git checkout features` to checkout the features branch which is the testing environment.

# Documentation for generic formatting

all things that pertain to whitestone, such as phase count and some sql files.

These are all the places that whitestone is references specifically, and where we would need to change them to be generic.

The first thing that you need to do is, change the whitestone variable in the index.js. The pathing to the index.js is: "dev/dataform/index.js". When in the index.js, you will need to find the comment on line 20, and fill in the quotes on line 21 with the company name that has been given to you by the client. then save the file and exit.

Second, you will need to remove whitestone from  deploy_test.sh, you will find the deploy_test.sh at: "dev/dataform/deploy_test.sh". There are some references to files in this file, changes those references to not have whitestone in the name. such as "whitestone_master_scedule_staging_test.sqlx" to "master_schedule_staging_test.sqlx", there are a total of 4 different references in this file, that will need to be changed.

Third, you will need to remove whitestone from  deploy_prod.sh, you will find the deploy_prod.sh at: "dev/dataform/deploy_prod.sh". There are some references to files in this file, changes those references to not have whitestone in the name. such as "whitestone_master_scedule_staging_prod.sqlx" to "master_schedule_staging_prod.sqlx", there are a total of 4 different references in this file, that will need to be changed.

Next, there are two files in the replace folder that will need to be changed. These files are located at: "dev/dataform/replace". Both the "whitestone_master_schedule_prod.sqlx" and the "whitestone_master_schedule_staging_prod.sqlx" will need to be changed to reflect a generic file structure.

Next is the zipcode_map.js file. This file hold data that is whitestone specific, and will need to be modified for a generic template. this folder is located at: "dev/dataform/includes/zipcode_map.js". 

Next is the phase_count.js file. You can find this file at "dev/dataform/includes/phase_count.js" This file also contains whitestone specific content that will need to be changed and updated to reflect a more generic format.

Next is the model_map.js, located at "dev/dataform/includes/model_map.js". This file contains whitestone specific parameters that will need to be changed to reflect a more generic format. 

Next is a file in the staging folder which is located at: "dev/dataform/definitions/staging/whitestone_master_schedule_staging_test.sqlx". This is the file referenced in the third paragraph that will also need to be changed for our generic format.

Finally, there are six files in the reporting directory which can be found at: "dev/dataform/definitions/reporting". these six files are: "whitestone_private_equity_schedule.sqlx", "whitestone_master_schedule_test.sqlx", "whitestone_job_schedule.sqlx", "private_equity_report.sqlx", "private_equity_job_schedule.sqlx", and "orcd_county_model_charts.sqlx ".

# References to michael-gilbert-dev

The first reference is in the index.js folder, which is located at: "dev/dataform/index.js". The project is referenced on line 14. Must be changed to yet to be determined constant.

The next reference is in the dataform_test.json, which is located at: "dev/dataform/dataform_test.json", on line 5 this must be changed to a yet to be determined constant.

The next reference is in the dataform_prod.json, which is located at: "dev/dataform/dataform_prod.json", on line 5 this must be changed to a yet to be determined constant.

The next reference is in the dataform.json, which is located at: "dev/dataform/dataform.json", on line 5 this must be changed to a yet to be determined constant.

The final place is in the constants file, which is located at: "dev/dataform/includes/constants.js"on line 1. This will also need to be changed to the constant that is to be determined.
