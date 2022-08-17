function customer_name(Line1) {
        return `CASE
                WHEN
                         lower(REPLACE(${Line1}, ' ', '')) in ("susanpinkerton:", "susanpinkerton:420ne18th")
                        THEN "Susan Pinkerton"
                WHEN
                         lower(REPLACE(${Line1}, ' ', '')) in ("michaeltedesco:1233se39thter", "michaeltedesco:1439oldburntrd")
                        THEN "Michael tedesco"
		WHEN
                         lower(REPLACE(${Line1}, ' ', '')) in ("garypinkerton:1717nw14thave(p)", "garypinkerton:620nw25thst.capecoralfl")
                        THEN "Gary Pinkerton"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "12776ehannahtrail"
                        THEN "12776E Hannah Trail"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "guillermoandclaudiasanchez:1939nw34thave"
                        THEN "Guillermo and Claudia Sanchez"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "4120sperlingdr"
                        THEN "4120 Sperling Dr"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) IN ("christopherraymondharper:1816nw6thpl,capecoral", "christopherraymondharper:2528nw20thave,capecoral") 
			THEN "Christopher Raymond Harper"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "829coastalbeachrd"                              
			THEN "829 Coastal Beach Rd"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "keith&sarahpedro:1108ne33rdst"
                        THEN "Keith & Sarah Pedro"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "wilsongroupllc:1201nw20thpl"
                        THEN "Wilson Groups LLC"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "508jakobln"
                        THEN "508 Jakob Ln"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "7129hilbeckdr"
                        THEN "7129 Hilbeck Dr"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "22princetonst"
                        THEN "22 Princeton St"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "411walnutst#14567"
                        THEN "411 Walnut St #14567"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "186christineway"
                        THEN "186 Christine Way"
 		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "michael&evgeniyapawlowski:3515ne19thpl"
                        THEN "Michael & Evgeniya Pawlowski"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "jasonmedema:2624nw4thpl"
                        THEN "Jason Medema"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "peter&chinhwadahlem:500nw20thst"
                        THEN "Peter & Chinhwa Dahlem"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "10604176thctne"
                        THEN "1060 4176th Ct NE"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "1932lacrossest"
                        THEN "1932 Lacrosse St"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "6907cedarruncir"
                        THEN "6907 Cedar Ruhn Cir"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "alexanderbrandt:1711nw9thpl"
                        THEN "Alexander Brandt"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "jim&ellenbulkley:4517nw30th"
                        THEN "Jim & Ellen Bulkley"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "juliannahelms:331ne25thst"
                        THEN "Julianna Helms"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "ashykoshy:2825nw25thln"
                        THEN "Ashy Koshy"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "jamesmueller"
                        THEN "James Mueller"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "brandon&kensleemcneil:1901nw21stpl"
                        THEN "Brandon & Kenslee McNeil"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "anilkallu:2103nw2ndpl"
                        THEN "Anil Kallu"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "michaelmunayer:1618ne6thave"
                        THEN "Michael Munayer"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "aaron&rizzochapman:1903nw29thave"
                        THEN "Aaron & Rizzo Chapman"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "alexanderbrant:1711nw9thpl"
                        THEN "Alexander Brant"

		ELSE NULL
                END`;
}

module.exports = { customer_name };
