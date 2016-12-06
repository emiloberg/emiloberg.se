import React from 'react';

import classnames from 'classnames';
import styles from './headline.css';
import Icon from 'components/icon/icon'

export default ({ type, children, icon, withText = false }) => {
	let heading;
	if(type === 'section') {
		heading = (
			<h1
				className={
					classnames({
						[styles.h1]: true,
						[styles.withText]: withText
					})}
			>
				{ children }
			</h1>
		);

	} else if(type === 'single') {
		heading = (
			<h2 className={ styles.h2 }>
				{ children }
			</h2>
		);
	} else {
		heading = (
			<h3 className={ classnames(styles.h3, styles[type]) }>
				{ children }
			</h3>
		);
	}

	if (icon) {
		const iconStyle = type === 'section' ? styles.icon : styles.iconSmall;
		return (
			<div className={ styles.wrapper }>
				{ heading }
				<div className={ iconStyle }>
					<Icon icon={ icon } />
				</div>
			</div>
		)
	}

	return heading;

};