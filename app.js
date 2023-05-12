const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require('./config/db');
const dotenv = require('dotenv');
// load config
dotenv.config({ path: './config/config.env'});
connectDB();

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`));
