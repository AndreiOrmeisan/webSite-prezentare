import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./SkillMeter.css";

const SkillMeter = ({ skill, percentage, color }) => {
  return (
    <div className="skill-meter">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: color,
          trailColor: "#3e4a61",
        })}
      />
      <h3>{skill}</h3>
    </div>
  );
};

export default SkillMeter;
