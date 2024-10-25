import React from "react";

const Featured = () => {
  return (
    <section className="featured-section">
      <div className="container">
        <div className="featured-card">
          <h3>Featured Review</h3>

          <div className="featured-card__profile">
            <img src="" alt="profile image" />
            <div className="featured-card__details">
              <strong>Saheel Mahzz</strong>
              <span>9 courses</span>
              <span>2 Reviews</span>
            </div>
          </div>

          <div className="featured-card__comment">
            <p>
              Everything on this course is a goldmine except for the GUI since
              it's specific for Jupyter Notebooks and it's missing the video for
              GUI Events. Still it was a nice introduction to GUI. Don't let
              that disappoint you though. THIS IS A MUST HAVE COURSE. I have
              already recommended it to few people and always will. Do yourself
              a favor and do this course if you want to learn Python 3. Thank
              you so much for this course, Jose-sensei!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
