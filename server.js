const express = require('express');
const findParams = require('./findParams');
const app = express();

const port = process.env.PORT || 8080;

app.get('/', findParams.findParams);

app.listen(port, () => {
	console.log('Our app is running on http://localhost:' + port);
});