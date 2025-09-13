const express = require("express");

const router = express.Router();

//Require controller*************
const { getWorkouts, getWorkout, createWorkOut, editWorkout, deleteWorkout } = require("../controllers/workoutController")


// Get entire records
router.get("/", getWorkouts);

//get single record ***********
router.get("/:id", getWorkout);

//Created Record*******************
router.post("/", createWorkOut)

//Updated Record *****************
router.patch("/:id", editWorkout);

//Delete Record *****************
router.delete("/:id", deleteWorkout);


module.exports = router;