const express = require("express");
const logger = require("morgan");
const path = require("path");
const Exercise = require("./models/exerciseData");
const mongoose = require("mongoose");
// const routes = require("./routes/index");
// const connectDB = require("./config/connectDB")

const PORT = process.env.PORT || 3000;

//sets up use of the express server=================
const app = express();

//link models
const db = require("./models");

app.use(logger("dev"));
//sets up use of the routes folder=============
// app.use(routes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/ndpexercise-tracker-01",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);
//routes==============================================
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/exercise.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/stats.html"));
});

//create new exercise==============
app.get("/api/workouts", async (req, res) => {
  Exercise.find({})
    .then((dbExercise) => {
      res.json(dbExercise);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post("/api/workouts", async (req, res) => {
  const exercise = new Exercise({ exercises: req.body });
  Exercise.create(exercise)
    .then((dbExercise) => {
      res.json(dbExercise);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.put("/api/workouts/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  Exercise.findById(id)
    .then((dbExercise) => {
      dbExercise.exercises.push(data);
      return dbExercise;
    })
    .then((dbExercise) => {
      Exercise.findOneAndUpdate(
        { _id: id },
        { exercises: dbExercise.exercises },
        { new: true }
      )
        .then((dbExercise) => {
          res.json(dbExercise);
        })
        .catch((err) => {
          res.json(err);
        });
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get("/api/workouts/range", async (req, res) => {
  Exercise.find({})
    .then((dbExercise) => {
      res.json(dbExercise);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
