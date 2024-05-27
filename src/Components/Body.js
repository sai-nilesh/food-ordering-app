import React  from "react";

import Items from "./Items";
import Restaurents from "./Restaurents";
import ResturentCards from "./ResturentCards";
import Head from "./Head";

const Body = () => {
 
  return <div>
    <Head/>
    <Items/>
    <Restaurents/>
    <ResturentCards/>
  </div>
  
};

export default Body;
