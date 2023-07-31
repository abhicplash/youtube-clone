import React from "react";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineSubscriptions } from "react-icons/md";
import {Link}from 'react-router-dom'

const Slidebar = () => {
  return (
    <div className=" ml-6 mt-1">
      <ul className="flex flex-col gap-5  border-b pb-6 w-[200px]">
        <li className="flex items-center gap-3">
          <div className="text-xl">
            <GoHomeFill />
          </div>
          <Link to={"/"}>
          <p className="text-sm">Home</p>
          </Link>
        </li>
        <li className="flex gap-3 text-sm  items-center">
          <img
            className="h-5 "
            src="https://seeklogo.com/images/Y/youtube-shorts-logo-E2B507EF18-seeklogo.com.png"
            alt="shorts"
          />
          Shorts
        </li>
        <li className="flex gap-3">
          <div className="text-lg">
            <MdOutlineSubscriptions />
          </div>
          <p className="text-sm">Subscriptions</p>
        </li>
      </ul>
    </div>
  );
};

export default Slidebar;
