import React from 'react';

import styles from './ssPlaybar.css';
import classnames from 'classnames';

import MEDIA from '../../../data/media.json';



export default ({ mediaId }) => {
	return (
		<div className={ styles.playbar }>
			<div className={ styles.progressBarWrapper }>
				<div className={ styles.bufferBar }></div>
				<div
					className={ styles.activeBar }
					style={{
						width: Math.round((100 / MEDIA.slideshare[mediaId].slideCount) * 100) / 100 + '%'
					}}
				></div>
			</div>
			<div className={ styles.prevNextBar }>
				<div className={ classnames(styles.prevNext, styles.prev) }/>
				<div className={ styles.slideNumbers }>1 of { MEDIA.slideshare[mediaId].slideCount }</div>
				<div
					data-mediaid={ mediaId }
					className={ classnames(styles.prevNext, styles.next, 'js-slideshare-next') }
				/>
			</div>
		</div>
	);
}
