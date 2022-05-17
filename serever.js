require("dotenv").config({ path: "./config/.env" });
const express = require('express');
const connectDB = require("./config/connectDB");
const usersRoute = require('./routes/useroutes');

const app = express();

connectDB();

app.use('/api', usersRoute)


const PORT = porcess.env.port;
app.listem(PORT, console.log(`server started on Port ${PORT}`));
