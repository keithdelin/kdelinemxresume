const express = require('express');
const findParams = require('./findParams');
const app = express();

const port = process.env.PORT || 8080;

// app.set('view engine', 'ejs');

// app.use(express.static(__dirname + '/public'));

// app.get('/', (req, res) => {
// 	res.render('index');
// });

app.get('/', findParams.findParams);

app.listen(port, () => {
	console.log('Our app is running on http://localhost:' + port);
});