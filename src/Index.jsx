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
				<Button side type="github" url="https://github.com/emiloberg/oppna-program-reklistan-app/" />
			</TwoUp>
			<Box>
				<Mockup mockup="hubotJira" />
				<Headline type="single" icon="logoSlack">Hubot Jira for Slack</Headline>
				<Text>Phosfluorescently scale optimal e-business rather than standards compliant niches. Compellingly deploy state of the art convergence rather than alternative paradigms. Intrinsicly negotiate cross-media growth strategies via team building paradigms. Perfect for answering the question "What happend yesterday?"

					hubot jira changed - Get yesterdays changed Jira issues
				</Text>
			</Box>
			<Box>
				<Terminal code={ code } title="emiloberg@emils-mbp:~/"/>
				<Headline type="single" icon="logoSlack">Liferay DDM Tool</Headline>
				<Text>Command Line Tool for authoring, uploading, downloading and synchronizing Liferay DDM related stuff (Structures and Templates) across environments. All transactions are done over JSON Web Services.</Text>
			</Box>
		</MainSection>
	</div>
);


const code = `<span class="g">ddm</span>
[<span class="y">?</span>] Which project do you want to work with? <span class="b">acme</span>
[<span class="y">?</span>] Which host do you want to work with? <span class="b">local</span>
Getting data from server
Connected

[<span class="y">?</span>] What do you want to do? <span class="b">watch</span>
Press Ctrl+C to return to menu
Listening for changes...

[15:26:13] <span class="y">Changed</span> src/main/webapp/css/partials/atoms/_body.scss
[15:26:14] <span class="g">Okay</span> src/main/webapp/css/partials/atoms/_body.scss
[15:26:13] <span class="y">Changed</span> src/main/webapp/templates/main-nav.ftl
[15:26:14] <span class="g">Okay</span> src/main/webapp/templates/main-nav.ftl`;