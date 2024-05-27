import React, { useState } from 'react'
import ItemCategory from './ItemCategory';

// import ItemCategory from './ItemCategory';

const Menu = (props) => {
  const menuData = props.menu;

  const [showData,SetShowData] = useState(false);
  
  const filterMenu = menuData.filter((item)=>item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  // console.log(filterMenu);
  const handleclick = ()=>{
    SetShowData(!showData);
  }
  return (
    <div className='inline-block'>
        {filterMenu.map(item=>
        <div key={item?.card?.card?.title}>
        <div>
        <li onClick={handleclick} className='block font-bold cursor-pointer'> {item?.card?.card?.title} ({item?.card?.card?.itemCards.length})</li>
        <p></p>
        </div>  
        {showData && <ItemCategory itemCard={item?.card?.card?.itemCards} />}
         </div>
         
    ) }

    </div>
    
  )
}

export default Menu

{/* <div> {(item?.card?.card?.itemCards).map(itemList=>{
    <p>{ itemList?.card?.info?.name}</p>
 })}</div> */}