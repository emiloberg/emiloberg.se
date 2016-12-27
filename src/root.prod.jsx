import React from 'react';
import Index from './Index';

import ReactDOMServer from 'react-dom/server';

module.exports = function render(locals) {
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Emil Öberg, being awesome</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <link rel="stylesheet" href="bundle.css">
	<!--[if !IE]>
		<script src="flexibility.js" type="text/javascript"></script>
	<![endif]-->  
</head>
<body class="no-js">
	${ReactDOMServer.renderToStaticMarkup(<Index />)}
</body>
</html>`;

	return html;
};