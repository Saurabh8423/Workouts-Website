import React, { useContext, useEffect } from "react";
import { Data } from "../../Context/WorkoutContext";
import "./RecordsStyle.css";

const Records = () => {
  const { workouts, getWorkouts, deleteWorkout, toggleUpdate } =
    useContext(Data);

  useEffect(() => {
    getWorkouts();
  }, [getWorkouts]);

  return (
    <div className="records">
      {workouts &&
        workouts.map((item) => {
          return (
            <div className="record" key={item._id}>
              <h1>{item.title}</h1>
              <p>Reps: {item.reps}</p>
              <p>Load(in Kg):{item.load}</p>
              <div className="btns">
                <img
                  onClick={() => toggleUpdate(item)}
                  src={require("../../assets/edit.png")}
                  alt=""
                />

                <img
                  src={require("../../assets/delete.png")}
                  onClick={() => deleteWorkout(item._id)}
                  alt=""
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Records;
