import React, { useContext } from "react";
import CartContext from "../../Store/Cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

function MealItem(props) {
  const CartCtx = useContext(CartContext);
  const price = `$${props.meal.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    CartCtx.addItem({
      _id: props.meal._id,
      name: props.meal.name,
      amount: amount,
      price: props.meal.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;
