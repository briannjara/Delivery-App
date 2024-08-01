import React, { useContext } from "react";
import "./PlaceOder.css";
import { StoreContext } from "../../components/context/ShowContext";

const PlaceOder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <h2>Delivery Information</h2>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Town" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Postal Address" />
          <input type="text" placeholder="County" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>ksh.{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>ksh.{getTotalCartAmount() === 0 ? 0 : 100}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <p>
                ksh.
                {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 100}
              </p>
            </div>
          </div>
          <button onClick={getTotalCartAmount()}>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOder;
