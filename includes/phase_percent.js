function phase_percent_complete(job, phase) {
	return`COALESCE(
                 SAFE_DIVIDE((
                 SELECT
                   COUNT(*)
                 FROM
                   dataform.schedule_clean a
                 WHERE
                   ${job} = a.job_name
                   AND '${phase}' = a.phase
                   AND a.completed = True), (
                 SELECT
                   COUNT(*)
                 FROM
                   dataform.schedule_clean a
                 WHERE
                   ${job} = a.job_name
                   AND '${phase}' = a.phase)), 0)`;
}

module.exports = { phase_percent_complete };
