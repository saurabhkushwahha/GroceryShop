import React from "react";
import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const StoreContext=createContext(null)
const StoreContextProvider = (props)=>{
const[cartItem,setCartItems]=useState({})

const url="http://localhost:4000";
const [token,setToken]=useState("")
const [food_list,setFoodList]=useState([])




const addToCart=async (itemId)=>{
    if(!cartItem[itemId]){
        setCartItems((prev=>({...prev,[itemId]:1})))
    }else{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    if(token){
      await  axios.post(url+"/app/cart/add",{itemId},{headers:{token}})
    }

}

const removeFromCart = (itemId) =>{
    setCartItems((prev=>({...prev,[itemId]:prev[itemId]-1})))
}

 const getTotalCartAmount = () =>{
    let totalAmount = 0;
    for(const item in cartItem){
        if(cartItem[item]>0){
            let itemInfo=food_list.find((product)=>product._id===item);
            totalAmount += itemInfo.price * cartItem[item];
        }

    }
    return totalAmount;
  }

    const fetchFoodList=async ()=>{
        const response= await axios.get(url+"/app/food/list");
        setFoodList(response.data.data);
    }



   useEffect(()=>{

    async function localData() {
        await fetchFoodList();
        const token=localStorage.getItem("token");
    if(token){
        setToken(token);
    }
    }
    localData();
   },[])
   const contextValue={
    food_list,
    cartItem,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken

   }
   return(
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
   )


}
export default StoreContextProvider
