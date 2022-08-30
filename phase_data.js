const { get_company_data } = require('./get_company_data.js');

let company_id = 'placeholder_123443256';

var phase_1 =[];


(async ()=>{ 
  const data = await get_company_data(company_id);
  for (var i in data) {
    if (data[i]['phase'] == 'phase_1')
      phase_1.push(data[i]['schedule_item']);
  };
})()

console.log(phase_1);

