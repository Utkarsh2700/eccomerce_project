import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./style.css";

import React from "react";

const CircleRating = ({ rating }) => {
  return (
    <div className="circleRating dark:text-white">
      <CircularProgressbar
        value={rating}
        maxValue={5}
        text={rating}
        styles={buildStyles({
          pathColor: rating < 3 ? "red" : rating < 3.8 ? "orange" : "green",
        })}
      />
    </div>
  );
};

export default CircleRating;
