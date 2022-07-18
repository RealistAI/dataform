const {SecretManagerServiceClient} = require('@google-cloud/secret-manager');

const name = 'projects/michael-gilbert-dev/secrets/${secret_id}/versions/latest';

// Instantiates a client
const client = new SecretManagerServiceClient();

async function accessSecretVersion(projectId, secretId, versionId) {
  const [version] = await client.accessSecretVersion({
    name: name,
  });

  // Extract the payload as a string.
  const payload = version.payload.data.toString();
  
  // snippet is showing how to access the secret material.
  console.info(`Payload: ${payload}`);
  const username = payload['username'] 
  const password = payload['password'] 
  const dataset = payload['dataset'] 
  const bucket_name = payload['bucket_name']
  return username, password, bucket_name, dataset;
}
module.exports = accessSecretVersion();
