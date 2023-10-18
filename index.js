import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import helloRouter from './routes/route.js';
import userRouter from './routes/user.route.js';
import dotenv from 'dotenv/config.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/', helloRouter);
app.use('/users', userRouter);

const URL = process.env.MONGODB_URL;
mongoose.connect(URL);
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('MongoDB database connection established successfully')
})

app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`);
})