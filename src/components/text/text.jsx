import React from 'react';

import classnames from 'classnames';
import styles from './text.css';

export default ({ children }) => {
	return (
		<p className={ styles.text }>
			{ children }
		</p>
	)
};
