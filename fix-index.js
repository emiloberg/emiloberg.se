'use strict';

const fs = require('fs');
const replace = require('replace');
const cssContent = fs.readFileSync('./dist/bundle.css', { encoding: 'utf8' });
const directoryContent = fs.readdirSync('./dist');


let jsFile;
directoryContent.forEach(function(item) {
	if (item.match(/browser.[A-Za-z0-9]+\.js$/)) {
		jsFile = item;
	}
});

replace({
	regex: '<link rel="stylesheet" href="bundle.css">',
	replacement: '<style>' + cssContent + '</style>',
	paths: ['./dist/index.html']
});

replace({
	regex: '</body>',
	replacement: '<script async src="' + jsFile + '"></script></body>',
	paths: ['./dist/index.html']
});


