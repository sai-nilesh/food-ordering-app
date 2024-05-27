import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Head = () => {


  return (
    <div className="flex pl-52 pr-52 shadow-md">
      <img
        src="https://i.ibb.co/ZWfpGVX/3697355.jpg"
        alt="3697355"
        border="0"
        className="w-24"
      />
      <button className="flex-auto text-right  px-4 py-10 ">
        <FontAwesomeIcon className="px-2" icon={faMagnifyingGlass} />
        Search
      </button>
      <Link to={"/"}><p className="px-4 py-10  " >Home</p></Link>
      <p className="px-4 py-10  " >About</p>
      <p className="px-4 py-10 ">Contact</p>
      <Link to={"/registor"}><p className="px-4 py-10 ">Sign in</p></Link>
      <Link to={"/cart"}><p className="px-4 py-10 ">Cart</p></Link>
    </div>
  );
};

export default Head;
