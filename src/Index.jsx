import React from 'react';

import MainSection from './components/mainSection/mainSection';
import Headline from './components/headline/headline';
import Box from './components/box/box';
import BoxFullHeight from './components/boxFullHeight/boxFullHeight';
import TwoUp from './components/twoUp/twoUp';
import Text from './components/text/text';
import SvgDropShadow from './components/svgDropShadow/svgDropShadow';
import Mockup from './components/mockup/mockup';
import Button from './components/button/button';
import Terminal from './components/terminal/terminal';
import Particles from './components/particles/particles';
import Header from './components/header/header';

import globalStyle from './index.css';

import Media from 'components/media/media'

export default () => (
	<div>
		<Header />
		<MainSection bg="blue" padding="start">
			<Headline type="section" icon="tickets">Public Speaking</Headline>
			<TwoUp>
				<Box type="twoUp" no="first">
					<Media mediaId="R98cdsq1qxA" type="yt" />
					<Headline>NativeScript vs. PhoneGap, React, Titanium, Ionic, etc</Headline>
					<Text>
            <p>
              Introduction to the different ways of doing mobile development.
            </p>
            <p>
              What is native, cross compiled, web based and javascript runtime apps and how do the different technologies compare?
            </p>
          </Text>
				</Box>
				<Box type="twoUp" no="last">
					<Media mediaId="MhwBpVRfljU" type="yt" />
					<Headline>Getting started with NativeScript</Headline>
          <Text>
            <p>
              How can you use NativeScript to build a Native Mobile App in Javascript?
            </p>
            <p>
              Full tutorial, from empty javascript file to functional RSS reader ready to be deployed to your iOS or Android device.
            </p>
          </Text>
				</Box>
			</TwoUp>
      <Box>
        <Media mediaId="f9x7wL16KIk" type="yt" />
        <Headline>Rapid Frontend Development - For Everyone!</Headline>
        <Text>
          <p>
            Walkthrough of the tools I developed to ease frontend development in a Liferay environment. This makes advanced frontend development a breeze even for users who haven’t worked with Liferay before.
          </p>
          <p>
            Presented at Liferay North American Symposium, Boston, USA and at Liferay DevCon Darmstadt, Germany
          </p>
        </Text>
      </Box>
      <TwoUp>
        <Box type="twoUp" no="first">
          <Media mediaId="C_ZtQClrVYw" type="yt" />
          <Headline>Webpack 2 vs Browserify, Grunt, Gulp, Rollup</Headline>
          <Text>
            <p>
              Introduction to the different ways of doing mobile development.
            </p>
            <p>
              What is native, cross compiled, web based and javascript runtime apps and how do the different technologies compare?
            </p>
          </Text>
        </Box>
        <Box type="twoUp" no="last">
          <Media mediaId="eWmkBNBTbMM" type="yt" />
          <Headline type="single">Webpack 2 - A full tutorial </Headline>
          <Text>
            <p>
              What is Webpack and how do we use it to create production ready code and to ease with development. Starting with a blank .js file and ending with a beautiful production ready bundle.
            </p>
            <p>
              <a rel="noopener" href="https://github.com/emiloberg/webpack-tutorial">
                Code and links available at GitHub
              </a>
            </p>
          </Text>
        </Box>
      </TwoUp>
			<Box>
				<Media mediaId="xLi3nBB6XeuOCK" type="slideshare" />
				<Headline type="single">How to create productive agile teams in uninhabitable organisations</Headline>
				<Text>
          <p>
            Lessons learned from working with a university with 13&nbsp;000 people who all knows best, even when it comes to software development.
          </p>
          <p>
            Presented at J.Boye Conference Aarhus, Denmark, at Intranätverk, Göteborg, Sweden, and at Kommunikatör i Högskolan, Stockholm, Sweden.
          </p>
        </Text>
			</Box>
		</MainSection>
		<MainSection bg="purple">
			<Headline type="section" icon="gift">Open Source</Headline>
			<Text standalone>Phosfluorescently scale optimal e-business rather than standards compliant niches. Compellingly deploy state of the art convergence rather than alternative paradigms. Intrinsicly negotiate cross-media growth strategies via team building paradigms.</Text>
			<TwoUp>
				<Box type="twoUpUneven" no="first">
					<Mockup mockup="rekListan" />
				</Box>
				<Box type="twoUpUneven" no="last">
					<Headline type="side">REK-listan</Headline>
					<Text>Presented at Liferay North American Symposium, Boston, USA and at Liferay DevCon Darmstadt, Germany</Text>
				</Box>
				<Button color="white" side type="github" url="https://github.com/emiloberg/oppna-program-reklistan-app/" />
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
				<Button color="white" type="github" url="https://github.com/emiloberg/oppna-program-reklistan-app/" />
			</Box>
      <TwoUp>
        <Box type="twoUp" no="first">
          <Media mediaId="hello-world.png" type="image" />
          <Headline>Liferay React Hello World</Headline>
          <Text>
            <p>
              Boilerplate for creating React apps in Liferay Digital Experience Platform. Will give you a JAR ready to be deployed in your app server. All the normal stuff works just as it should; styling, URL routing, hot module replacement and all the other goodies.
            </p>
            <p>
              Battle tested in large enterprise conditions.
            </p>
          </Text>
          <Button color="white" type="github" url="https://github.com/emiloberg/liferay-react-hello-world" />
        </Box>
        <Box type="twoUp" no="last">
          <Media mediaId="styleguide.png" type="image" />
          <Headline type="single">Markdown Styleguide Generator</Headline>
          <Text>
            <p>
              Use simple Markdown comments in your (s)css and let the generator create a styleguide for you. The styleguide will always tell the truth.
            </p>
            <p>
              One of the few, if not the only styleguide generator, which is actually <em>live</em> as it will always use the current style of the site and not the style as it looked when the generator ran.
            </p>
            <Button color="white" type="github" url="https://github.com/emiloberg/markdown-styleguide-generator" />
          </Text>
        </Box>
      </TwoUp>
		</MainSection>
		<MainSection bg="black" relative>
			<Particles />
			<Headline icon="robot" type="section" html="Internet of<br />Things Things" />
			<TwoUp>
				<Box type="twoUp" no="first">
					<BoxFullHeight>
						<Media mediaId="mopidy.png" type="image" />
						<Headline prefix="Node-RED" prefixColor="red">Mopidy</Headline>
            <Text>
              <p>
                This module enables you to control your <a href="https://www.mopidy.com/" rel="noopener">Mopidy</a> servers from Node-RED. This means that you - from Node-RED - can play all kinds of music, be it files on disk or streamed from Spotify, SoundCloud, Google Play Music or others.
              </p>
            </Text>
					</BoxFullHeight>
					<Button color="white" type="github" url="https://github.com/emiloberg/oppna-program-reklistan-app/" />
				</Box>
				<Box type="twoUp" no="last">
					<BoxFullHeight>
						<Media mediaId="tellstick.png" type="image" />
            <Headline prefix="Node-RED" prefixColor="red">Tellstick</Headline>
						<Text>
              <p>
                Remote control everything!
              </p>
              <p>
                Send data to a <a href="www.telldus.se/products/tellstick" rel="noopener">Tellstick</a>, e.g. turning a lamp on, and receive data, e.g from a remote control or a temperature sensor.
              </p>
            </Text>
					</BoxFullHeight>
					<Button color="white" type="github" url="https://github.com/emiloberg/oppna-program-reklistan-app/" />
				</Box>
			</TwoUp>
			<TwoUp>
				<Box type="twoUp" no="first" headlineOnly>
					<Headline type="side" prefix="Node-RED" prefixColor="red">Advanced Ping</Headline>
				</Box>
				<Box type="twoUp" no="last">
          <Text>
            <p>
              This module enables you to control your <a href="https://www.mopidy.com/" rel="noopener">Mopidy</a> servers from Node-RED. This means that you - from Node-RED - can play all kinds of music, be it files on disk or streamed from Spotify, SoundCloud, Google Play Music or others.
            </p>
          </Text>
					<Button color="white" type="github" url="https://github.com/emiloberg/oppna-program-reklistan-app/" />
				</Box>
			</TwoUp>
			<TwoUp>
				<Box type="twoUp" no="first" headlineOnly>
					<Headline type="side" prefix="Node-RED" prefixColor="red">File Function</Headline>
				</Box>
				<Box type="twoUp" no="last">
          <Text>
            <p>
              This module enables you to control your <a href="https://www.mopidy.com/" rel="noopener">Mopidy</a> servers from Node-RED. This means that you - from Node-RED - can play all kinds of music, be it files on disk or streamed from Spotify, SoundCloud, Google Play Music or others.
            </p>
          </Text>
					<Button color="white" type="github" url="https://github.com/emiloberg/oppna-program-reklistan-app/" />
				</Box>
			</TwoUp>
		</MainSection>
		<SvgDropShadow />
	</div>
);
