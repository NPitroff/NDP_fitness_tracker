const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes")

const PORT = process.env.PORT || 3000;

//sets up use of the express server=================
const app = express();

app.use(logger("dev"));
//sets up use of the routes folder=============
app.use(routes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});