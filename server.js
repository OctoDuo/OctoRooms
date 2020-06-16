const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const PORT = 3001;

app.use(cors());

app.use(express.static(path.join(__dirname, './client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT, function(err) {
  if(err) {
    throw err;
  } else {
    console.log(`You're connected to port: ${PORT}!`);
  }
})