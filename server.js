const express = require("express");
const logger = require("morgan");
const path = require('path');
const Exercise = require('./models/exerciseData');
const mongoose = require("mongoose");
// const routes = require("./routes/index");
// const connectDB = require("./config/connectDB")

const PORT = process.env.PORT || 3000;

//sets up use of the express server=================
const app = express();

//link models
const db = require("./models")

app.use(logger("dev"));
//sets up use of the routes folder=============
// app.use(routes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/ndpexercise-tracker-01',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
//routes==============================================



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});