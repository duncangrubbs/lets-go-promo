const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));  
});

app.get('*', (req, res) => {
  res.send('404 Not Found');
});

if (NODE_ENV === 'development') {
    app.listen(PORT, () => console.log(`Dev Server Up on ${PORT}.....`));
} else { app.listen(PORT); }
