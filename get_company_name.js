function get_company_name(message) {
	const company = JSON.parse(message);
	const company_name = company['company_name'];
	console.log("The company name is " + company_name);
	return company_name;
}

module.exports = { get_company_name };
