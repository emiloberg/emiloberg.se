import React from 'react';

import classnames from 'classnames';
import styles from './section.css';
import gStyles from '../../index.css';

export default ({ decs, bg, cols, padding, children }) => {

	let decoratorItems = null;

	if (decs && Array.isArray(decs) && decs.length) {
		decoratorItems = decs.map((cur, index) => {
			const decStyle = typeof cur === 'object' ? styles['decorator' + cur.type] : styles['decorator' + cur];
			return createDecorator({ decStyle, index });
		});
	} else if (typeof decs === 'string') {
		decoratorItems = createDecorator(({ decStyle: decs }))
	}

	return (
		<div className={ classnames(styles.selection, styles['bg' + bg]) }>
				{ decoratorItems }
				<div className={ classnames(styles['padding' + padding], gStyles.container, styles['cols' + cols]) }>
					{ children }
				</div>
		</div>
	)
};

function createDecorator({ decStyle, index }) {
	if (decStyle === 'SingleVideo') {
		return (
			<div key={ index } className={ styles['decorator' + decStyle] }>
				<div className={ styles.decoratorSingleVideoInner }></div>
			</div>
		);
	} else {
		return (<div key={ index } className={ styles['decorator' + decStyle] }></div>);
	}
}