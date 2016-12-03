import React from 'react';

import classnames from 'classnames';
import styles from './headline.css';
import Icon from 'components/icon/icon'

export default ({ type, children, icon }) => {
	if(type === 'section') {
		const heading = (<h1 className={ styles.h1 }>{ children }</h1>);
		if (icon) {
			return (
				<div className={ styles.wrapper }>
					{ heading }
					<div className={ styles.icon}>
						<Icon icon={ icon } />
					</div>
				</div>
			)
		}
		return heading;
	} else if(type === 'single') {
		return (
			<h2 className={ styles.h2 }>
				{ children }
			</h2>
		);
	}


	return (
		<h3 className={ styles.h3 }>
			{ children }
		</h3>
	);

};