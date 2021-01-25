const router = require('express').Router();
const db = require("../models");
const Exercise = require("../models/exerciseData");

//routes to get and push data to the db============

router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/index.html"));

});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  
  router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

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