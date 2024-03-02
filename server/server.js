const express = require('express');
const app = express();
const PORT = 8000;

app.use('/', (req, res) => {
  res.json({ status: true, message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT number ${PORT}`);
});
