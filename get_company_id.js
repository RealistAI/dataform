function get_company_id(message) {
	const company = JSON.parse(message);
	const company_name = company['company_id'];
        console.log("The company ID is " + company_id);
	    return company_id;
    }


module.exports = { get_company_id };
