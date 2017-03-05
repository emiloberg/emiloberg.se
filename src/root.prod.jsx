import React from 'react';
import Index from './Index';

import ReactDOMServer from 'react-dom/server';

module.exports = function render(locals) {
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Emil Öberg, brain for hire</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
  <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">  
  <link rel="stylesheet" href="bundle.css">
	<!--[if !IE]>
		<script src="js/flexibility.js" type="text/javascript"></script>
	<![endif]-->  
</head>
<body class="no-js">
	${ReactDOMServer.renderToStaticMarkup(<Index />)}
</body>
</html>`;

	return html;
};