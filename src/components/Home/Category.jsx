import React from "react";

const Category = () => {
  return (
    <section className="category">
      <div className="container">
        <h3>Top Categories</h3>
        <ul className="category-list">
          <li>
            <div className="category-list__img-holder">
              <figure className="category-list__img">
                <img
                  src="/assets/images/development.jpg"
                  alt="development image"
                />
              </figure>
            </div>
            <strong>Development</strong>
          </li>
          <li>
            <div className="category-list__img-holder">
              <figure className="category-list__img">
                <img
                  src="/assets/images/development.jpg"
                  alt="development image"
                />
              </figure>
            </div>
            <strong>Development</strong>
          </li>
          <li>
            <div className="category-list__img-holder">
              <figure className="category-list__img">
                <img
                  src="/assets/images/development.jpg"
                  alt="development image"
                />
              </figure>
            </div>
            <strong>Development</strong>
          </li>
          <li>
            <div className="category-list__img-holder">
              <figure className="category-list__img">
                <img
                  src="/assets/images/development.jpg"
                  alt="development image"
                />
              </figure>
            </div>
            <strong>Development</strong>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Category;
