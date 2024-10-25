import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="#">
          <img src="" alt="header logo" />
        </a>
      </div>
      <span className="header__category">Categories</span>
      <div className="header__input">
        <input type="text" placeholder="Search for anything" />
      </div>
      <span>Teach On Udemy</span>
      <span>cart</span>

      <div className="header__auth-btns">
        <Button title="Login" />
        <Button title="Sign up" />
      </div>
    </header>
  );
};

export default Navbar;
