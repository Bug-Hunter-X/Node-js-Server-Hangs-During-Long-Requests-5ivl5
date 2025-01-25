const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Simulate a long-running task asynchronously
  setTimeout(() => {
    res.send('Hello World!');
  }, 5000);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});