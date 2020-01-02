const express = require('express');
const app = express();
var port = 3000;

app.get('/', (req, res) => res.send('hello al!'));

app.listen(port, () => {
    console.log('MY REST API IS RUNNING ON PORT ' + port)
})