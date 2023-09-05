const express = require("express");
const router = express.Router();
const fs = require("fs");

let serverURL;

console.log('NODE_ENV', process.env.NODE_ENV );

if(process.env.NODE_ENV === 'production'){
    serverURL = process.env.SERVER_URL;
} else {
    serverURL = process.env.SERVER_URL + process.env.PORT
}   


router.get('/', (req, res) => {
    console.log('made it to the videos at /videos');
    const videosJSON = fs.readFileSync("./data/videos.json");
    const videosObject = JSON.parse(videosJSON);


    const videos = videosObject.map((video) => {
        return {
            ...video, //spread's big use case is map.
            image: serverURL + "/images/"+video.image,
            video: serverURL + "/videos/"+video.video,
        }
    });
console.log('videos', videos);

    if (videos) {
        res.send(videos);
    } else {
        res.status(400).send();
    }
});

module.exports = router;