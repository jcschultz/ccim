let shellInterval = require('shell-interval');
let cciCommand  = 'cci org info ';
let devOrgName = process.argv[2];

function getFormattedDate() {
	let d = new Date();
	return d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
}

console.log(getFormattedDate() + ' - Starting cci maintainer on scratch org: ' + devOrgName);

shellInterval({
	options: {
		command: cciCommand + devOrgName,
		time: 300,
		eager: true
	},
	onExec: function(err, stdout, stderr) {
		if (err) {
			throw err;
        }
        else {
			console.log('')
		}
		console.log(getFormattedDate());
		console.log(stdout);
	},
	onFinish: function() {
		console.log('cci-maintainer is exiting');
	},
	
});