import React from 'react';

import classnames from 'classnames';
import styles from './headline.css';
import Icon from 'components/icon/icon'

export default ({ prefix, color, type, children, icon, withText = false, html }) => {
	let heading;
	if(type === 'section') {
		if (html) {
			heading = (
				<h1
					dangerouslySetInnerHTML={{__html: html}}
					className={
						classnames({
							[styles.h1]: true,
							[styles.withText]: withText,
							[styles.rainbow]: color === 'rainbow'
						})}
				/>
			);
		} else {
			heading = (
				<h1 className={
					classnames({
						[styles.h1]: true,
						[styles.withText]: withText,
						[styles.rainbow]: color === 'rainbow'
					})}
				>
					{ children }
				</h1>
			);
		}

	} else if(type === 'single') {
		heading = (
			<h2 className={ styles.h2 }>
				{ children }
			</h2>
		);
	} else {



		const headingInner = prefix
			? <span>{ prefix }</span> + { children }
			: children;

		heading = (
			<h3 className={ classnames({
				[styles.h3]: true,
				[styles[type]]: true,
				[styles.rainbow]: color === 'rainbow'
			})}>
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