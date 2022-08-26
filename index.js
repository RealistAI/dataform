const { execSync } = require("child_process");
const { get_company_id } = require('./get_company_id.js');
const { accessSecret} = require('./access_secret.js');
const { get_company_data } = require('./get_company_data.js');
const { project_id } = require('./includes/constants.js');

/**
 * Triggered from a message on a Cloud Pub/Sub topic.
 *
 * @param {!Object} event Event payload.
 * @param {!Object} context Metadata for the event.
 */
exports.helloPubSub = (event, context) => {
    // Hard coded value for Project Id for now. In the future, this should be
    // defined as an evironment variable in the Cloud Function and read during
    // runtime

        const message = event.data
	    ? Buffer.from(event.data, 'base64').toString()
    	    : event.data;
	    company_id = get_company_id(message);
	    get_comapny_data(company_id);
	    console.log ('Getting company secrets');
	    company_info = accessSecret(`${project_id}`, company_id);
//  execSync("./deploy_test.sh");
       
};
