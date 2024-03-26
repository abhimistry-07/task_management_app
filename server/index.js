const express = require('express');
const connectDB = require('./db');
const userRouter = require('./routes/userRoutes');
const taskRouter = require('./routes/taskRoute');
const authenticate = require('./middlewares/authMiddleware');
const app = express();
const cors = require('cors');

require('dotenv').config();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Task Management App');
});

app.use('/user', userRouter);

app.use('/task', authenticate, taskRouter);

app.listen(process.env.PORT, async () => {
    try {
        await connectDB;
        console.log('DB connected');
    } catch (error) {
        console.log(error);
    }
    console.log(`Listening to port ${process.env.PORT}`);
});