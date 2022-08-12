// Import the Google  Cloud client library
const {BigQuery} = require('@google-cloud/bigquery');
const bigquery = new BigQuery();
 

async function queryDestinationTable(company_name) {
  // Queries the U.S. given names dataset for the state of Texas

  const query = `SELECT com_info.company_id, sch_info.phase, sch_info.schedule_item
    FROM \`michael-gilbert-dev.brain_test.company_info\` AS com_info
    JOIN \`michael-gilbert-dev.brain_test.schedule_info\` AS sch_info 
    ON com_info.company_id = sch_info.company_id
    WHERE com_info.company_id = ${company_name}`;
  
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
}

module.exports = { queryDestinationTable };
