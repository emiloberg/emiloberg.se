import React from 'react';
import classnames from 'classnames';

import styles from './contentbox.css';

export default ({ no, children }) => (
	<div className={ classnames(styles.contentbox, styles['grid' + no]) }>
		{ children }
	</div>

)