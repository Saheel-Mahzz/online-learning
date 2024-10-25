import React from "react";

const CourseBanner = () => {
  return (
    <section className="course-banner-section">
      <div className="container">
        <div className="course-banner">
          <div className="course-banner__heading">
            <h2>The Complete Python Bootcamp From Zero to Hero in Python</h2>
            <div className="course-banner__info">
              <p>
                Learn Python like a Professional Start from the basics and go
                all the way to creating your own applications and games
              </p>
            </div>
          </div>

          <div className="course-banner__sub-details">
            <span>4.6</span>
            <span>100 students</span>
          </div>

          <div className="course-banner__author">
            <span>
              Created By : <a href="#">Saheel Mahzz</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseBanner;
