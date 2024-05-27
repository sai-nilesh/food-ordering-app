import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESMENU_API } from "../utils/constants";
import Head from "./Head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";

const ResMenu = () => {
  const { resId } = useParams();
  const [resMenuData, setResMenuData] = useState();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RESMENU_API + resId);
    const json = await data.json();
    //  console.log(json.data);
    setResMenuData(json?.data);
  };
  if (!resMenuData) return;

  const { areaName, avgRating, costForTwoMessage, name, totalRatingsString } =
    resMenuData.cards[2]?.card?.card?.info;
  const {slaString,lastMileTravelString} = resMenuData.cards[2]?.card?.card?.info?.sla;
  const {message} = resMenuData.cards[2]?.card?.card?.info.feeDetails;
  const{cards} = resMenuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  return (
    <>
      <Head />
      <div className="ml-64 mr-64 m-36 ">
        <h1 className="font-bold text-2xl">{name}</h1>
        <div className="border border-gray-300 px-4 py-4 shadow-xl shadow-gray-100 ">
          <div className="flex ">
            <p className="pr-3">  <FontAwesomeIcon
                  className="text-green-700 px-1"
                  icon={faStar}
                />{avgRating}</p>
            <p className="pr-3">({totalRatingsString}). </p>
            <p className="pr-3"> {costForTwoMessage} </p>
          </div>
          <div className="flex">
            <p className="pr-3">Outlet</p>
            <p>{areaName}</p>
          </div>
          <hr/>
          <div>
            <p>{slaString.toLowerCase()}</p>
          </div>
          <div>
            <p>{lastMileTravelString} {message.slice(15,50)}</p>
          </div>
        </div>
        <Menu menu={cards}/>
      </div>
     
    </>
  );
};

export default ResMenu;
