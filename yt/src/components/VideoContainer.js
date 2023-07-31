import React, { useEffect, useState } from "react";
import { ytUrl } from "../utils/constant";
import WatchPage from "./WatchPage";
import { Link } from "react-router-dom";
import Button from "./Button";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(ytUrl);
    const json = await data.json();
    setVideos(json?.items);
    // console.log(json?.items);
  };

  return (
    <div className="flex flex-wrap w-[1078px] gap-3 ">
      <Button />
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <div className="h-[300px]  border  font-sans f text-[#0f0f0f] ">
            <img
              src={video?.snippet?.thumbnails?.maxres?.url}
              alt={video.snippet.title}
              className="w-[300px] h-44 rounded-2xl hover:rounded-none  "
            />
            <div className="border flex justify-between">
              <p className="h-9 w-9 rounded-full border flex justify-center items-center ">
                H
              </p>
              <p className="w-[150px] text-[11px]">{video.snippet.title}</p>
              <p>|</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
