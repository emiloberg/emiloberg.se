const fetch = require('node-fetch');
const fs = require('fs');
const http = require('http');

const APIKEY = require('./ytPublicApiKey.json').key;
const ytVideos = require('./data/media.json');
const videoIDs = Object.keys(ytVideos.yt).map(key => key);
const videoURLs = videoIDs.map((id) => (
	'https://www.googleapis.com/youtube/v3/videos?id=' + id + '&key=' + APIKEY + '&part=statistics')
);

function getYouTubeViews() {
	const out = {};
	return Promise.all(videoURLs.map(fetch))
		.then(res => Promise.all(res.map(item => item.text())))
		.then(res => res.map(item => JSON.parse(item)))
		.then(res => res.map(video => {
			out[video.items[0].id] = video.items[0].statistics.viewCount
		}))
		.then(() => out)
		.then(res => {
			fs.writeFileSync('./temp/yt-views.json', JSON.stringify(res));
		});
}

function dlPreviews() {
	videoIDs.forEach((id) => {
		const file = fs.createWriteStream(`./temp/${id}.jpg`);
		const request = http.get(`http://img.youtube.com/vi/${id}/maxresdefault.jpg`, function(response) {
			response.pipe(file);
		});
	});
}

function createTempDir() {
	return new Promise(resolve => {
		fs.mkdir('./temp', () => {
			resolve();
		});
	});
}


(function(){
	createTempDir()
		.then(getYouTubeViews)
		.then(dlPreviews);
}());