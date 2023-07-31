import React from "react";
import Slidebar from "./Slidebar";
import VideoContainer from "./VideoContainer";
import {Outlet} from'react-router-dom';

const Body = () => {
  return (
    <div className="flex gap-4 mt-5">
      <Slidebar />
      <div className="flex flex-col gap-7">
        <Outlet/>
      </div>
    </div>
  );
};

export default Body;
