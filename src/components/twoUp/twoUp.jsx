import React from 'react';

import classnames from 'classnames';
import styles from './twoUp.css';

export default ({ children }) => {
	return (
		<div className={ styles.twoUp }>
			{ children }
		</div>
	)
};
