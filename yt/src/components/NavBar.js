import React, { useEffect, useState } from "react";
import { imgPath, youtubeUrl } from "../utils/constant";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiSearch } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
const NavBar = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  // console.log(search);
  useEffect(() => {
    const timer = setTimeout(() => getsearchQuery(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [search]);
  const getsearchQuery = async () => {
    const data = await fetch(youtubeUrl + search);
    const json = await data.json();
    // console.log(json[1]);
    setResults(json[1]);
    console.log(results);
  };
  return (
    <div>
      <div className="flex items-center  justify-between ">
        <div className="flex items-center">
          <div className=" w-8 h-8 ml-[18px]   hover:bg-gray-200   flex justify-center items-center hover:rounded-full ">
            <RxHamburgerMenu />
          </div>
          <div className="h-[56px] w-[129px] flex items-center">
            <Link to={"/"}>
              <img src={imgPath} alt="" className="h-12  " />
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="rounded-l-full border  border-gray-400 flex  w-[480px] h-9">
            <div className="absolute -my-[120px] ">
              <div className="mt-3   flex items-center gap-3">
                
                <input
                  type="text"
                  className="h-7 w-[440px] outline-none placeholder:text-gray-400 ml-9 mt-28"
                  placeholder="Search"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                />
              </div>
              <div>
                <ul className="bg-white shadow-lg shadow-gray-500 rounded-lg mt-2">
                  {results.map((list) => (
                    <div key={list} className="flex items-center p-1 gap-3">
                      <div className="text-gray-700"><IoSearchOutline/></div>
                      <li>{list}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex border font-bold text-lg h-9 rounded-r-full items-center px-5 bg-[#e9e9e9] border-gray-400">
            <TfiSearch />
          </div>
        </div>
        <img
          src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-rouge.png"
          alt=""
          className="h-8"
        />
      </div>
    </div>
  );
};

export default NavBar;
