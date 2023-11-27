import { useEffect, useState } from "react";
import { VIDEO_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";

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
      {videoList[0] && <AdVideoCard info={videoList[0]} />}
      {videoList.map((items) => (
        <VideoCard key={items.id} info={items} />
      ))}
    </div>
  );
};

export default VideoCardsContainer;
