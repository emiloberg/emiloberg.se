import React from 'react';
import ReactDOM from 'react-dom';
import Index from './Index';


const rootEl = document.getElementById('app');
ReactDOM.render(<Index />, rootEl);

if (module.hot) {
	module.hot.accept();
}
