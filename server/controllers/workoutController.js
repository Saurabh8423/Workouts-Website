const Workout = require("../models/workoutModels")


//Get All Data****************
const getWorkouts = async (req, res) => {
    try {
        const workoutData = await Workout.find().sort({ createdAt: -1 });
        res.status(200).json(workoutData);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

// Get a single Data **********************
const getWorkout = async (req, res) => {
    try {
        const id = req.params.id;
        const workoutData = await Workout.findById({ _id: id });
        res.status(200).json(workoutData);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}


//Created Record *************************
const createWorkOut = async (req, res) => {
    try {
        const newWorkout = new Workout(req.body);
        const workout = await newWorkout.save();
        res.status(201).json(workout)

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

// Updated Data *********************
const editWorkout = async (req, res) => {
    try {
        const id = req.params.id;
        const workoutData = await workout.findByIdAndUpdate({ _id: id }, req.body, { new: true });
        res.status(200).json(workoutData)
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

// deleted Data *****************
const deleteWorkout = async (req, res) => {
    try {
        const id = req.params.id;
        const workoutData = await Workout.findByIdAndDelete({ _id: id })
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkOut,
    editWorkout,
    deleteWorkout
};

