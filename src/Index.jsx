import React from 'react';

import MainSection from './components/mainSection/mainSection';
import Headline from './components/headline/headline';
import Box from './components/box/box';
import TwoUp from './components/twoUp/twoUp';
import Text from './components/text/text';
import SvgDropShadow from './components/svgDropShadow/svgDropShadow';
import Mockup from './components/mockup/mockup';
import Button from './components/button/button';
import Terminal from './components/terminal/terminal';
import Particles from './components/particles/particles';

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
		<SvgDropShadow />
		<MainSection bg="purple">
			<Headline type="section" icon="tickets">Public Speaking</Headline>
			<Box>
				<Media mediaId="eWmkBNBTbMM" type="yt" />
				<Headline type="single">NativeScript vs. PhoneGap, React, Titanium, Ionic, etc</Headline>
				<Text>Presented as Uppsala JS</Text>
			</Box>
			<TwoUp>
				<Box type="twoUp" no="first">
					<Media mediaId="R98cdsq1qxA" type="yt" />
					<Headline>NativeScript vs. PhoneGap, React, Titanium, Ionic, etc</Headline>
					<Text>Presented at Liferay North American Symposium, Boston, USA and at Liferay DevCon Darmstadt, Germany</Text>
				</Box>
				<Box type="twoUp" no="last">
					<Media mediaId="f9x7wL16KIk" type="yt" />
					<Headline>NativeScript vs. PhoneGap, React, Titanium, Ionic, etc</Headline>
					<Text>Presented as Uppsala JS</Text>
				</Box>
			</TwoUp>
			<Box>
				<Media mediaId="xLi3nBB6XeuOCK" type="slideshare" />
				<Headline type="single">How to create productive agile teams in uninhabitable organisations</Headline>
				<Text>Presented at J.Boye Conference Aarhus, Denmark and at Intranätverk, Göteborg, Sweden</Text>
			</Box>
		</MainSection>
		<MainSection bg="blue">
			<Headline type="section" icon="gift">Client Work</Headline>
			<Text standalone>Phosfluorescently scale optimal e-business rather than standards compliant niches. Compellingly deploy state of the art convergence rather than alternative paradigms. Intrinsicly negotiate cross-media growth strategies via team building paradigms.</Text>
			<TwoUp>
				<Box type="twoUpUneven" no="first">
					<Mockup mockup="rekListan" />
				</Box>
				<Box type="twoUpUneven" no="last">
					<Headline type="side">REK-listan</Headline>
					<Text>Presented at Liferay North American Symposium, Boston, USA and at Liferay DevCon Darmstadt, Germany</Text>
				</Box>
				<Button color="blue" side type="github" url="https://github.com/emiloberg/oppna-program-reklistan-app/" />
			</TwoUp>
			<Box>
				<Mockup mockup="hubotJira" />
				<Headline type="single" icon="logoSlack">Hubot Jira for Slack</Headline>
				<Text>Phosfluorescently scale optimal e-business rather than standards compliant niches. Compellingly deploy state of the art convergence rather than alternative paradigms. Intrinsicly negotiate cross-media growth strategies via team building paradigms. Perfect for answering the question "What happend yesterday?"

					hubot jira changed - Get yesterdays changed Jira issues
				</Text>
			</Box>
			<Box>
				<Terminal codeId="ddm-tool" title="emiloberg@emils-mbp:~/"/>
				<Headline type="single" icon="logoSlack">Liferay DDM Tool</Headline>
				<Text>Command Line Tool for authoring, uploading, downloading and synchronizing Liferay DDM related stuff (Structures and Templates) across environments. All transactions are done over JSON Web Services.</Text>
				<Button color="blue" type="github" url="https://github.com/emiloberg/oppna-program-reklistan-app/" />
			</Box>
		</MainSection>
		<MainSection bg="black" relative>
			<Particles />
			<Headline icon="robot" type="section" html="Internet of<br />Things Things"></Headline>
			<TwoUp noMargin>
				<Box type="twoUp" no="first">
					<Media mediaId="headphones.png" type="image" />
					<Headline>Node-RED Mopidy</Headline>
					<Text>This module enables you to control your Mopidy servers from Node-RED. This means that you - from Node-RED - can play all kinds of music, be it files on disk or streamed from Spotify, SoundCloud, Google Play Music or others.</Text>
				</Box>
				<Box type="twoUp" no="last">
					<Media mediaId="lights.png" type="image" />
					<Headline>Node-RED Tellstick</Headline>
					<Text>Remote control everything.</Text>
				</Box>
			</TwoUp>

			<TwoUp>
				<Box type="twoUp" no="first">
					<Button small color="black" type="github" url="https://github.com/emiloberg/oppna-program-reklistan-app/" />
				</Box>
				<Box type="twoUp" no="last">
					<Button small color="black" type="github" url="https://github.com/emiloberg/oppna-program-reklistan-app/" />
				</Box>
			</TwoUp>

			<TwoUp small>
				<Box type="twoUp" no="first">
					<Headline type="side">Node-RED Advanced Ping</Headline>
				</Box>
				<Box type="twoUp" no="last">
					<Text>This module enables you to control your Mopidy servers from Node-RED. This means that you - from Node-RED - can play all kinds of music, be it files on disk or streamed from Spotify, SoundCloud, Google Play Music or others.</Text>
					<Button small color="black" type="github" url="https://github.com/emiloberg/oppna-program-reklistan-app/" />
				</Box>
			</TwoUp>
			<TwoUp small>
				<Box type="twoUp" no="first">
					<Headline type="side">Node-RED File Function</Headline>
				</Box>
				<Box type="twoUp" no="last">
					<Text>This module enables you to control your Mopidy servers from Node-RED. This means that you - from Node-RED - can play all kinds of music, be it files on disk or streamed from Spotify, SoundCloud, Google Play Music or others.</Text>
					<Button small color="black" type="github" url="https://github.com/emiloberg/oppna-program-reklistan-app/" />
				</Box>
			</TwoUp>
		</MainSection>
	</div>
);
