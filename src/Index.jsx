import React from 'react';

import Section from './components/section/section';
import LogoName from './components/logoName/logoName';
import YtVideo from 'components/ytVideo/ytVideo';

import globalStyle from './index.css';

import Media from 'components/media/media'



/**
 * decs={['SingleWhiteSlantedBox']}
 * decs="SingleWhiteSlantedBox"
 * decs={[{ type: 'SingleWhiteSlantedBox' }]}
 */


//
//

// document.addEventListener("DOMContentLoaded",
// 	function() {
// 		var div, n,
// 			v = document.getElementsByClassName("youtube-player");
// 		for (n = 0; n < v.length; n++) {
// 			div = document.createElement("div");
// 			div.setAttribute("data-id", v[n].dataset.id);
// 			div.innerHTML = labnolThumb(v[n].dataset.id);
// 			div.onclick = labnolIframe;
// 			v[n].appendChild(div);
// 		}
// 	});
//
// function labnolThumb(id) {
// 	return `<img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg">`;
// }
//
// function labnolIframe() {
// 	var iframe = document.createElement("iframe");
// 	var embed = "https://www.youtube.com/embed/ID?autoplay=1";
// 	iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
// 	iframe.setAttribute("frameborder", "0");
// 	iframe.setAttribute("allowfullscreen", "1");
// 	this.parentNode.replaceChild(iframe, this);
// }

export default () => (
	<div>
		<Section
			bg="LightBlue"
			padding="Large"
		>
			Hej
		</Section>
		<Section
			bg="LightBlue"
			padding="Medium"
		>
			<Media
				no="3"
				mediaId="eWmkBNBTbMM"
				type="yt"
				showViews
			/>
			<Media
				no="3"
				mediaId="R98cdsq1qxA"
				type="yt"
				showViews
			/>

			<Media
				no="3"
				mediaId="f9x7wL16KIk"
				type="yt"
			/>
		</Section>

		<Section
			bg="LightBlue"
			padding="Medium"
		>
			<Media
				no="2"
				mediaId="xLi3nBB6XeuOCK"
				type="slideshare"
			/>
		</Section>

		<Section
			bg="LightBlue"
			padding="Medium"
		>
			<Media
				no="2"
				mediaId="C_ZtQClrVYw"
				type="yt"
			/>
			<Media
				no="2"
				mediaId="eWmkBNBTbMM"
				type="yt"
			/>
		</Section>




		{/*<Section*/}
			{/*decs="SingleWhiteSlantedBox"*/}
			{/*bg="HoneyComb"*/}
			{/*cols="Even"*/}
			{/*padding="Medium"*/}
		{/*>*/}
			{/*<LogoName />*/}
		{/*</Section>*/}

		{/*<Section*/}
			{/*decs="SingleVideo"*/}
			{/*bg="Blue"*/}
			{/*cols="Even"*/}
			{/*padding="Large"*/}
		{/*>*/}
			{/*<YtVideo*/}
				{/*showViews*/}
				{/*ytId="R98cdsq1qxA"*/}
				{/*title="NativeScript vs. PhoneGap, React, Titanium, Ionic, etc"*/}
			{/*/>*/}
		{/*</Section>*/}
		{/*<Section*/}
			{/*decs="SingleVideo"*/}
			{/*bg="Blue"*/}
			{/*cols="Even"*/}
			{/*padding="Large"*/}
		{/*>*/}
			{/*<YtVideo*/}
				{/*ytId="eWmkBNBTbMM"*/}
				{/*title="Webpack 2 - A full tutorial"*/}
			{/*/>*/}
		{/*</Section>*/}

	</div>
);