import React from 'react';

import styles from './boxFullHeight.css';

export default ({ children }) => {
	return (
		<div className={ styles.boxFull }>
			{ children }
		</div>
	)
};
