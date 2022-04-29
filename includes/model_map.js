function custom_mapping(model) {
	return `CASE
		WHEN CONTAINS_SUBSTR(${model}, 'CUSTOMIZED') = true
			THEN "Custom"
		WHEN CONTAINS_SUBSTR(${model}, 'custom') = true
			THEN "Custom"
		WHEN CONTAINS_SUBSTR(${model}, 'Custm') = true
			THEN "Custom"
		ELSE ${model}
		END`;
}
function model_mapping(model) {
	return `CASE
		WHEN CONTAINS_SUBSTR(${model}, 'Barcelona') = true
			THEN "Barcelona"		
		WHEN CONTAINS_SUBSTR(${model}, 'Duplex') = true
			THEN "Duplex"		
		WHEN CONTAINS_SUBSTR(${model}, 'Duplex 3/2') = true
			THEN "Duplex"		
		WHEN CONTAINS_SUBSTR(${model}, 'Granada') = true
			THEN "Granada"
		WHEN CONTAINS_SUBSTR(${model}, 'La Escap.') = true
			THEN "La Escapada"
		WHEN CONTAINS_SUBSTR(${model}, 'La Escapada') = true
			THEN "La Escapada"
		WHEN CONTAINS_SUBSTR(${model}, 'Las Palmas') = true
			THEN "Las Palmas"
		WHEN CONTAINS_SUBSTR(${model}, 'Marbella') = true
			THEN "Marbella"
		WHEN CONTAINS_SUBSTR(${model}, 'Sevilla') = true
			THEN "Sevilla"
		WHEN CONTAINS_SUBSTR(${model}, 'Valencia') = true
			THEN "Valencia"
		WHEN CONTAINS_SUBSTR(${model}, 'Vista Grande') = true
			THEN "Vista Grande"
		WHEN CONTAINS_SUBSTR(${model}, 'Multifamily') = true
			THEN "Multifamily"
		WHEN CONTAINS_SUBSTR(${model}, 'Custom') = true
			THEN "Custom"
		ELSE ${model}
		END`;
}

module.exports = {
	custom_mapping,
	model_mapping
};
