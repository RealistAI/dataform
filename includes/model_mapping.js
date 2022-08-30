function model_mapping(model) {
        return `CASE
                WHEN
                         LOWER(REPLACE(${model}, ' ', '')) IN  ("barcelona", "barcelonalh", "barcelonarh", "barcelonanolanai", "barcelonar", "barcelonatemplate") 
                        THEN "Barcelona"
		WHEN
                         LOWER(REPLACE(${model}, ' ', '')) IN  ("barcelonaplat", "barcelonaplatlh", "barcelonaplatrh", "barcelonaplatinumtemplate")
                        THEN "Barcelona Platinum"
		WHEN
                         LOWER(REPLACE(${model}, ' ', '')) IN  ("custom", "customized")
                        THEN "Custom"
		WHEN                         
			 LOWER(REPLACE(${model}, ' ', '')) IN ("duplex", "duplextemplate")
                        THEN "Duplex"
		WHEN                         
			 LOWER(REPLACE(${model}, ' ', '')) IN ("granada", "granadatemplate", "granadalh")
                        THEN "Granada"
		WHEN
                         LOWER(REPLACE(${model}, ' ', '')) IN ("granadaplatinumtemplate", "granadaplatinumrh", "granadaplatinumlh")
                        THEN "Granada Platinum"
		WHEN                          
			 LOWER(REPLACE(${model}, ' ', '')) IN ("laescapada", "laescapadatemplate", "laescapadarh", "laescap", "laescapadacustmrhpool", "laescapadalh")
                        THEN "La Escapada"
		WHEN                          
			 LOWER(REPLACE(${model}, ' ', '')) IN ("laspalmas", "laspalmastemplate", "laspalmaslh", "laspalmasrh")
                        THEN "Las Palmas"
		WHEN                          
			 LOWER(REPLACE(${model}, ' ', '')) IN ("marbellaplatlh", "marbellaplatrh", "marbellaplatlh", "marbellapl.lh", "marbellaplatrh", "marbellaplatinumlh", "marbellaplatinumrh", "marbellaplatinumtemplate", "marbellaplat", "marbellapl", "marbellapla", "marbplatlh")
                        THEN "Marbella Platinum"
		WHEN     LOWER(REPLACE(${model}, ' ', '')) IN ("marbella8'rh", "marbella8'rh", "marbellarh", "marbellalh", "marbellatemplate", "marbella")
                        THEN "Marbella"
		WHEN
                         LOWER(REPLACE(${model}, ' ', '')) =  "multifamily"
                        THEN "Multi Family"
		WHEN
                         LOWER(REPLACE(${model}, ' ', '')) =  "sevilla"
                        THEN "Sevilla"
		WHEN
                         LOWER(REPLACE(${model}, ' ', '')) IN ("sevillaplatinumtemplate", "sevillaplat")
                        THEN "Sevilla Platinum"
		WHEN
                         LOWER(REPLACE(${model}, ' ', '')) IN ("valencialh", "valenciarh", "customvalenciarh", "customvalencialh", "valencialwht", "valencialhbronze", "valenciarhbronze", "valenciar", "valencial", "valenciatemplate", "valencia", "valencrh")
                        THEN "Valencia"
		WHEN
                         LOWER(REPLACE(${model}, ' ', '')) IN ("valenciaplat")
                        THEN "Valencia Platinum"
		WHEN
                         LOWER(REPLACE(${model}, ' ', '')) IN ("vistagranda", "vistagrandeetemplate", "vistagranderh")
                        THEN "Vista Granda"
		WHEN
                         LOWER(REPLACE(${model}, ' ', '')) =  "knightandaluciatemplate"
                        THEN "Knight Andalucia"
	        ELSE NULL
                END`;
}

module.exports = { model_mapping };
