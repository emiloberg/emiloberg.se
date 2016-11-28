import React from 'react';

import Icon from 'components/icon/icon';

import styles from './ytPlaybar.css';

export default () => (
	<div className={ styles.playbar }>
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