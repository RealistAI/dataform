function job_name(name) {
        return `CASE
                WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "1233se39thter"
                        THEN "1233 SE 39th Ter"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "1717nw14thave(p)"
                        THEN "1717 NW 14th Ave (P)"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "620nw25thst(p)"
                        THEN "620 NW 25th St (P)"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "420ne18thave(p)"
                        THEN "420 NE 18th Ave (P)"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "1118nw12ter,capecoral"
                        THEN "1118 NW 12 Ter"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "1518nw9st"
                        THEN "1518 NW 9th St"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "1939nw34thave"
                        THEN "1939 NW 34th Ave"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "2820nw4thpl"
                        THEN "2820 NW 4th Pl"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "1816nw6thpl,capecoral"
                        THEN "1816 NW 6th Pl"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "2114nw6thpl,capecoral"
                        THEN "2114 NW 6th Pl"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "1108ne33rdst"
                        THEN "1108 NE 33rd St"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "1201nw20thpl"
                        THEN "1201 NW 20th Pl"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "2118sw22ndter"
                        THEN "2118 SW 22nd Ter"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "415nw19thpl"
                        THEN "415 NW 19th Pl"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "1439oldburntrd"
                        THEN "1439 Old Burnt Rd"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "2540nw19thplcapecoral"
                        THEN "2540 NW 19th Pl"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "2020nw9thavecapecoral"
                        THEN "2020 NW 9th Ave"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "1912ne1stpl"
                        THEN "1912 NE 1st Pl"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "2111nw20thter"
                        THEN "2111 NW 20th Ter"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "1826nw21stave,capecoral"
                        THEN "1826 NW 21st Ave"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "2528nw20thave,capecoral"
                        THEN "2528 NW 20th Ave"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "620nw15thter(p)"
                        THEN "620 NW 15th Ter (P)"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "3515ne19thpl(p)"
                        THEN "3515 NE 19th Pl (P)"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "2624nw4thpl"
                        THEN "2624 NW 4th Pl"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "500nw20thst"
                        THEN "500 NW 20th St"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "1212-1214nw16thter"
                        THEN "1212-1214 NW 16th Ter"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "1002nw6thave,capecoral"
                        THEN "1002 NW 6th Ave"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "1817nw20thter"
                        THEN "1817 NW 20th Ter"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "2810nw4thpl"
                        THEN "2810 NW 4th Pl"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "1711nw9thpl"
                        THEN "1711 NW 9th Pl"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "4517nw30th"
                        THEN "4517 NW 30th"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "1427nw25thpl"
                        THEN "1427 NW 25th Pl"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "2121nw2ndave(p)"
                        THEN "2121 NW 2nd Ave (P)"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "3627ne12thct(p)"
                        THEN "3627 NE 12th Ct (P)"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "331ne25thst"
                        THEN "331 NE 25th St"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "2825nw25thln"
                        THEN "2825 NW 25th Ln"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "310nw20thst,capecoral"
                        THEN "310 NW 20th St"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "1518nw9thst"
                        THEN "1518 NW 9th St"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "1901nw21stpl"
                        THEN "1901 NW 21st Pl"
	        WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "2103nw2ndpl"
                        THEN "2103 NW 2nd Pl"
  	 	WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "2210nw21st"
                        THEN "2210 NW 21St"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "2540nw18thplcapecoral"
                        THEN "2540 NW 18th Pl"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "1618ne6thave(p)"
                        THEN "1618 NE 6th Ave (P)"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "620nw14thter(p)"
                        THEN "620 NW 14th Ter (P)"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "2322nw30thter(p)"
                        THEN "2322 NW 30th Ter (P)"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "1903nw29thave"
                        THEN "1903 NW 29th Ave"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "1428nw27thpl"
                        THEN "1428 NW 27th Pl"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "1734nw6thpl,capecoral"
                        THEN "1734 NW 6th Pl"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "1324nw15thter"
                        THEN "1324 NW 15th Ter"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "1809nw17thter"
                        THEN "1809 NW 17th Ter"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "2103nw24thavecapecoral"
                        THEN "2103 NW 24th Ave"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "1536nw24thave,capecoral"
                        THEN "1536 NW 24th Ave"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "519nw14thst,capecoral"
                        THEN "519 NW 14th St"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "1539ne36thln"
                        THEN "1539 NE 36th Ln"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "1313nw24thter,capecoral"
                        THEN "1313 NW 24th Ter"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "2601nw26thter"
                        THEN "2601 NW 26th Ter"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "1024nw12thave"
                        THEN "1024 NW 12th Ave"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "2223nw8thpl"
                        THEN "2223 NW 8th Pl"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "2018nw21stst"
                        THEN "2018 NW 21st St"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "2206nw2ndave"
                        THEN "2206 NW 2nd Ave"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "536nw20thst"
                        THEN "536 NW 20th St"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "1905nw21stpl"
                        THEN "1905 NW 21st Pl"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "3802ne8thpl"
                        THEN "3802 NE 8th Pl"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "3323ne13thave"
                        THEN "3323 NE 13th Ave"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "2912nw22ndave"
                        THEN "2912 NW 22nd Ave"
		WHEN                       
      			 LOWER(REPLACE(${name}, ' ', '')) = "2920nw4thpl(p)"         
     			THEN "2920 NW 4th Pl (P)"
		WHEN
			 LOWER(REPLACE(${name}, ' ', '')) = "1711nw7thave,capecoral"     
                        THEN "1711 Nw 7th Ave"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "3230nw4thpl"     
                        THEN "3230 NW 4th Pl"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "1730nw6thpl"     
                        THEN "1730 NW 6th Pl"
		WHEN
                         LOWER(REPLACE(${name}, ' ', '')) = "522nw20thst,capecoral"     
                        THEN "522 NW 20th St"
                ELSE NULL
                END`;
}

module.exports = { job_name };
