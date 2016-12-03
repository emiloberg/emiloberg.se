import React from 'react';

import classnames from 'classnames';
import styles from './mainSection.css';

export default ({ bg, padding = 'medium', children }) => {
	return (
		<div className={ classnames(styles['bg' + bg], styles['padding' + padding]) }>
			<div className={ styles.section }>
				{ children }
			</div>
		</div>
	)
};
