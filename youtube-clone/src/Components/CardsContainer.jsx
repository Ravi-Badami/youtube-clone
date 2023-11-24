import { useEffect, useState } from "react";
import { VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoCardsContainer = () => {
  const [videoList, setVideoList] = useState([]);

  // console.log(videoList);
  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const data = await fetch(VIDEO_API);
    const json = await data.json();
    // console.log(json.items);
    setVideoList(json.items);
  };
  return (
    <div className="flex flex-wrap gap-10">
      {videoList.map((items) => (
        <VideoCard info={items} />
      ))}
    </div>
  );
};

export default VideoCardsContainer;
