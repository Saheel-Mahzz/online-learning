import React from "react";
import Courses from "./Courses";

const Learners = () => {
  return (
    <section className="learners">
      <div className="container">
        <h3>Learners are viewing</h3>
        <Courses />
      </div>
    </section>
  );
};

export default Learners;
