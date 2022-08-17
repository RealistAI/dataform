function tag_order(tag) {
	return `CASE 
		WHEN 
			 LOWER(REPLACE(${tag}, ' ', '')) = "2-permitapprovaldraw"
			THEN "A. Permit Approval Draw"
    	  	WHEN 
			 LOWER(REPLACE(${tag}, ' ', '')) = "3-siteworkdraw"
			THEN "B. Site Work Draw"
		WHEN
                         LOWER(REPLACE(${tag}, ' ', '')) = "4-slabpourdraw"
                        THEN "C. Slab Pour Draw"
		WHEN
                         LOWER(REPLACE(${tag}, ' ', '')) = "5-block&beamdraw"
                        THEN "D. Block & Beam Draw"
		WHEN
                         LOWER(REPLACE(${tag}, ' ', '')) = "framingwindowsroofingdraw"
                        THEN "E. Framing Windows Roofing Draw"
		WHEN
                         LOWER(REPLACE(${tag}, ' ', '')) = "drywallstuccopaintdraw"
                        THEN "F. Drywall Stucco Paint Draw"
	        WHEN
                         LOWER(REPLACE(${tag}, ' ', '')) = "flooringcabinetcountertopsdraw"
                        THEN "G. Flooring Cabinet Countertops Draw"
		WHEN
                         LOWER(REPLACE(${tag}, ' ', '')) = "hvacplumbing&trimdraw"
                        THEN "H. HVAC Plumbing & Trim Draw"
		WHEN
                         LOWER(REPLACE(${tag}, ' ', '')) = "exterior"
                        THEN "I. Exterior"
		WHEN
                         LOWER(REPLACE(${tag}, ' ', '')) = "seawall"
                        THEN "J. Seawall"
		WHEN
                         LOWER(REPLACE(${tag}, ' ', '')) = "8-finaldraw"
                        THEN "K. Final Draw"
      		ELSE NULL
		END`;
}


module.exports = { tag_order };
