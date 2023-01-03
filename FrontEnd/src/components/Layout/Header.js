import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Food</h1>
        <HeaderCartButton onClick={props.CartShow} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Meals Image" />
      </div>
    </Fragment>
  );
}
export default Header;
