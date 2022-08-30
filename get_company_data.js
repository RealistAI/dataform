// Import the Google  Cloud client library
const {BigQuery} = require('@google-cloud/bigquery');
const {project_id_1} = require('./includes/constants.js');
const bigquery = new BigQuery();

async function get_company_data(company_id) {

  const query = `SELECT company_id, phase, schedule_item
    FROM \`${project_id_1}.brain_test.schedule_info\` 
    WHERE company_id = ${'company_id'}`;
  const options = {
    query: query,
  };

  // Run the query as a job
  
  const [job] = await bigquery.createQueryJob(options);
  // Wait for the query to finish
  
  const rows = await job.getQueryResults();
  return rows
}

module.exports = { get_company_data };
