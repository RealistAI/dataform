function phase_count(title) {
	return `CASE 
		WHEN 
			 LOWER(REPLACE(${title}, ' ', '')) IN ("draw6", "painttouchup&punchlist", "requestfinalsurvey", "schedulecityinspection", "schedulecityinspections", "termitecontrol", "canceltheporta-johns", "coinspection", "finalclean", "handkeystothehomeowner-percontract!", "register&payforhomewarranty", "finaldraw", "finalclean")
			THEN "Final Inspections"
		WHEN
			 LOWER(REPLACE(${title}, ' ', '')) IN ("draw5", "back-splashinstall", "deliverappliances", "plumbingtrimout", "electricaltrimout", "blowerdoortest", "drywalltouchup", "wellequipmentinstall", "doorandtrimhardwareinstallation", "door&trimhardwareinstallation", "hookupandleaktest-hvac", "hookupandleaktest-plumbing", "installmirrors&shelves", "roughclean", "carpetinstall", "landscaping&irrigationsystems", "landscaping&irrigationsystem", "paintfinal", "installgutters", "septicfinal")
			THEN "Internal Finish"
		WHEN 
			 LOWER(REPLACE(${title}, ' ', '')) IN ("draw4", "door&trimpackagedelivery", "cabinetdelivery", "installinteriordoors&trim", "cabinetinstallation", "templatecounter-tops", "hvactrimout", "installcountertops")
			THEN "Internal Trim"
		
		WHEN
			 LOWER(REPLACE(${title}, ' ', '')) IN ("hookupandleaktest", "checkforstreetrepair", "finalgrade", "installgaragedoor", "pulldumpster", "insulationinspection", "drywallinstallation", "stucco", "verifyelectricalmeter", "windowsilinstall",  "windowsillinstall", "measureforshutters", "initialpaint", "ceramictile-floorsandwalls", "soffitsinstall")
			THEN "Internal Rough"
		
		WHEN 
			 LOWER(REPLACE(${title}, ' ', '')) IN ("draw3", "dryin", "internalframing", "dry-ininspection", "f-channelinstallation", "septicinstallation", "win&extdoorsdelivery", "hvacrough", "windows&extdoorsinstallation", "culvertinstallation&inspection", "plubmingrough-in2", "plumbingrough-in2", "electricrough-in1", "roughgrade&drivewaycut", "driveway", "drywalldelivery", "framinginspection(hvac,plumbingandelectric)", "installshingles", "insulation", "wellrunoff")
			THEN "Framing"

		WHEN
			 LOWER(REPLACE(${title}, ' ', '')) IN ("slabinspection", "schedulecutsheetinspect", "slabpour", "stuccograde", "blockdelivery", "trusspackagedelivery", "blockandbeam", "flyingtrusses", "beaminspection", "delivermetalframingpackage", "beampour", "deliverdumpster", "sheathinginstallation", "sheathinginspection")
			THEN "Slab/Block/Beam"

		WHEN
			 LOWER(REPLACE(${title}, ' ', '')) IN ("draw2", "scrapefilllandbuildpadandcompact", "siltfence", "verifyelectricapplicationisdone", "verifylandlockforwell", "verifynocwithetrakit", "verifytrusses/block/windows/well", "compactiontest", "hub&tac", "wellinstallation", "railhouse/footers", "undergroundplumbing", "undergroundplumbinginspection", "undergroundelectric", "verifyslabprepbeforeinspection")
			THEN "Site/Pad"

		WHEN 
			 LOWER(REPLACE(${title}, ' ', '')) IN ("lotsurvey", "trusslayout", "septicdesign", "energycalcs", "finalplanswithaddress", "septicapprovedwithhealthdept", "civilengineeringreview", "submitpermit", "permitapprovalprocess", "confirmpermit#hasbeencreatedatbuildingdept", "trussproduction", "loanclosing", "draw1", "permitapproved", "permitpaid")
			THEN "Permitting"
		
		ELSE NULL
		END`;
}
/*
function phase_filter(title) {
	return`CASE
		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Draw 6")
		THEN "Final Draw"

		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "6th Draw")
		THEN "Final Draw"
		
		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "1st Draw")
		THEN "Draw 1"
		
		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "2nd Draw")
		THEN "Draw 2"
		
		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "3rd Draw")
		THEN "Draw 3"

		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "4th Draw")
		THEN "Draw 4"
		
		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Beam Poor")
		OR
		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Beam Pour")
		THEN "Beam pour"

		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "F Channel")
		THEN "F-channel installation"
	
		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Hub & Tack")
		THEN "Hub & Tac"

		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Site Plan")
		THEN "Final plans with Addess"

		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Slab Pour")
		OR
		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Slab Poor")
		THEN "Slap pour"

		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Back Splash")
		THEN "Back-splash install"
		
		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "CO approved")
		THEN "CO inspection"

		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Slab Poured")
		THEN "Slap pour"
		
		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Driveway Cut")
		THEN "Rough grade & Driveway Cut"
		
		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Initial Draw")
		THEN "Draw 1"

		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Stucco Grade")
		THEN "Stucco grade"

		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Truss Design")
		THEN "Truss Layout"

		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Block Install")
		THEN "Block and Beam"

		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "block")
		THEN "Block and Beam"
	
		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Facia Install")
		THEN "F-channel installation"

		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Final grading")
		THEN "Final Grade"
		
		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Install Sills")
		THEN "Window sil install"

		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Land Scraping")
		THEN "Scrape Fill land Build pad and compact"

		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Pay the Permit")
		THEN "Permit Paid"

		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Permit on Hand")
		THEN "Confirm permit # has been created at building dept"

		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Punch out List")
		THEN "Paint Touch Up & Punch list"
		
		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Septic Design")
		THEN "Septic design"

		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Septic Permit")
		THEN "Septic approved with health dept"
		
		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Apply for the CO")
		THEN "CO inspection"
		
		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Install carpet")
		THEN "Carpet Install"

		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Beam Inspection")
		THEN "Beam inspection"

		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Blower Door Test")
		THEN "Blower door test"

		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Close on the Loan")
		THEN "Loan closing"
		
		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Deliver dupster")
		THEN "Deliver dumpster"

		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Install Roofing")
		THEN "Install Shingles"

		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Order Lot Survey")
		THEN "Lot Survey"

		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Septic Approved")
		THEN "Septic approved with health dept"

		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Shingle install")
		THEN "Install Shingles"
		
		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Window delivery")
		THEN "Win&Ext Doors Delivery"

		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Install driveway")
		THEN "Driveway"
		
		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Shingles Install")
		THEN "Install Shingles"

		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Win & Ext Delivery")
		THEN "Win&Ext Doors Delivery"
		
		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Dry-in inspection")
		THEN "Dry-In Inspection"
		
		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Electric Rough-In 1")
		THEN "Electric Rough-In 1"
		
		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Order Truss Design")
		THEN "Truss Layout"

		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Plumbing Rough-1-")
		THEN "Underground plumbing"

		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Tile installation")
		THEN "Ceramic tile - floors and walls"
		
		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Compact Inspection")
		THEN "Compaction test"

		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Insulation Install")
		THEN "Insulation"

		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "building permit approved")
		THEN "Permit approved"

		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Culvert Installation")
		THEN "Culvert Installation & Inspection"

		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Door & Trim package delivery")
		THEN "Door & Trim package delivery"

		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "Door and trim install")
		THEN "Install interior doors & Trim"

		WHEN CONTALOWER(REPLACE(${title}, ' ', '')) INS_SUBSTR(, "5th Draw")
		THEN "Draw 5"
}
*/			

module.exports = { phase_count };
