const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');

function accessSecret(project_name, company_name) {

    const name = `projects/${project_name}/secrets/${company_name}/versions/latest`;

    // Import the Secret Manager Library
     const {SecretManagerServiceClient} = require('@google-cloud/secret-manager');

    // Instantiate the client
    const client = new SecretManagerServiceClient();

    async function accessSecretVersion() {
        const [version] = await client.accessSecretVersion({
            name: name
        });

        // Extract the payload as a string
        const payload = version.payload.data.toString();


    }

    accessSecretVersion();
}
module.exports = {
	accessSecret
};
