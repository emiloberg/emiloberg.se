import React from 'react';

import MainSection from './components/mainSection/mainSection';
import Headline from './components/headline/headline';
import Box from './components/box/box';
import BoxFullHeight from './components/boxFullHeight/boxFullHeight';
import TwoUp from './components/twoUp/twoUp';
import Text from './components/text/text';
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
              Full tutorial, from an empty .js file to functional RSS reader ready to be deployed to your iOS or Android device. <a rel="noopener" href="https://github.com/emiloberg/Uppsala.js-NativeScript-demo">Code available at GitHub</a>
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
              Introduction to Webpack 2, what is it and how does it differ from Browserify, Grunt, Gulp and Rollup?
            </p>
            <p>
              This is a preamble to the full Webpack 2 tutorial.
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
      <Box>
        <Mockup mockup="hubotJira" />
        <Headline type="single" icon="logoSlack">Hubot Jira for Slack</Headline>
        <Text>
          <p>
            This integrations helps you get up to speed with what's happened in the project you're working on.
          </p>
          <p>
            Just type <code>hubot jira changed</code> in Slack and Hubot will answer with everything which happend in Jira yesterday.
          </p>
        </Text>
        <Button color="white" type="github" url="https://github.com/emiloberg/hubot-jira-servant" />
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

			<TwoUp>
				<Box type="twoUpUneven" no="first">
					<Mockup mockup="rekListan" />
				</Box>
				<Box type="twoUpUneven" no="last">
					<Headline type="side">REK-listan</Headline>
					<Text>
            <p>
              Region Västra Götaland, VGR, estimates that they're paying 80 million SEK yearly because of prescribing the wrong drugs.
            </p>
            <p>
              This iOS and Android app help their medical professionals to prescribe the right drugs.
            </p>
            <p>
              Done as consultant work, but VGR loves to open source their things (yay!).
            </p>
          </Text>
          <Button color="white" type="github" url="https://github.com/emiloberg/oppna-program-reklistan-app/" />
				</Box>
			</TwoUp>

			<Box>
				<Terminal codeId="ddm-tool" title="emiloberg@emils-mbp:~/"/>
				<Headline type="single" icon="logoSlack">Liferay DDM Tool</Headline>
				<Text>
          <p>
            Very specialized tool for everyone working with <a href="https://www.liferay.com/" rel="noopener">Liferay</a>.
          </p>
          <p>
            Instead of having to manage structures and templates in the GUI in your browser, this command line to helps you for author, upload, download and sync Liferay DDM related stuff across environments.
          </p>
        </Text>
				<Button color="white" type="github" url="https://github.com/emiloberg/liferay-ddmtool" />
			</Box>

		</MainSection>
		<MainSection bg="black" relative>
			<Particles />
			<Headline icon="robot" type="section" html="Internet of<br />Things Things" />
      <Text standalone>
        <p>
          My home is my laboratory and I'm connecting way to many things to the internet. The plants tell me when they need water, the lights can be controlled from half way around the world (the necessity of this is still pending) and my morning music plays automagically.
        </p>
        <p>
          Raspberry Pi's and Arduinos are running the show and the dispatcher is <a href="https://nodered.org/" rel="noopener">Node-RED</a>. I've built a few modules myself. Take a look at them!
        </p>
      </Text>
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
					<Button color="white" type="github" url="https://github.com/emiloberg/node-red-contrib-mopidy" />
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
					<Button color="white" type="github" url="https://github.com/emiloberg/node-red-contrib-tellstick" />
				</Box>
			</TwoUp>
			<TwoUp>
				<Box type="twoUp" no="first" headlineOnly>
					<Headline type="side" prefix="Node-RED" prefixColor="red">Advanced Ping</Headline>
				</Box>
				<Box type="twoUp" no="last">
          <Text>
            <p>
              Pings a remote server. Combine it with Node-RED Tellstick and you can start the disco lights if your servers are down!
            </p>
          </Text>
					<Button color="white" type="github" url="https://github.com/emiloberg/node-red-contrib-advanced-ping" />
				</Box>
			</TwoUp>
			<TwoUp>
				<Box type="twoUp" no="first" headlineOnly>
					<Headline type="side" prefix="Node-RED" prefixColor="red">File Function</Headline>
				</Box>
				<Box type="twoUp" no="last">
          <Text>
            <p>
              Help when developing for Node RED. Instead of having to write your Javascript code in a small textfield in your browser you can use your favorite editor/IDE.
            </p>
          </Text>
					<Button color="white" type="github" url="https://github.com/emiloberg/node-red-contrib-file-function" />
				</Box>
			</TwoUp>
		</MainSection>
	</div>
);
