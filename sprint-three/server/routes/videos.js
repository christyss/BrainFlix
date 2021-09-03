const express = require('express');
const router = express.Router();
const fs = require('fs');
const uniqid = require("uniqid");

const videoPath = "./data/video-details.json";

const readVideos = () => {
    const videoFileContent = fs.readFileSync(videoPath);
    const parseVideoFileContent = JSON.parse(videoFileContent);
    return parseVideoFileContent;
}

const writeVideoInfo = (newData) => {
    const videoContent = JSON.stringify(newData); 
    fs.writeFileSync(videoPath, videoContent);
}

router.get('/videos', (_req, res) => {
    try{
        const videos = readVideos();
        return res.status(200).json(videos); 
    }catch(err){
        return res.status(500).json({error: "File cannot be read."})
    }
});    

router.get('/videos/:id', (req, res) => {
    const videos = readVideos();
    const singleVideo = videos.find((video) => video.id === req.params.id);

    if(!singleVideo){
        return res.status(404).send("Video not found!")
    }
    res.json(singleVideo);
}); 

router.post('/videos', (req, res) => {
    
    const videos = readVideos();
    
    const newVideo = {
        id: uniqid(),
        title: req.body.title,
        channel: "Christy",
        image: "images/image.jpeg",
        description: req.body.description,
        views: "1,000,002",
        likes:"8,952",
        duration: "5:35",
        video: "",
        timestamp: Date.now(),
        comments: []
    }
    
    videos.push(newVideo);
    writeVideoInfo(videos);
    
    return res.status(201).json(newVideo); 
    
});

module.exports = router;