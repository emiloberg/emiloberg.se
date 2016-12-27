import React from 'react';

import classnames from 'classnames';

import Icon from 'components/icon/icon';
import YtPlaybar from 'components/ytPlaybar/ytPlaybar';
import SsPlaybar from 'components/ssPlaybar/ssPlaybar';

import styles from './media.css'

const MEDIADATA = require('../../../data/media.json');

function getSrcString(img) {
  if (img.images.length > 1) {
    return img.src + '|' +  img.images[1].path;
  } else {
    return img.src
  }
}

export default ({ type, mediaId }) => {
	let mediaURL;
	let mediaType;
	let mainMedia;
	if (type === 'yt') {
		mediaType = 'video';
		mediaURL = `https://www.youtube.com/watch?v=${mediaId}?rel=0&showinfo=0&iv_load_policy=3`;
		const placeholderImg = require(`responsive?placeholder=true&sizes[]=650,sizes[]=130&name=res/resp/[hash:8]-[width].&publicPath=res/resp/!../../../video-placeholders/${mediaId}.jpg`);

		mainMedia = (
			<a href={ mediaURL } rel="noopener" className="js-disabled"
			   aria-label={`YouTube video: ${MEDIADATA[type][mediaId].title}`}
			>
				<div className={ classnames(styles[mediaType], styles.responsiveInner) }>
					<div
						data-mediaid={ mediaId }
						className={ classnames(styles.placeholder, styles.videoPlaceholder, 'js-video-placeholder', 'lazy') }
						data-src={ getSrcString(placeholderImg) }
					>
						<Icon className={ styles.playIcon } icon="play" center size="Yt" classes />
						<YtPlaybar className={ styles.playbar } />
					</div>
					<div className={ styles.fallback }>
						<div
							className={ styles.placeholder }
							style={{ backgroundImage: `url('${placeholderImg.src}')` }}
						/>
					</div>
				</div>
			</a>
		);
	} else if (type === 'slideshare') {
		mediaType = 'slideshare';
		mediaURL = MEDIADATA.slideshare[mediaId].url;
		const placeholderImg = require(`responsive?placeholder=true&sizes[]=650,sizes[]=130&name=res/resp/[hash:8]-[width].&publicPath=res/resp/!../../../data/placeholders/slideshare/${mediaId}.jpg`);

		mainMedia = (
			<a href={ mediaURL } rel="noopener" className="js-disabled"
			   aria-label={`Slideshare presentation: ${MEDIADATA[type][mediaId].title}`}
			>
				<div className={ classnames(styles[mediaType], styles.responsiveInner) }>
					<div
						className={ classnames(styles.placeholder, 'lazy', styles.genericPlaceholder) }
						data-src={ getSrcString(placeholderImg) }
					>
						<SsPlaybar mediaId={ mediaId } />
					</div>
					<div className={ styles.fallback }>
						<div
							className={ styles.placeholder }
							style={{ backgroundImage: `url('${placeholderImg.src}')` }}
						/>
					</div>
				</div>
			</a>
		);
	} else if (type === 'image') {
		mediaType = 'image';
		const image = require(`responsive?placeholder=true&sizes[]=650,sizes[]=130&name=res/resp/[hash:8]-[width].&publicPath=res/resp/!./images/${mediaId}`);

		mainMedia = (
			<div className={ classnames(styles[mediaType], styles.responsiveInner) }>
				<div
					className={ classnames(styles.placeholder, 'lazy', styles.genericPlaceholder) }
					data-src={ getSrcString(image) }
				>
				</div>
				<div className={ styles.fallback }>
					<div
						className={ styles.placeholder }
						style={{ backgroundImage: `url('${image.src}')` }}
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