import React from 'react';

import classnames from 'classnames';

import ContentBox from 'components/contentbox/contentbox';
import Icon from 'components/icon/icon';
import YtPlaybar from 'components/ytPlaybar/ytPlaybar';
import SsPlaybar from 'components/ssPlaybar/ssPlaybar';

import styles from './media.css'

const MEDIADATA = require('../../../data/media.json');

export default ({ type, mediaId, no, showTitle = true, showDesc = true }) => {
	let titleURL;

	let embedURL;
	let mediaType;
	let mainMedia;
	if (type === 'yt') {
		mediaType = 'video';
		const views = DATA.youTubeViews[mediaId];
		titleURL = `https://www.youtube.com/watch?v=${mediaId}`;
		const placeholderImg = require(`responsive?placeholder=true&sizes[]=320,sizes[]=640!../../../temp/${mediaId}.jpg`);

		mainMedia = (
			<div className={ classnames(styles[mediaType], styles.responsiveInner) }>
				<div
					data-mediaid={ mediaId }
					className={ classnames(styles.placeholder, styles.videoPlaceholder, 'js-video-placeholder', 'lazy') }
					data-src={ placeholderImg.src + '|' +  placeholderImg.images[1].path }
				>
					<Icon className={ styles.playIcon } icon="play" center size="Yt"/>
					<YtPlaybar />
				</div>
			</div>
		);
	} else if (type === 'slideshare') {
		mediaType = 'slideshare';
		const placeholderImg = require(`responsive?placeholder=true&sizes[]=510,sizes[]=1020!../../../data/placeholders/slideshare/${mediaId}.jpg`);

		mainMedia = (
			<div className={ classnames(styles[mediaType], styles.responsiveInner) }>
				<div
					className={ classnames(styles.placeholder, 'lazy') }
					data-src={ placeholderImg.src + '|' +  placeholderImg.images[1].path }
				>
					<SsPlaybar mediaId={ mediaId } />
				</div>
			</div>
		);
	}

	const description = showDesc && MEDIADATA[type][mediaId].desc ? MEDIADATA[type][mediaId].desc : null;
	const wrappedDescription = showDesc
		? 	 <div className={ styles.description } dangerouslySetInnerHTML={{ __html: description }}></div>
		: 	null;

	const wrappedTitle = showTitle
		?	titleURL
				? <a href={ titleURL } rel="noopener"><h3>{ MEDIADATA[type][mediaId].title }</h3></a>
				: <h3>{ MEDIADATA[type][mediaId].title }</h3>
		:	null;

	const text = wrappedTitle
		? 	<div className={ styles.description }>
				{ wrappedTitle }
				{ wrappedDescription }
			</div>
		: null;

	return (
		<ContentBox no={no} >
			<div className={ styles.media }>
					{ mainMedia }
			</div>
			{ text }
		</ContentBox>
	)
}