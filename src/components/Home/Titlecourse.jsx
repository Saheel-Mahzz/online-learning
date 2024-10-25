import React from "react";
import Courses from "./Courses";

const Titlecourse = () => {
  return (
    <div className="container">
      <h2>Expand your career opportunities with Python</h2>
      <p>
        Take one of Udemy’s range of Python courses and learn how to code using
        this incredibly useful language. Its simple syntax and readability makes
        Python perfect for Flask, Django, data science, and machine learning.
        You’ll learn how to build everything from games to sites to apps. Choose
        from a range of courses that will appeal tos
      </p>

      <Courses />
    </div>
  );
};

export default Titlecourse;
