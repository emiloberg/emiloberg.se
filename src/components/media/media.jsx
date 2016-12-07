import React from 'react';

import classnames from 'classnames';

import Icon from 'components/icon/icon';
import YtPlaybar from 'components/ytPlaybar/ytPlaybar';
import SsPlaybar from 'components/ssPlaybar/ssPlaybar';

import styles from './media.css'

const MEDIADATA = require('../../../data/media.json');

export default ({ type, mediaId }) => {
	let mediaURL;
	let mediaType;
	let mainMedia;
	if (type === 'yt') {
		mediaType = 'video';
		mediaURL = `https://www.youtube.com/watch?v=${mediaId}?rel=0&showinfo=0&iv_load_policy=3`;
		const placeholderImg = require(`responsive?placeholder=true&sizes[]=320,sizes[]=640!../../../temp/${mediaId}.jpg`);

		mainMedia = (
			<a href={ mediaURL } rel="noopener" className="js-disabled"
			   aria-label={`YouTube video: ${MEDIADATA[type][mediaId].title}`}
			>
				<div className={ classnames(styles[mediaType], styles.responsiveInner) }>
					<div
						data-mediaid={ mediaId }
						className={ classnames(styles.placeholder, styles.videoPlaceholder, 'js-video-placeholder', 'lazy') }
						data-src={ placeholderImg.src + '|' +  placeholderImg.images[1].path }
					>
						<Icon className={ styles.playIcon } icon="play" center size="Yt" classes />
						<YtPlaybar className={ styles.playbar } />
					</div>
					<div className={ styles.fallback }>
						<div
							className={ styles.placeholder }
							style={{ backgroundImage: `url('${placeholderImg.src}?fallback')` }}
						/>
					</div>
				</div>
			</a>
		);
	} else if (type === 'slideshare') {
		mediaType = 'slideshare';
		mediaURL = MEDIADATA.slideshare[mediaId].url;
		const placeholderImg = require(`responsive?placeholder=true&sizes[]=510,sizes[]=1020!../../../data/placeholders/slideshare/${mediaId}.jpg`);

		mainMedia = (
			<a href={ mediaURL } rel="noopener" className="js-disabled"
			   aria-label={`Slideshare presentation: ${MEDIADATA[type][mediaId].title}`}
			>
				<div className={ classnames(styles[mediaType], styles.responsiveInner) }>
					<div
						className={ classnames(styles.placeholder, 'lazy', styles.genericPlaceholder) }
						data-src={ placeholderImg.src + '|' +  placeholderImg.images[1].path }
					>
						<SsPlaybar mediaId={ mediaId } />
					</div>
					<div className={ styles.fallback }>
						<div
							className={ styles.placeholder }
							style={{ backgroundImage: `url('${placeholderImg.src}?fallback')` }}
						/>
					</div>
				</div>
			</a>
		);
	} else if (type === 'image') {
		mediaType = 'image';
		const image = require(`responsive?placeholder=true&sizes[]=510,sizes[]=1020!./images/${mediaId}`);

		mainMedia = (
			<div className={ classnames(styles[mediaType], styles.responsiveInner) }>
				<div
					className={ classnames(styles.placeholder, 'lazy', styles.genericPlaceholder) }
					data-src={ image.src + '|' +  image.images[1].path }
				>
				</div>
				<div className={ styles.fallback }>
					<div
						className={ styles.placeholder }
						style={{ backgroundImage: `url('${image.src}?fallback')` }}
					/>
				</div>
			</div>
		);
	}


	return (
		<div className={ styles.media }>
			{ mainMedia }
		</div>
	)
}