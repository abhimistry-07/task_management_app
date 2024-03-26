const express = require('express');
const connectDB = require('./db');
const userRouter = require('./routes/userRoutes');
const app = express();

require('dotenv').config();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Task Management App');
});

app.use('/user', userRouter);

app.listen(process.env.PORT, async () => {
    try {
        await connectDB;
        console.log('DB connected');
    } catch (error) {
        console.log(error);
    }
    console.log(`Listening to port ${process.env.PORT}`);
});