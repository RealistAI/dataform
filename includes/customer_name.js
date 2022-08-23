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
                         LOWER(REPLACE(${Line1}, ' ', '')) IN ("alexanderbrandt:1711nw9thpl", "alexanderbrant:2018nw21stst")
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
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) IN ("privateequitysolutionsllc:3323ne13thave","privateequitysolutionsllc:1428nw27thpl",  "privateequitysolutionsllc:1539ne36thln", "privateequitysolutionsllc:3802ne8thpl")
                        THEN "Private Equity Solutions LLC"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "15027srebellionct"
                        THEN "15027 S Rebellion Ct"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "isaacr.beal:1809nw17thter"
                        THEN "Isaac R Beal"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "1013bluffpassn"
                        THEN "1013 Bluff Pass N"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "chase&nicoleehlers:1536nw24thave,capecoral"
                        THEN "Chase & Nicole Ehlers"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "409springdalerd"
                        THEN "409 Springdale Rd"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) IN ("jasonekert:1313nws4thter,capecoral", "jasonekert:1313nw24thter,capecoral")
                        THEN "Jason Ekert"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "danieldepew:2601nw26thter"
                        THEN "Daniel Depew"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "blakerumley:1024nw12thave"
                        THEN "Blake Rumley"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "sudhapericharla(kishoregottumukkala):2223nw8thpl"
                        THEN "Sudha Percharla (Kishore Gottumukkala)"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "krishnac.animireddy:2206nw2ndave"
                        THEN "Krishna C Animireddy"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "williamday:536nw20thst"
                        THEN "William Day"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "johnsantos:1905nw21stpl"
                        THEN "John Santos"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "steve&stacyharbertson:2912nw22ndave"
                        THEN "Steve & Stacy Harberston"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "gregoryraymond:1518nw9thst"
                        THEN "Gregory Raymond"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "richard&christinehaigh:2920nw4thpl(p)"
                        THEN "Richard & Christine Haigh"
		WHEN                         
			LOWER(REPLACE(${Line1}, ' ', '')) = "troystidd:1711nw7thave,capecoral"
                        THEN "Troy Stidd"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "jasonstevens:3230nw4thpl"     
                        THEN "Jason Stevens"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "117visard"     
                        THEN "117 Visa Rd"
		WHEN
                         LOWER(REPLACE(${Line1}, ' ', '')) = "tylerlawrence:522nw20thst,capecoral"     
                        THEN "Tyler Lawrence"
		ELSE NULL
                END`;
}

module.exports = { customer_name };
