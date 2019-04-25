const express = require('express');
const findParams = require('./findParams');

const router = express.Router();

router.use((req, res, next) => {
  console.log('%s %s %s', req.method, req.url, req.path);
  next();
});
  
const app = express();

const port = process.env.PORT || 8080;

app.get('/', findParams.findParams);

app.listen(port, () => {
	console.log('Our app is running on http://localhost:' + port);
});