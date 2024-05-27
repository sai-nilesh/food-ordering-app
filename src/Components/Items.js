import React, { useEffect, useState } from 'react'
import { API, CDN_URL } from '../utils/constants';
import Head from './Head';
import RestroCard from '../Shimmer/RestroCard';

const Items = () => {
    const [Data, setData] = useState();
    const info = Data?.data?.cards[0]?.card?.card?.imageGridCards?.info;
    useEffect(() => {
      fetchData();
    }, []);
    const fetchData = async () => {
      const data = await fetch(API);
      const json = await data.json();
      setData(json);
    };
    if (!info) return <RestroCard/>;
  return (
    
    <div className="" >
     
    <h1 className="pt-8 pl-52 pr-52 font-bold text-2xl">What's on your mind?</h1>
    <div className="flex ml-52 mr-52 overflow-x-scroll scrollbar-hide pb-12">
     
      {info.map((card) => (
        <img
         key={card?.imageId}
          className="rounded-full w-40  cursor-pointer "
          src={CDN_URL + card?.imageId}
          alt="img"
        />
      ))}
    </div>
    <hr className="ml-52 mr-52  border-gray-300 shadow-lg "/>
  </div>
  );
  
}

export default Items