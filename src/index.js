require('dotenv').config();

const express = require('express');

const app = express();
const PORT = +process.env.PORT;

app.get('/', (_req, res) => {
  return res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
