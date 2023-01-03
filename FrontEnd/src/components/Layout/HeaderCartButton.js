import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../Store/Cart-context";
import classes from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);
  const cartItemNumber = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItemNumber}</span>
    </button>
  );
}

export default HeaderCartButton;
