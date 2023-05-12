const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const morgan = require('morgan');
const exphbs = require('express-handlebars')

// load config
dotenv.config({ path: './config/config.env'});
connectDB();

// Running only in development mode // logging
if(process.env.NODE_DEV === 'development') {
    app.use(morgan('dev'));
};

// Handlebars
app.engine('.hbs',exphbs.engine({ defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

// routes
app.use('/', require('./routes/index'));

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`));
