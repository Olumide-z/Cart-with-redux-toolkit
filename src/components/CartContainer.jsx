import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from './CartItem'
import { clearCart } from '../features/cart/cartSlice';
import { openModal } from '../features/modal/modalSlice';

const CartContainer = () => {
    const { cartItems, total, amount } = useSelector((store) => store.cart);
   
    const dispatch = useDispatch();

    if(amount < 1){
        return (
            <div>
                <h3>YOUR CART</h3>
                <p>Your cart is currently empty</p>
            </div>
        )
    }

    return (
    <div className='cartContainer'>
        <h1>YOUR CART</h1>
        <div className='cartContent'>
            {cartItems.map((item) => {
                return <CartItem key={item.id} item={item}/>
            })}
        </div>
        <div className="total">
            <p className='p'>Total</p>
            <p className='p'>${total.toFixed(2)}</p>
        </div>
        <button onClick={() => dispatch(openModal())}>CLEAR ITEMS</button>
    </div>
  )
}

export default CartContainer