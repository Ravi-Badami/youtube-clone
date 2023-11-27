import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { menuClose } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./ContaineComments";
const Watch = () => {
  const [ravi] = useSearchParams();
  // console.log(ravi.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(menuClose());
  }, []);
  return (
    <div className=" py-6 px-9 w-full h-screen">
      <iframe
        className="h-3/4 w-2/3 rounded-lg border border-grey shadow-lg shadow-gray-400"
        src={"https://www.youtube.com/embed/" + ravi.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <CommentsContainer />
    </div>
  );
};

export default Watch;
