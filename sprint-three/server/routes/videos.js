const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (_req, res) => {
    try{
        const fileContent = fs.readFileSync('./data/video-details.json');
        const parseFileContent = JSON.parse(fileContent);

        return res.status(200).json(parseFileContent); 
    }catch(err){
        return res.status(500).json({error: "File cannot be read."})
    }
});    

// router.get('/', (req, res) => {
//     res.send
// })


module.export = router;