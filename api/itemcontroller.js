const express = require('express')
const app = express();

app.get('/users', (req, res) => {
    return res.send('GET HTTP method on user resource');
  });