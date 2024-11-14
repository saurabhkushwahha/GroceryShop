import React, { Profiler, useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {
    const[menu,setmenu]=useState("home")
    const {getTotalCartAmount,token,setToken} = useContext(StoreContext)
     const navigate=useNavigate();
    const logout=()=>{
        localStorage.removeItem("token");
        setToken("");
        navigate("/")

    }
  return (
    <div className="navbar">
      {/* <Link to='/'><img src={assets.logo} className='logo' alt=""/></Link> */}
      <Link to='/'>
      <h1>Grocery
        <span>Shop</span>

      </h1>
      </Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>{setmenu("home")}} className={menu=="home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>{setmenu("menu")}} className={menu=="menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={()=>{setmenu("mobile-app")}} className={menu=="mobile-app"?"active":""}>Mobile-app</a>
        <a href="#footer" onClick={()=>{setmenu("contact us")}} className={menu=="contact us"?"active":""}>Contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search} alt="" className="search"></img>
        <div className="navbar-search-icon">
           <Link to='/cart'><img src={assets.basket} className="basket" alt=""/></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        {
          !token?<button onClick={()=>setShowLogin(true)}>sign in</button>
          :<div className="navbar-profile">
                <img src={assets.profile_icon} alt=""/>
                <ul className="nav-profile-dropdown">
                  <li><img src={assets.bag_icon}/><p>Orders</p></li>
                  <hr/>
                  <li onClick={logout}><img src={assets.logout_icon}/><p>Logout</p></li>
                </ul>
          </div>
        }

      </div>
    </div>
  )
}

export default Navbar
