import React from 'react';
import Index from './Index';

import ReactDOMServer from 'react-dom/server';

module.exports = function render(locals) {
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>React Static Website</title>
  <link rel="stylesheet" href="bundle.css">
</head>
<body>
	${ReactDOMServer.renderToStaticMarkup(<Index />)}
</body>
</html>`;

	return html;
};