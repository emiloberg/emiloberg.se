import React from 'react';

import classnames from 'classnames';
import styles from './box.css';

export default ({ children, type = 'single', no = '', headlineOnly = false }) => {
	console.log('headlineOnly', headlineOnly);
	const out = (
		<div
			className={classnames({
				[styles.box]: true,
				[styles[type]]: true,
				[styles[no]]: true,
				[styles.headlineOnly]: headlineOnly,
			})}
		>
			{ children }
		</div>
	);

	if (type === 'twoUp') {
		return (
			<div className={ styles.twoUpInner }>
				{ out }
			</div>
		);
	}

	return out;
};
