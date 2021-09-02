const express = require('express');
const cors = require('cors');
const videoRoute = require('./routes/videos');

const app = express();
const port = 8000;

app.use(express.json());

app.use(express.static('images'));

app.use(cors());

app.use((req, res, next) => {
    next();
});

app.use((req, res, next) => {
    if(req.method === 'POST' && req.headers['content-type'] !== 'application/json'){
        return res.status(400)
    }
    next();
});

app.use('/videos', videoRoute);

app.listen(port, () => {
    console.log("here's the port");
})
