// Import the Google  Cloud client library
const {BigQuery} = require('@google-cloud/bigquery');
const {project_id_1} = require('./includes/constants.js');
const bigquery = new BigQuery();


let company_id = 'placeholder_6e49847f-11f7-462d-bb34-61ff460184ec';

async function get_company_data(company_id) {
  // Queries the U.S. given names dataset for the state of Texas

  const query = `SELECT company_id, phase, schedule_item
    FROM \`${project_id_1}.brain_test.schedule_info\` 
    WHERE company_id = '${company_id}'`;
  
  // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query
  const options = {
    query: query,
    // Location must match that of the dataset(s) referenced in the query.
    location: 'US',
  };

  // Run the query as a job
  const [job] = await bigquery.createQueryJob(options);
  console.log(`Job ${job.id} started.`);

  // Wait for the query to finish
  const [rows] = await job.getQueryResults();

  // Print the results
  console.log('Rows:');
  rows.forEach(row => console.log(row));

  const phase_1 = rows.find(({phase})=> phase = 'phase_1')
  console.log(phase_1);
}
get_company_data(company_id);
//module.exports = { get_company_data };
