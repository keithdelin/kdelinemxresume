// pull in express and param functions
const express = require('express');
const findParams = require('./findParams');
// set up instance of express
const app = express();
// set port
const port = process.env.PORT || 8080;
// handle query
app.get('/', findParams.findOK);
// listen to port
app.listen(port, () => {
	console.warn('Our app is running on http://localhost:' + port);
});