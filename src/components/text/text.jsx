import React from 'react';

import classnames from 'classnames';
import styles from './text.css';

export default ({ children, standalone }) => {
	return (
		<p className={classnames({
			[styles.text]: true,
			[styles.standalone]: standalone
		})}>
			{ children }
		</p>
	)
};
