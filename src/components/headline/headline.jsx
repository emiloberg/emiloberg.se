import React from 'react';

import classnames from 'classnames';
import styles from './headline.css';
import Icon from 'components/icon/icon'

export default ({ prefix, prefixColor, type, children, icon, withText = false, html }) => {
	let heading;
  let fixedPrefix = '';
  if (prefix) {
    fixedPrefix = <span className={ styles[`prefix${prefixColor}`] }>{ prefix }</span>
  }

	if(type === 'section') {
		const classes = {
			[styles.h1]: true,
			[styles.withText]: withText,
		};

		if (html) {
			heading = (
				<h1
					dangerouslySetInnerHTML={{__html: html}}
					className={classnames(classes)}
				/>
			);
		} else {
			heading = (
				<h1 className={classnames(classes)}>
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

		const classes = {
			[styles.h3]: true,
		};

		if (type) {
			classes[styles[type]] = true
		}

		heading = (
			<h3 className={ classnames(classes)}>
        { fixedPrefix } { children }
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