function color_mapping(color_code) {
	return `CASE
		WHEN ${color_code} = "000000" --Black
			THEN "On Hold"
		WHEN ${color_code} = "FF0000" --RED
			THEN "On Hold"
		WHEN ${color_code} = "2CD1D2" --Sky Blue
			THEN "On Hold"
		WHEN ${color_code} = "008000" --Green
			THEN "Under Construction"
		WHEN ${color_code} = "2222DD" --Blue
			THEN "In Permitting"
		WHEN ${color_code} = "442121" --Brown
			THEN "On Hold"
		WHEN ${color_code} = "DDC817" --Yellow
			THEN "Pre-Permitting"
		WHEN ${color_code} = "6F116F" --Purple
			THEN "On Hold"
		WHEN ${color_code} = "72609F" --Purple
			THEN "On Hold"
		ELSE "UNKNOWN COLOR"
		END`;
}

module.exports = { color_mapping };
