import React from "react";
import Courses from "../Home/Courses";

const Overview = () => {
  return (
    <section className="overview-section">
      <div className="container">
        <div className="study-options">
          <div className="study-options__header">
            <h3>Coures to get you started</h3>
            <p>Explore courses from experienced, real-world experts.</p>
          </div>
          <ul className="study-options__category">
            <li>
              <a href="#">
                <strong> Most Popular</strong>
              </a>
            </li>
            <li>
              <a href="#">
                <strong> New</strong>
              </a>
            </li>
            <li>
              <a href="#">
                <strong>Beginner favorite</strong>
              </a>
            </li>
          </ul>
        </div>

        <Courses />
      </div>
    </section>
  );
};

export default Overview;
