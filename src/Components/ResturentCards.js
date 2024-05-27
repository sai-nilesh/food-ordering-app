import React, { useEffect, useState } from "react";

import Cards from "./Cards";
import { API } from "../utils/constants";
import RestroCard from "../Shimmer/RestroCard";

const ResturentCards = () => {
  const [Data, setData] = useState();
  useEffect(() => {
    fetchData();
  }, []);
  const info =
    Data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  const fetchData = async() => {
    const data = await fetch(API);
    const json = await data.json();
    setData(json);
  }

  if (!Data) return <RestroCard/>;
  return (
    <div className="ml-52 mr-52 mt-3  ">
      <Cards info={info} />
    </div>
  );
};

export default ResturentCards;
