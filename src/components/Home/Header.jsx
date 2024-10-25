import React from "react";
import Titlecourse from "./Titlecourse";

const Selection = () => {
  return (
    <section className="section-header">
      <div className="container">
        <h1>A broad selection of courses</h1>
        <div className="section-header__txt">
          <p>
            Choose from over 250,000 online video courses with new additions
            published every months
          </p>
        </div>

        <ul className="courses-lists">
          <li>
            <a href="#">Python</a>
          </li>
          <li>
            <a href="#">Javascript</a>
          </li>
          <li>
            <a href="#">Web Developement</a>
          </li>
          <li>
            <a href="#">App Development</a>
          </li>
          <li>
            <a href="#">Graphics Design</a>
          </li>
        </ul>

        <Titlecourse />
      </div>
    </section>
  );
};

export default Selection;
