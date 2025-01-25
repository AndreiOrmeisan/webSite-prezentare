import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SkillMeter = ({ skill, percentage, color }) => {
  return (
    <div style={{ width: "60px", margin: "20px" }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: color,
          trailColor: "#3e4a61", // Background circle
        })}
      />
      <h3 style={{ color: "#fff", textAlign: "center", marginTop: "10px" }}>
        {skill}
      </h3>
    </div>
  );
};

export default SkillMeter;
