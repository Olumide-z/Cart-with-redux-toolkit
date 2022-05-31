import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice';
import { closeModal } from '../features/modal/modalSlice';

const Modal = () => {
    const dispatch = useDispatch();

  return (
    <div className="modal-container">
        <div className="modal">
            <p className='modal-title'>Are you sure you want to empty your cart?</p>
            <div className="buttons">
                <button 
                    onClick={() => {
                            dispatch(clearCart())
                            dispatch(closeModal())
                        }}
                >CONFIRM</button>
                <button onClick={() => dispatch(closeModal())}>CANCEL</button>
            </div>
        </div>
    </div>
  )
}

export default Modal