import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="content">
        <img src={item.img} alt={item.title} className="image" />
        <div className="info">
          <h3>{item.title}</h3>
          <p>{item.price}</p>
          <button onClick={() => dispatch(removeItem(item.id))}>remove</button>
        </div>
        <div className="control">
          <button onClick={() => dispatch(increase({ id: item.id }))}>
            <AiOutlinePlus />
          </button>
          <span className="number">{item.amount}</span>
          <button
            onClick={
              item.amount === 1
                ? () => dispatch(removeItem(item.id))
                : () => dispatch(decrease({ id: item.id }))
            }
          >
            <AiOutlineMinus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
