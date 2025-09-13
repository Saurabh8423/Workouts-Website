require('dotenv').config();

const express = require('express');
const cors = require("cors")

const app = express();

//Port**********************
const port = process.env.PORT || 4000


// database connection*****************
require("./db/connection")


// Require routes*****************
const workoutRoutes = require("./routes/workoutRoutes")
const userRoutes = require("./routes/userRoutes")
//Middleware*********************
app.use(express.json());

app.use(cors());


app.get("/", (req,res)=>{
    res.send("hello")
})

//Routes ***********************
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);


app.listen(port, ()=>{
    console.log(`Server is running at PORT: ${port}`);
})