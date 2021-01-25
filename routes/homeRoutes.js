const router = require('express').Router();
const db = require("../models");
const Exercise = require("../models/exerciseData");

//routes to load the different pages============

router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/index.html"));

});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  
  router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
//route to get the workout data==================
  router.get("/api/workouts", (req, res) => {
    console.log(req.body);
  
    Exercise.find({})
      .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  //route to create new exercise data===========
  router.post("/api/workouts", (req, res) => {
    console.log(req.body);
  
    Exercise.create({
      exercises: []
    })
      .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.json(err);
      });
  });