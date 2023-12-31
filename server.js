const express = require('express');
const app = express();
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

const userRoutes = require("./routes/user-routes");
const eventRoutes = require("./routes/event-routes");
const videos = require("./routes/video-routes");

app.use("/users", userRoutes);
app.use("/events", eventRoutes);
app.use("/videos", videos);


app.get('/', (req, res) => {
    res.send(`<h1>Welcome to my Yumi Chung App</h1>`);
});

app.listen(PORT, () => {
   console.log(`app running on port ${PORT}`)
});



