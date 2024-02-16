import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import webRouter from './router/web.js';
import connection from './database/connection.js';
dotenv.config();

const app= express();
app.use(cors());
app.use(express.json());
connection();
app.use('/', webRouter);

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})