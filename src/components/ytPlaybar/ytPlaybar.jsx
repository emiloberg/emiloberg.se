import React from 'react';
import classnames from 'classnames';
import Icon from 'components/icon/icon';

import styles from './ytPlaybar.css';

export default ({ className }) => (
	<div className={ classnames(styles.playbar, className) }>
		<div className = { styles.leftCtrl }>
			<Icon icon="ytPlay" size="FullHeight" />
			<Icon icon="ytVolume" size="FullHeight" />
		</div>
		<div className = { styles.rightCtrl }>
			<Icon icon="ytYouTube" size="FullHeight" />
			<Icon icon="ytFullScreen" size="FullHeight" />
		</div>
	</div>
)