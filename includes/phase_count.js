// import phases from phase function
function phase_count(title) {
	return `CASE 
		WHEN 
			 LOWER(REPLACE(${title}, ' ', '')) IN (`${phase_8}`)
			THEN "8 Final Inspections"
		WHEN
			 LOWER(REPLACE(${title}, ' ', '')) IN (`${phase_7}`)
			THEN "7 Internal Finish"
		WHEN 
			 LOWER(REPLACE(${title}, ' ', '')) IN (`${phase_6}`)
			THEN "6 Internal Trim"
		
		WHEN
			 LOWER(REPLACE(${title}, ' ', '')) IN (`${phase_5}`)
			THEN "5 Internal Rough"
		
		WHEN 
			 LOWER(REPLACE(${title}, ' ', '')) IN (`${phase_4}`)
			THEN "4 Framing"

		WHEN
			 LOWER(REPLACE(${title}, ' ', '')) IN (`${phase_3}`)
			THEN "3 Slab/Block/Beam"

		WHEN
			 LOWER(REPLACE(${title}, ' ', '')) IN (`${phase_2}`)
			THEN "2 Site/Pad"

		WHEN 
			 LOWER(REPLACE(${title}, ' ', '')) IN (`${phase_1}`)
			THEN "1 Permitting"
		
		ELSE NULL
		END`;
}


module.exports = { phase_count };
