import {SecretManagerServiceClient} from '@google-cloud/secret-manager'

/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
const name = 'projects/michael-gilbert-dev/secrets/${secret_id}/versions/latest';

// Imports the Secret Manager library
//const {SecretManagerServiceClient} = require('@google-cloud/secret-manager');

// Instantiates a client
const client = new SecretManagerServiceClient();

export function accessSecretVersion(projectId, secretId, versionId) {
  const [version] = client.accessSecretVersion({
    name: name,
  });

  // Extract the payload as a string.
  const payload = version.payload.data.toString();
  
  // WARNING: Do not print the secret in a production environment - this
  // snippet is showing how to access the secret material.
  console.info(`Payload: ${payload}`);
  const username = payload['username'] 
  const password = payload['password'] 
  const dataset = payload['dataset'] 
  const bucket_name = payload['bucket_name']
  return username, password, bucket_name, dataset;
}
