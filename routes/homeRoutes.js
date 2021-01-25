const router = require('express').Router();
const db = require("../models");
const Exercise = require("../models/exerciseData");

//routes to get and push data to the db============

router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/index.html"));

});