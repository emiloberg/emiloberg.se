var fs = require('fs');
var replace = require('replace');
const cssContent = fs.readFileSync('./dist/bundle.css', { encoding: 'utf8' });
replace({
	regex: '<link rel="stylesheet" href="bundle.css">',
	replacement: '<style>' + cssContent + '</style>',
	paths: ['./dist/index.html']
});
