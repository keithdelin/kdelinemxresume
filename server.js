const express = require('express');
const findParams = require('./findParams');
const app = express();

const port = process.env.PORT || 8080;

app.get('/?q=Phone&d=Please+provide+a+phone+number+we+can+use+to+reach+you.', findParams.findPhone);
app.get('/', findParams.findOK);
//app.get('/first', findParams.findFirstName);

app.listen(port, () => {
	console.warn('Our app is running on http://localhost:' + port);
});