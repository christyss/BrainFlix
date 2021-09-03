const express = require('express');
const cors = require('cors');
const videoRoute = require('./routes/videos');

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8001;

app.use(express.json());

app.use(express.static("public"));

app.use(cors());

app.use((req, res, next) => {
    console.log("response");
    next();
});

app.use('/api', videoRoute);

app.listen(port, () => {
    console.log(`server is running on ${port}`);
})
