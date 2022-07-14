import {accessSecretVersion} from './access_secret.js';

import { execSync } from "child_process";
/**
 * Triggered from a message on a Cloud Pub/Sub topic.
 *
 * @param {!Object} event Event payload.
 * @param {!Object} context Metadata for the event.
 */
async function helloPubSub(event, context) {
  const message = event.data
    ? Buffer.from(event.data, 'base64').toString()
    : company_name = event['company_name'];
    if (company_name != null){
	const access_secret = accessSecretVersion('michael-gilber-dev', company_name, 'latest');
    }
  console.log(message);
  console.log(typeof access_secret);
  execSync("./deploy_test.sh");

};

