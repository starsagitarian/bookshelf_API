require('dotenv').config();
const express = require('express');
const logger = require('morgan');


const app = express();
app.use(logger('dev'));
app.use(express.json());

PORT = process.env.PORT || 3003;

app.listen(PORT, async() => {
    console.log(`The server is active at port http://localhost:${PORT}`);
});