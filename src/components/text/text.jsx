import React from 'react';

import classnames from 'classnames';
import styles from './text.css';

export default ({ children, standalone}) => {

	const fixedChildren = typeof children === 'string'
		? <p>{ children }</p>
		: children;

	return (
		<div className={classnames({
			[styles.text]: true,
			[styles.standalone]: standalone
		})}>
			{ fixedChildren }
		</div>
	)
};
