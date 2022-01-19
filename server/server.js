const express = require('express');
const api = require('spotify-web-api-node');
const cors = require('cors');

const app = express();
app.use(cors());
app.get('/', function (req, res) {});
app.post('/login', (req, res) => {
	console.log('Server Login');

	const code = req.body.code;
	const spotifyApi = new api({
		redirectUri: 'http://localhost:8080',
		clientId: '3f6dec98d9e44b9ea256675711d16ba8',
		clientSecret: '3b62b6c131484a17a6a42621368d709e',
	});

	spotifyApi
		.authorizationCodeGrant(code)
		.then((d) => {
			res.json({
				accessToken: d.body.access_token,
				refreshToken: d.body.refresh_token,
				expireIn: d.body.expires_in,
			});
		})
		.catch((err) => {
			console.log(err);
			res.sendStatus(403);
		});
});

app.listen(8082);
