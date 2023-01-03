import React, { useContext, useState } from "react";
import CartContext from "../Store/Cart-context";
import axios from "axios";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CheckOutForm from "./CheckoutForm";

function Cart(props) {
  const [isCheckout, setIsCheckout] = useState(false);

  const CartCtx = useContext(CartContext);
  const totalAmount = `$${CartCtx.totalAmount.toFixed(2)}`;
  const hasItems = CartCtx.items.length > 0;

  const cartRemoveHandler = (_id) => {
    CartCtx.removeItem(_id);
  };
  const cartAddHandler = (item) => {
    CartCtx.addItem({ ...item, amount: 1 });
  };
  const CartItems = CartCtx.items.map((item) => (
    <CartItem
      key={item._id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onRemove={cartRemoveHandler.bind(null, item._id)}
      onAdd={cartAddHandler.bind(null, item)}
    />
  ));

  const OrderHandler = () => {
    setIsCheckout(true);
  };
  // const ordritem=[]
  // for(each item in CartCtx.items){
  //   ordritem.push({item.name, item.amount});
  // }
  const submitOrderHandler = (userData) => {
    const orderDetails = {
      ...userData,
      orderedItems: CartCtx.items,
    };
    console.log(CartCtx.items);
    axios.post("http://localhost:5000/orders", orderDetails);
  };
  return (
    <Modal onClose={props.onClose}>
      <ul className={classes["cart-items"]}>{CartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <CheckOutForm onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && (
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onClose}>
            Close
          </button>
          {hasItems && (
            <button className={classes.button} onClick={OrderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </Modal>
  );
}

export default Cart;
