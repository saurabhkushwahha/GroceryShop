import React, { useContext, useState } from 'react'
import './Fooditem.css'
import {assets} from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const Fooditem = ({id,name,price,description,image}) => {
  const [itemCount,setItemCount]=useState(0);
  const{cartItem,addToCart,removeFromCart,url}=useContext(StoreContext)
  return (
    <div className="food-item">
        <div className="food-item-img-container">
            <img src={url+"/images/"+image} alt=""  className="food-item-img" />
                {
                  !cartItem[id]
                  ?<img src={assets.add_icon_white} alt="" className="add" onClick={()=>addToCart(id)}/>
                  :<div className='food-item-counter'>
                       <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" className=""/>
                       <p>{cartItem[id]}</p>
                       <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" className=""/>
                    </div>
                }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" ></img>

            </div>
            <div className="food-item-desc">{description}</div>
            <div className="food-item-price">${price}</div>
        </div>
      
    </div>
  )
}

export default Fooditem
