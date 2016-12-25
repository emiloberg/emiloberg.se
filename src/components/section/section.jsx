import React from 'react';

import classnames from 'classnames';
import styles from './section.css';

export default ({ bg, padding = 'medium', children, id, relative }) => {
	return (
		<div
			id={ id }
			className={
				classnames({
					[styles['bg' + bg]]: true,
					[styles['padding' + padding]]: true,
					[styles.relative]: relative
			})}
		>
			<div className={ styles.section }>
				{ children }
			</div>
		</div>
	)
};
