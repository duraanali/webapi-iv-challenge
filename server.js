require('dotenv').config()

const express = require("express");
const server = express();
const postRoutes = require("./posts/postRoutes");
const cors = require("cors");
server.use(express.json());
server.use(cors());
server.use("/api/posts", postRoutes);
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server Listening on Port: ${port}`));