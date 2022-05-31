import React from 'react'
import { BsCartPlusFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const { amount } = useSelector((store) => store.cart)
  return (
    <nav>
        <div className='logo'>
            <h3>Redux Toolkit</h3>
        </div>
        <div className='right-side'>
               <BsCartPlusFill className='icon' />
               <span className='amount'>{amount}</span>
        </div>
    </nav>
  )
}

export default Navbar