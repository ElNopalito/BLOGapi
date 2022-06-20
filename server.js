const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bcrypt = require('bcrypt')
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const mongoConfig = require('./Config/mongoConfig');

//!---------------------------------------------Importing Routers------------------------
const authRouter = require('./Route/authRouter')
const userRouter = require('./Route/userRouter');
const blogRouter = require('./Route/blogRouter');

//!-----------------------------------------------Modules Config------------------------------
const app = express();
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));

//!---------------------------------------------Router Config----------------------------------
app.use('/Blog', blogRouter);
app.use('/User', userRouter);
app.use('/auth', authRouter)
//!----------------------------------------MAIN SERVER------------------------------------- 
app.get('/', (req,res) => {
    res.status(200).json({message: 'Welcome to API'})
})
//!----------------------------------------APP LISTEN---------------------------------------
app.listen(PORT, () => { 
    console.log(`Server is running on ${PORT}`);
    mongoConfig();
})