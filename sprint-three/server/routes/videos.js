const express = require('express');
const router = express.Router();
const fs = require('fs');
const uniqid = require("uniqid");

const videoPath = "./data/video-details.json";

const readVideos = () => {
    const fileContent = fs.readFileSync(videoPath);
    const parseFileContent = JSON.parse(fileContent);
    return parseFileContent;
}

const writeVideoInfo = (data) => {
    const videoContent = JSON.stringify(data); 
    fs.writeFileSync(videoPath, videoContent);
}

router.get('/', (_req, res) => {
    try{
        const videos = readVideos();
        return res.status(200).json(videos); 
    }catch(err){
        return res.status(500).json({error: "File cannot be read."})
    }
});    

router.get('/:id', (req, res) => {
    const videos = readVideos();
    const singleVideo = videos.find((video) => video.id === req.params.id);

    if(!singleVideo){
        return res.status(404).send("Video not found!")
    }
    res.json(singleVideo);
}); 

router.post('/', (req, res) => {
    
    const videos = readVideos();
    
    const newVideo = {
        id: uniqid(),
        title: "", //req.title
        channel: "Christy",
        image: "image",
        description: "",
        view: "1M",
        likes:"8,952",
        duration: "5:35",
        video: "video",
        timestamp: Date.now(),
        comments: []
    }
    videos.push(newVideo);
    writeVideoInfo(videos);
    
    try{
       return res.status(201).json(newVideo); 
    }catch{
        return res.status(404).send("Error")
    }
    
});

module.exports = router;