function model_mapping(model) {
        return `CASE
                WHEN
                         LOWER(REPLACE(${model}, ' ', '')) IN  ("barcelona", "barcelona lh", "barcelona rh", "barcelona no lanai", "barcelona r", "barcelona template") 
                        THEN "Barcelona"
		WHEN
                         LOWER(REPLACE(${model}, ' ', '')) IN  ("barcelona plat", "barcelona plat lh", "barcelona plat rh", "barcelona platinum template")
                        THEN "Barcelona Platinum"
		WHEN
                         LOWER(REPLACE(${model}, ' ', '')) IN  ("custom", "CUSTOMIZED")
                        THEN "Custom"
		WHEN                         
			 LOWER(REPLACE(${model}, ' ', '')) IN ("duplex", "duplex template")
                        THEN "Duplex"
		WHEN                         
			 LOWER(REPLACE(${model}, ' ', '')) IN ("granada", "granada template")
                        THEN "Granada"
		WHEN
                         LOWER(REPLACE(${model}, ' ', '')) =  "granada platinum template"
                        THEN "Granada Platinum"
		WHEN                          
			 LOWER(REPLACE(${model}, ' ', '')) IN ("la escapada", "la escapada template")
                        THEN "La Escapada"
		WHEN                          
			 LOWER(REPLACE(${model}, ' ', '')) IN ("las palmas", "las palmas template")
                        THEN "Las Palmas"
		WHEN                          
			 LOWER(REPLACE(${model}, ' ', '')) IN ("marbella plat lh", "marbella plat rh", "marbella plat. rh", "marbella pl.lh", "marbella plat.rh", "marbella platinum lh", "marbella platinum rh", "marbella platinum template")
                        THEN "Marbella Platinum"
		WHEN     LOWER(REPLACE(${model}, ' ', '')) IN ("marbella 8'rh", "marbella 8' rh", "marbella rh", "marbella lh", "marbella template")
                        THEN "Marbella"
		WHEN
                         LOWER(REPLACE(${model}, ' ', '')) =  "multifamily"
                        THEN "Multi Family"
		WHEN
                         LOWER(REPLACE(${model}, ' ', '')) =  "sevilla"
                        THEN "Sevilla"
		WHEN
                         LOWER(REPLACE(${model}, ' ', '')) =  "sevilla platinum template"
                        THEN "Sevilla Platinum"
		WHEN
                         LOWER(REPLACE(${model}, ' ', '')) IN ("valencia lh", "valencia rh", "custom valencia rh", "custom valencia lh", "valencia l wht", "valencia lh bronze", "valencia rh bronze", "valencia r", "valencia l", "valencia template")
                        THEN "Valencia"
		WHEN
                         LOWER(REPLACE(${model}, ' ', '')) IN ("vista granda", "vista grandee template")
                        THEN "Vista Granda"
		WHEN
                         LOWER(REPLACE(${model}, ' ', '')) =  "knight andalucia template"
                        THEN "Knight Andalucia"
	        ELSE NULL
                END`;
}

module.exports = { model_mapping };
