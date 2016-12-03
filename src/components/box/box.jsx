import React from 'react';

import classnames from 'classnames';
import styles from './box.css';

export default ({ children, type = 'single', no = '' }) => {
	return (
		<div className={ classnames(styles.box, styles[type], styles[no]) }>
			{ children }
		</div>
	)
};
