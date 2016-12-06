import React from 'react';

import classnames from 'classnames';
import styles from './button.css';

import Icon from '../icon/icon';


export default ({ type, url, side }) => {
	let button;
	if (type === 'github') {
		button = (
			<a className={ styles.button } href={ url } rel="noopener">
				<span>Fork me on</span>
				<Icon className={ styles.iconGitHub } icon="github" />
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