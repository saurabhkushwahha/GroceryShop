import React, { useContext } from 'react'
import './Placeorder.css'
import { StoreContext } from '../../context/StoreContext'
const Placeorder = () => {
  const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <form action="" className="place-order">
      <div className="place-order-left">
           <p className="title">Delivery Information</p>
           <div className="multi-fields">
            <input type="text" placeholder="first name"/>
            <input type="text"  placeholder="last name"/>
           </div>
           <input type="email" placeholder='Email address' />
           <input type="text" placeholder='Street' />
           <div className="multi-fields">
            <input type="text" placeholder="City"/>
            <input type="text"  placeholder="State"/>
           </div>
           <div className="multi-fields">
            <input type="text" placeholder="Zip code"/>
            <input type="text"  placeholder="Country"/>
           </div>
           <input type="text" placeholder='Phone number' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Total</p>
            <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
          </div>
          <button>PROCEED TO PAYMENT</button>

        </div>
      </div>
    </form>
  )
}

export default Placeorder
