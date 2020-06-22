const puppeteer = require('puppeteer');

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
	const browser = await puppeteer.launch({
		args: [
			'--no-sandbox',
			'--use-fake-ui-for-media-stream',
			'--use-fake-device-for-media-stream',
			'--use-file-for-fake-video-capture=' + __dirname + '/webcam.mjpeg',
			'--use-file-for-fake-audio-capture=' + __dirname + '/microphone.wav'
		]
	});
	try {
		const page = await browser.newPage();
		//page.on('console', msg => console.log('PAGE LOG:', msg.text()));
		page.on('pageerror', e => console.log(message));
		//await page.goto('http://localhost:8080/session/bots');
		await page.goto('https://krew.live/session/bots');
		await page.click('#camButton');
		await sleep(1000);
		await page.click('#joinButton');
	} catch (e) {
		console.log(e);
	}
})();
