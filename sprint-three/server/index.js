const express = require('express');
const router = express.Router();
const videoRoute = require('./routes/videos')
console.log(videoRoute);

const app = express();

app.use((req, res, next) => {
    console.log("hello");
    next();
})

app.use('/videos', videoRoute);

app.listen(8000, () => {
    console.log("here's the port");
})
