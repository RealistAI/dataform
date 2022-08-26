const { get_company_data } = require('./get_company_data.js');

let company_id = 'placeholder_6e49847f-11f7-462d-bb34-61ff460184ec';

var phase_1 =[];


function phases(get_company_data){ 
  const data = get_company_data(company_id);
  for (var i in data) {
    if (data[i]['phase'] == 'phase_1')
      phase_1.push(data[i]['schedule_item']);  
  };
}
console.log(phase_1);


