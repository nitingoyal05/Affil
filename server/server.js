import express from 'express';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import path from "path";
import { ENV_VARS } from './config/envVars.js';



const express = require('express');
const app = express();
const PORT = 3000; 


app.use('/api/v1/auth',require('./routes/auth.route.js'));



app.use(express.json()); 

app.get('/', (req, res) => {
    res.send('Hello, World! Your Express server is running.');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
