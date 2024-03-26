const express = require('express');
const connectDB = require('./db');
const app = express();

require('dotenv').config();

app.get('/', (req, res) => {
    res.send('Task Management App');
});

app.listen(process.env.PORT, async () => {
    try {
        await connectDB;
        console.log('DB connected');
    } catch (error) {
        console.log(error);
    }
    console.log(`Listening to port ${process.env.PORT}`);
});