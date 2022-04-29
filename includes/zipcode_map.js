function county_map(zip) {
	return `CASE
		WHEN ${zip} = 34135
			THEN "Lee"
		WHEN ${zip} = 33908
			THEN "Lee"
		WHEN ${zip} = 33914
			THEN "Lee"
		WHEN ${zip} = 33905
			THEN "Lee"
		WHEN ${zip} = 33990
			THEN "Lee"
		WHEN ${zip} = 33993
			THEN "Lee"
		WHEN ${zip} = 33909
			THEN "Lee"
		WHEN ${zip} = 33917
			THEN "Lee"
		WHEN ${zip} = 33904
			THEN "Lee"
		WHEN ${zip} = 33919
			THEN "Lee"
		WHEN ${zip} = 33971
			THEN "Lee"
		WHEN ${zip} = 33928
			THEN "Lee"
		WHEN ${zip} = 33913
			THEN "Lee"
		WHEN ${zip} = 33916
			THEN "Lee"
		WHEN ${zip} = 33967
			THEN "Lee"
		WHEN ${zip} = 33936
			THEN "Lee"
		WHEN ${zip} = 33907
			THEN "Lee"
		WHEN ${zip} = 33903
			THEN "Lee"
		WHEN ${zip} = 33991
			THEN "Lee"
		WHEN ${zip} = 33901
			THEN "Lee"
		WHEN ${zip} = 33976
			THEN "Lee"
		WHEN ${zip} = 33974
			THEN "Lee"
		WHEN ${zip} = 33912
			THEN "Lee"
		WHEN ${zip} = 33973
			THEN "Lee"
		WHEN ${zip} = 33972
			THEN "Lee"
		WHEN ${zip} = 34134
			THEN "Lee"
		WHEN ${zip} = 33966
			THEN "Lee"
		WHEN ${zip} = 33931
			THEN "Lee"
		WHEN ${zip} = 33957
			THEN "Lee"
		WHEN ${zip} = 33920
			THEN "Lee"
		WHEN ${zip} = 33956
			THEN "Lee"
		WHEN ${zip} = 33922
			THEN "Lee"
		WHEN ${zip} = 33965
			THEN "Lee"
		WHEN ${zip} = 33921
			THEN "Lee"
		WHEN ${zip} = 33924
			THEN "Lee"
		WHEN ${zip} = 33902
			THEN "Lee"
		WHEN ${zip} = 33906
			THEN "Lee"
		WHEN ${zip} = 33910
			THEN "Lee"
		WHEN ${zip} = 33911
			THEN "Lee"
		WHEN ${zip} = 33915
			THEN "Lee"
		WHEN ${zip} = 33918
			THEN "Lee"
		WHEN ${zip} = 33932
			THEN "Lee"
		WHEN ${zip} = 33945
			THEN "Lee"
		WHEN ${zip} = 33970
			THEN "Lee"
		WHEN ${zip} = 33975
			THEN "Lee"
		WHEN ${zip} = 33994
			THEN "Lee"
		WHEN ${zip} = 34133
			THEN "Lee"
		WHEN ${zip} = 34136
			THEN "Lee"
		WHEN ${zip} = 33900
			THEN "Lee"
		WHEN ${zip} = 33929
			THEN "Lee"
		WHEN ${zip} = 34142
			THEN "Hendry"
		WHEN ${zip} = 33936
			THEN "Hendry"
		WHEN ${zip} = 33440
			THEN "Hendry"
		WHEN ${zip} = 33935
			THEN "Hendry"
		WHEN ${zip} = 33930
			THEN "Hendry"
		WHEN ${zip} = 34974
			THEN "Glades"
		WHEN ${zip} = 33935
			THEN "Glades"
		WHEN ${zip} = 33471
			THEN "Glades"
		WHEN ${zip} = 33960
			THEN "Glades"
		WHEN ${zip} = 33944
			THEN "Glades"
		ELSE "UNKNOWN_ZIP_CODE"
		END`;                 
}                                    
                                      
module.exports = {county_map};         
