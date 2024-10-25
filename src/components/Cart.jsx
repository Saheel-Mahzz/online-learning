import React from "react";

const Cart = () => {
  return (
    <section className="cart-section">
      <div className="container">
        <div className="cart-box">
          <div className="cart-box__title">
            <h3>Shopping Cart</h3>
            <p>0 Courses in Cart</p>
          </div>
          <div className="cart-box__wrapper">
            <figure className="cart-box__img">
              <img src="/assets/images/shopping.jpg" alt="image description" />
            </figure>
            <p>Your cart is empty. Keep shopping to find a course!</p>
            <button>Keep Shopping</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
