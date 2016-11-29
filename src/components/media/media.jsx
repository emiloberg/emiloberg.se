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
		embedURL = `https://www.youtube-nocookie.com/embed/${mediaId}?showinfo=0`;
		const views = DATA.youTubeViews[mediaId];
		titleURL = `https://www.youtube.com/watch?v=${mediaId}`;

		const screenShotUrl = `https://i.ytimg.com/vi/${mediaId}/maxresdefault.jpg`;

		// mainMedia = (
		// 	<div className={ classnames(styles[mediaType], styles.responsiveInner) }>
		// 		<div
		// 			data-mediaid={ mediaId }
		// 			className={ classnames(styles.placeholder, styles.videoPlaceholder, 'js-video-placeholder') }
		// 			style={{
		// 				backgroundImage: `url(${screenShotUrl})`,
		// 			}}
		// 		>
		// 			<Icon className={ styles.playIcon } icon="play" center size="Yt"/>
		// 			<YtPlaybar />
		// 		</div>
		// 	</div>
		// );

		mainMedia = (
			<div className={ classnames(styles[mediaType], styles.responsiveInner) }>
				<div
					data-mediaid={ mediaId }
					className={ classnames(styles.placeholder, styles.videoPlaceholder, 'js-video-placeholder', 'b-lazy') }
					data-src={screenShotUrl}
				>
					<Icon className={ styles.playIcon } icon="play" center size="Yt"/>
					<YtPlaybar />
				</div>
			</div>
		);



	} else if (type === 'slideshare') {
		mediaType = 'slideshare';
		embedURL = `//www.slideshare.net/slideshow/embed_code/key/${mediaId}?startSlide=2`;
		// mainMedia = (
		// 	<div className={ classnames(styles[mediaType], styles.responsiveInner) }>
		// 		<iframe src={ embedURL } frameBorder="0" allowFullScreen />
		// 	</div>
		// )

		const placeholderImageUrl = require('../../../data/placeholders/slideshare/' + mediaId + '.jpg');

		mainMedia = (
			<div className={ classnames(styles[mediaType], styles.responsiveInner) }>
				<div
					className={ styles.placeholder }
					style={{
						backgroundImage: `url(${placeholderImageUrl})`,
					}}
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