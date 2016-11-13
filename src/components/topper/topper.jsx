import React from 'react';

import styles from './topper.css';

console.log('styles.hi', styles.hi);

export default () => (
	<div className={ styles.hi }>
		Topper
	</div>
);