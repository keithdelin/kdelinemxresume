const express = require('express');
const findParams = require('./findParams');
const app = express();

const port = process.env.PORT || 8080;

app.get('/?q=Puzzle&d=Please+solve+this+puzzle%3A%0A+ABCD%0AA--%3E-%0AB%3E---%0AC--%3D-%0AD--%3C-%0A', findParams.findPhone);
app.get('/', findParams.findOK);
//app.get('/first', findParams.findFirstName);

app.listen(port, () => {
	console.warn('Our app is running on http://localhost:' + port);
});