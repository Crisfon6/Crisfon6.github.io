const express = require('express');
const path = require('path');

const app = express();
app
    .use(express.static(path.join(__dirname, 'assets')))
app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server runing port ${process.env.PORT || 3000}`);
})