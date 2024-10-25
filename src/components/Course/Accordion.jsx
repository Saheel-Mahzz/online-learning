import React from "react";

const Accordion = () => {
  return (
    <section className="accordion-section">
      <div className="container">
        <h2>Course Content</h2>
        <div className="accordion">
          <div className="accordion__item">
            <h3>Welcome Orientation</h3>
          </div>
          <ul className="accordion__content">
            <li>Introducing Temberry</li>
            <li>Introducing Temberry</li>
            <li>Introducing Temberry</li>
            <li>Introducing Temberry</li>
          </ul>
          <div className="accordion__item active">
            <h3>Welcome Orientation</h3>
          </div>
          <ul className="accordion__content">
            <li>Introducing Temberry</li>
            <li>Introducing Temberry</li>
            <li>Introducing Temberry</li>
            <li>Introducing Temberry</li>
          </ul>
          <div className="accordion__item">
            <h3>Welcome Orientation</h3>
          </div>
          <ul className="accordion__content">
            <li>Introducing Temberry</li>
            <li>Introducing Temberry</li>
            <li>Introducing Temberry</li>
            <li>Introducing Temberry</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
