import React from 'react';

import classnames from 'classnames';
import styles from './box.css';

export default ({ children, type = 'single', no = '', flex}) => {
	const out = (
		<div
			className={classnames({
				[styles.box]: true,
				[styles[type]]: true,
				[styles[no]]: true
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
