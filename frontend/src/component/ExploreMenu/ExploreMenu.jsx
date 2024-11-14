import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setcategory}) => {
  return (
    <div>
      <div className="explore-menu" id="explore-menu">
        <h1>Explore our menu</h1>
        <p className="explore-menu-text">Choose from a diverse menu featuring a delectable array of food items available a affordable cost</p>
        <div className="explore-menu-list">
          {
          menu_list.map((item,index) =>{
            return(
              <div onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-items">
                <img className={category===item.menu_name?"active":""} src={item.menu_image}></img>
                <h2>{item.menu_name}</h2>
              </div>
            )
          })
          }
        </div>
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu
