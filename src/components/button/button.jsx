import React from 'react';

import classnames from 'classnames';
import styles from './button.css';

import Icon from '../icon/icon';


export default ({ type, url, color, children }) => {
	let button;
	if (type === 'github') {
		return (
			<a
				className={ classnames({
					[styles.button]: true,
					[styles['color' + color]]: true
				})}
				href={ url }
				rel="noopener"
			>
				<span>Fork me on</span>
				<Icon className={ styles.iconGitHub } icon="github" />
			</a>
		);
	} if (type === 'personal') {
		return (
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
};
