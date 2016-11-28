import React from 'react';

import classnames from 'classnames';

import ContentBox from 'components/contentbox/contentbox';
import Icon from 'components/icon/icon';
import YtPlaybar from 'components/ytPlaybar/ytPlaybar';

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
		mainMedia = (<iframe src={embedURL} frameBorder="0" allowFullScreen />);

		const screenShotUrl = `https://i.ytimg.com/vi/${mediaId}/hqdefault.jpg`;

		mainMedia = (
			<div
				data-mediaid={ mediaId }
				className={ classnames(styles[mediaType], 'js-video-placeholder', styles.videoPlaceholder) }
				style={{
					backgroundImage: `url(https://i.ytimg.com/vi/${ mediaId }/hqdefault.jpg)`,
				}}
			>
				<Icon className={ styles.playIcon } icon="play" center size="Yt"/>

				<YtPlaybar />

					{/*<img className="youtube-player" data-mediaid={ mediaId } src={ screenShotUrl } />*/}
			</div>
		);


	} else if (type === 'slideshare') {
		mediaType = 'slideshare';
		embedURL = `//www.slideshare.net/slideshow/embed_code/key/${mediaId}`;
		mainMedia = (
			<div className={ styles[mediaType] }>
				<iframe src={ embedURL } frameBorder="0" allowFullScreen />
			</div>
		)
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