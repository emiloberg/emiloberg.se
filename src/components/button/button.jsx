import React from 'react';

import classnames from 'classnames';
import styles from './button.css';

import Icon from '../icon/icon';


export default ({ type, url, side, color, small, children }) => {
	let button;
	if (type === 'github') {
		button = (
			<a
				className={ classnames({
					[styles.button]: true,
					[styles['color' + color]]: true,
					[styles.small]: small,
				})}
				href={ url }
				rel="noopener"
			>
				<span>Fork me on</span>
				<Icon className={ styles.iconGitHub } icon="github" />
			</a>
		);
	} if (type === 'personal') {
		button = (
			<a
				className={ classnames({
					[styles.button]: true,
					[styles.personal]: true,
				})}
				href={ url }
				rel="noopener"
			>
				{ children }
			</a>
		);
	}

	if (side) {
		return (
			<div className={ styles.side }>
				{ button }
			</div>
		)
	}

	return button;
};