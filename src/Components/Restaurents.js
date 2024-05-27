import React, { useEffect, useState } from "react";
import { API, CDN_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
// import ResMenu from "./ResMenu";
import { Link } from "react-router-dom";
import RestroCard from "../Shimmer/RestroCard";

const Restaurents = () => {
  const [Data, setData] = useState();
  // const [Card ,setCard] = useState();
  useEffect(() => {
    fetchData();
  }, []);
  const info = Data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  const fetchData = async () => {
    const data = await fetch(API);
    const json = await data.json();
    setData(json);
  };

  const handleRes = (card) => {
    // console.log(card);
    

  };
  if (!Data) return <RestroCard/>;
  return (
    <div className="ml-52 mr-52 mt-3 ">
      <h1 className="pt-8 font-bold text-2xl">
        Top restaurant chains in Hyderabad
      </h1>

      <div className="flex   overflow-x-scroll scrollbar-hide mt-12 mb-12 ">
        {info.map((card, i) => (
          <div className="mx-3 " key={card?.info?.cloudinaryImageId}>
           
         <Link to={"resturants/"+card?.info?.id} >
          <img
              className=" px-2 w-full h-48 object-cover  rounded-2xl cursor-pointer  "
              src={CDN_URL + card?.info?.cloudinaryImageId}
              alt="img"
              onClick={()=>{handleRes(card)}}
              key={i}
            />
            </Link>
            <div className="w-[273px] px-4 h-[120px]">
              <h3 className="font-bold text-lg opacity-80">
                {card?.info?.name}
              </h3>
              <p className="text-sm font-bold opacity-80  ">
                <FontAwesomeIcon
                  className="text-green-700 px-1"
                  icon={faStar}
                />
                {card?.info?.avgRating || card?.info?.avgRatingString} .{" "}
                {card?.info?.sla?.slaString}
              </p>

              <div className="flex flex-wrap ">
                {card?.info?.cuisines.slice(0, 3).map((items) => (
                  <p key={items}>{items},</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurents;
// flex-auto overflow-x-scroll scrollbar-hide
