
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public/dist')));

app.get('/', function(req, res){
  res.sendFile(__dirname +'/public/dist/index.html'); // change the path to your index.html
});

app.listen(port, () => {
  console.log(`Eric Proxy Server running at: http://localhost:${port}`);
});