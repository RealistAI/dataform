function cost_code_mapping(scheduled_item) {
	return `CASE
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "501-1 - Plans"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "Civil Engineering Review") true
			THEN "501-2 - Engineer Stamp - Lot Specific"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "501-3- Private P. inspection"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "Septic design") true
			THEN "501-4 - Septic System Design"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "501-5 - Boundary Survey"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "501-6 - Final Survey"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "501-7 - Blower Door Test"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "501-8- Compaction Test"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "Energy Calcs") true
			THEN "501-9- E-Calcs"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "502-1 - Seawall Permit"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "502-2 - PrePermit Fee"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "502-3 - Impact Fee"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "502-4 - Permit Fee"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "502-5 - Solid Waste Fee"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "502-6 - Septic Permit"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "502-7- Storm water Inspection"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "502-8- Debris Inspection Fee"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "504-1 - Hub & Tack"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "504-10 - Erosion Control"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "504-11- Felt Fence"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "504-2 - Dumpster"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "504-3 - Scrape Lot-Build Pad"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "504-4 - Dirt Fill"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "504-5 - Final Grade"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "504-6 - Stucco Grade"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "504-7 - Culvert & Driveway Cut"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "504-8- Specialty Grade"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "505-1 Slab/Block/Beam"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "505-2 Trusses"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "505-3 Framing Labor"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "505-4 - Framing Material"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "505-5 - Roofing Material & Install"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "505-6 - Gutters Install"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "505-7 - Sofit & Facia"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "509-1 - Well"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "509-2 - Filters"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "510 - Septic"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "511-1 - Electrical Rough on Slab"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "511-2 - Electrical Rough-In"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "511-3 - Electrical Trim-Out"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "511-4 - Lighting Package"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "512-1 - Underground Plambing"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "512-2 - Plumbing Rough-In"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "513 - Drywall"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "512-3 - Plumbing Trim"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "514 - Stucco"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "515 - Paint"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "515-1 - Paint Final (10%)"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "516 - Windows & Ext Doors"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "516-1- Win & ext Doors Install"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "516-2- Shutters"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "516-3- Garage Door"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "517-1 - HVAC Rough"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "517-2 - HVAC Trim"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "518 - Insulation & Air Sealing"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "519 - Interior Trim, Doors&Hardw"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "520-1 - Cabinets Material"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "520-2 - Counter Top"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "520-4 - Cabinet Install"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "521-1 - Tile & install (Magnisi)"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "521-1 - Tile & install"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "521-1 - Tile & install"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "521-2 - Carpeting & Install"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "522-1 - Sod Package"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "523 - Driveway"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "525 - Pest/Termite Trtmt"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "526 - Appliances"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "527 - Appliances Install"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "528-1 - Rough Clean 1"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "528-2 - Rough Clean 2"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "528-3 - Final Clean"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "529 - Punch Out, Corrections, cleaning"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "530 - Closets & Built ins"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "534-1 - Builder's Risk Insurance"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "534-2-  Liability Insurance"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "538 - Warranty"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "540 - Site Supervision"
		WHEN CONTAINS_SUBSTR(${scheduled_item}, "") true
			THEN "541- Utilities cost"
		ELSE "UNKNOWN cost_code"
		END`;
}

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
