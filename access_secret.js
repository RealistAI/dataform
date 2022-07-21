const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');

function access_secret(company_name) {
	const name = `projects/michael-gilbert-dev/secrets/company_name/versions/latest`;
	// Instantiates a client
	company_info = accessSecretVersion('michael-gilbert-dev', company_name, 'latest');
	return company_info;
}

async function accessSecretVersion(projects, secret_id, versions) {
	const client = new SecretManagerServiceClient();
	const [version] = await client.accessSecretVersion({
		name: company_name,
	})

  // Extract the payload as a string.
  const payload = version.payload.data.toString();
  
  // snippet is showing how to access the secret material.
  console.info(`Payload: ${payload}`);
  let company_info = {
	  'username': payload['username'],
	  'password': payload['password'],
	  'dataset': payload['dataset'],
	  'bucket_name': payload['bucket_name']
	};
  return company_info;
//  const username = payload['username'] 
//  const password = payload['password'] 
//  const dataset = payload['dataset'] 
//  const bucket_name = payload['bucket_name']
//  return username, password, bucket_name, dataset;
}
module.exports = {
	access_secret,
	accessSecretVersion
};
