import React from "react";

const Instructor = () => {
  return (
    <section className="instructor-section">
      <div className="container">
        <div className="instructor">
          <h3>Instructor</h3>

          <div className="instructor__title">
            <a href="#">Saheel Mahzz</a>
            <span className="instructor__sub-title">
              Developer who enjoys coding
            </span>
          </div>
          <div className="instructor__details">
            <figure className="instructor__img">
              <img src="" alt="instructor image" />
            </figure>
            <div className="instructor__sub-details">
              <span>4.6 ratings</span>
              <span>100 reviews</span>
              <span>100 students</span>
              <span>20 courses</span>
            </div>
          </div>
          <div className="instructor__info">
            <p>
              Jose Marcial Portilla has a BS and MS in Mechanical Engineering
              from Santa Clara University and years of experience as a
              professional instructor and trainer for Data Science, Machine
              Learning and Python Programming. He has publications and patents
              in various fields such as microfluidics, materials science, and
              data science. Over the course of his career he has developed a
              skill set in analyzing data and he hopes to use his experience in
              teaching and data science to help other people learn the power of
              programming, the ability to analyze data, and the skills needed to
              present the data in clear and beautiful visualizations. Currently
              he works as the Head of Data Science for Pierian Training and
              provides in-person data science and python programming training
              courses to employees working at top companies, including General
              Electric, Cigna, SalesForce, Starbucks, McKinsey and many more.
              Feel free to check out the website link to find out more
              information about training offerings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
