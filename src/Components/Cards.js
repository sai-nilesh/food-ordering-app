import React, { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Cards = (props) => {
  const [cards, setCards] = useState();
  const { info } = props;
  console.log(info);
  useEffect(() => {
    setCards(info);
    // console.log(cards);
  }, []);

  // console.log(info);
  const filterRating = () => {
    const rating = info.filter((res) => res.info.avgRating > 4.0);
    setCards(rating);
  };
  const filterDelivery = () => {
    const rating = info.filter((res) => res.info.sla.deliveryTime < 35.0);
    setCards(rating);
  };
  const filterPriceUnder600 = () => {
    const rating = info.filter(
      (res) =>
        res.info.costForTwo.slice(1, 5) > 300 &&
        res.info.costForTwo.slice(1, 5) < 600
    );
    setCards(rating);
  };
  const filterPriceUnder300 = () => {
    const rating = info.filter((res) => res.info.costForTwo.slice(1, 5) < 300);
    setCards(rating);
  };

  if (!cards) return;
  return (
    <div>
      <h1 className=" font-bold pb-8 text-2xl pl-2">
        Restaurants with online food delivery in Hyderabad
      </h1>
      <button className="mx-6 px-4 py-1 mb-6 border border-gray-300 rounded-md bg-gray-50 shadow-md" onClick={filterRating}>Ratings 4.0+</button>
      <button className="mx-6  px-4   py-1 mb-6 border border-gray-300 rounded-md bg-gray-50 shadow-md "  onClick={filterDelivery}>Fast Delivery</button>
      <button className="mx-6  px-4  py-1 mb-6 border border-gray-300 rounded-md bg-gray-50 shadow-md"  onClick={filterPriceUnder600}>Rs. 300-Rs. 600</button>
      <button className="mx-6  px-4   py-1 mb-6 border border-gray-300 rounded-md bg-gray-50 shadow-md"  onClick={filterPriceUnder300}>Less than Rs. 300</button>

      <div className="flex flex-wrap ">
        {cards.map((card, i) => (
          <div className="m-1.5" key={card?.info?.cloudinaryImageId}>
            {console.log(card)}
            <Link to={"resturants/"+card?.info?.id} >
            <img
              key={card?.info?.cloudinaryImageId}
              className=" px-2 w-[250px] h-48 object-cover  rounded-2xl  cursor-pointer  "
              src={CDN_URL + card?.info?.cloudinaryImageId}
              alt="img"
            />
            </Link>
            <div className="w-[260px] px-2 h-[120px]">
              <h3 className="font-bold text-lg opacity-80">
                {card?.info?.name}{" "}
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
                {card?.info?.cuisines.slice(0, 3).map((items, i) => (
                  <p key={i}>{items},</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
