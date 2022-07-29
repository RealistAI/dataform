const {execSync} = require("child_process");
const { get_company_name } = require('./get_company_name.js');
const { accessSecret} = require('./access_secret.js');
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
    const project_id = `michael-gilbert-dev`

	const message = event.data
		? Buffer.from(event.data, 'base64').toString()
    		: event.data;
		company_name = get_company_name(message);
	if (company_name == 'whitestone'){
		console.log ('Getting company secrets');
		company_info = accessSecret(project_id, company_name);
//  execSync("./deploy_test.sh");
        } else {
	  return;
        }
};
