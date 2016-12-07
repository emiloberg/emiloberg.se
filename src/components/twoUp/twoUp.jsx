import React from 'react';

import classnames from 'classnames';
import styles from './twoUp.css';

export default ({ children, small, noMargin }) => {
	return (
		<div
			className={ classnames({
				[styles.twoUp]: true,
				[styles.small]: small,
				[styles.noMargin]: noMargin,
			})}
		>
			{ children }
		</div>
	)
};
