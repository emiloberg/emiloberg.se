import React from 'react';

import classnames from 'classnames';
import styles from './terminal.css';




export default ({ code, title }) => (
	<div className={ styles.window }>
		<div className={ styles.icons }><span></span></div>
		<div className={ styles.title }>{ title }</div>
		<pre className={ styles.pre }><code className={ styles.code } dangerouslySetInnerHTML={{__html: code}} /></pre>
	</div>
);
