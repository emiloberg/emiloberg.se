'use strict';

const fs = require('fs');
const replace = require('replace');
const cssContent = fs.readFileSync('./dist/bundle.css', { encoding: 'utf8' });
const browserHeadContent = fs.readFileSync('./src-browser/browser-head.js', { encoding: 'utf8' });
const directoryContent = fs.readdirSync('./dist');

const fixedBrowserHeadContent = browserHeadContent.replace(/(?:\r\n|\r|\n)/g, '');

let jsFile;
directoryContent.forEach(function(item) {
	if (item.match(/browser.[A-Za-z0-9]+\.js$/)) {
		jsFile = item;
		console.log('found JS file', item);
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


replace({
	regex: '<body class="no-js">',
	replacement: '<body class="no-js"><script>' + fixedBrowserHeadContent + '</script>',
	paths: ['./dist/index.html']
});
