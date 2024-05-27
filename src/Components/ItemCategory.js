import React, { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";

const ItemCategory = ({ itemCard }) => {
 
 const dispatch = useDispatch();
   const addtocart  = (menu)=>{
     dispatch(addToCart(menu?.card?.info));
     console.log("success");
   }

  return (
    <div>
      {itemCard.map((menu) => (
        <div  key={menu?.card?.info?.id}>
          <div className="mb-20 mt-10 flex h-32">
            <div className="w-5/6">
              {" "}
              <p>{menu?.card?.info?.name}</p>
              <p>₹{menu?.card?.info?.price / 100 || menu?.card?.info?.defaultPrice / 100 }  </p>
              <p>{menu?.card?.info?.description}</p>
            </div>
            <div className="w-1/6 ">
              {" "}
              <img
                className=" rounded-lg h-28 "
                src={CDN_URL + menu?.card?.info?.imageId}
                alt="menuItems"
              />
              <button onClick={()=>addtocart(menu)} className=" text-green-600 font-bold border border-white px-5 py-1 shadow-md rounded-md bg-white" >ADD</button>
            </div>

            {/* <li>{ menu?.card?.info?.imageId}</li> */}
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ItemCategory;
