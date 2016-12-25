import React from 'react';

import classnames from 'classnames';
import styles from './box.css';

export default ({ children, type = 'single', no = '', headlineOnly = false }) => {
	const classes = {
    [styles.box]: true,
    [styles[type]]: true,
    [styles.headlineOnly]: headlineOnly,
  };

  if (no) {
    classes[styles[no]] = true
  }


	const out = (
		<div className={classnames(classes)}>
			{ children }
		</div>
	);

	if (type === 'twoUp') {
		return (
			<div className={ styles.twoUpInner }>
				{ out }
			</div>
		);
	}

	return out;
};
