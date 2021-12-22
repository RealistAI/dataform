const { exec } = require('child_process');

exports.exec = ('dataform run', (error, stdout, stderr => {
	if (error) {
		console.error('exec error: ${error}');
		return;
	}
	console.log('stdout: ${stdout}');
	console.error('stderr: ${stderr}');
});	
