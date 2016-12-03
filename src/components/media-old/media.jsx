import React from 'react';

import classnames from 'classnames';

import ContentBox from 'components/contentbox/contentbox';
import Icon from 'components/icon/icon';
import YtPlaybar from 'components/ytPlaybar/ytPlaybar';
import SsPlaybar from 'components/ssPlaybar/ssPlaybar';

import styles from './media.css'

const MEDIADATA = require('../../../data/media.json');

export default ({ type, mediaId, no, showTitle = true, showDesc = true, showViews }) => {
	let mediaURL;

	let embedURL;
	let mediaType;
	let mainMedia;
	let views;
	if (type === 'yt') {
		mediaType = 'video';
		views = DATA.youTubeViews[mediaId];
		mediaURL = `https://www.youtube.com/watch?v=${mediaId}`;
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
					className={ classnames(styles.placeholder, 'lazy', styles.ssPlaceholder) }
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
	}


	const wrappedViews = showViews && views
		? 	<div
				className={ classnames(styles.viewCount) }
				data-mediaid={ mediaId }
			>
				<span
					className={ classnames('js-yt-views', styles.viewsNumber) }
					data-mediaid={ mediaId }
				>
					{ views }
				</span><span> Views!</span>
				<Icon icon="smileyHeart"/>
			</div>
		: 	null;

	const description = showDesc && MEDIADATA[type][mediaId].desc ? MEDIADATA[type][mediaId].desc : null;
	const wrappedDescription = showDesc
		? 	 <div className={ styles.description } ><p dangerouslySetInnerHTML={{ __html: description }} /></div>
		: 	null;


	const wrappedTitle = showTitle
		? 	<h3>{ MEDIADATA[type][mediaId].title }</h3>
		:	null;

	// const wrappedTitle = showTitle
	// 	?	mediaURL
	// 			? <a href={ mediaURL } rel="noopener"><h3>{ MEDIADATA[type][mediaId].title }</h3></a>
	// 			: <h3>{ MEDIADATA[type][mediaId].title }</h3>
	// 	:	null;

	const text = wrappedTitle
		? 	<div className={ styles.description }>
				{ wrappedTitle }
				{ wrappedDescription }
				{/* wrappedViews */}
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