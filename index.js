// implement your API here
require('dotenv').config()

const port = process.env.PORT || 5000;

const express = require('express'); // import the express package

const server = express(); // creates the server

// watch for connections on port 5000
server.listen(port, () =>
    console.log(`Server running on http://localhost:${port}`)
);