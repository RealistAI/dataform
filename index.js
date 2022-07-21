const {execSync} = require("child_process");
const { get_company_name } = require('./get_company_name.js');
const { access_secret, accessSecretVersion } = require('./access_secret.js');
/**
 * Triggered from a message on a Cloud Pub/Sub topic.
 *
 * @param {!Object} event Event payload.
 * @param {!Object} context Metadata for the event.
 */
exports.helloPubSub = (event, context) => {
	const message = event.data
		? Buffer.from(event.data, 'base64').toString()
    		: event.data;
		company_name = get_company_name(message);
		company_info = access_secret(company_name);
		console.log(company_info);
//  execSync("./deploy_test.sh");

};
