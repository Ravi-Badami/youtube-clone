// import React from 'react'

import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

const VideoCard = ({ info }) => {
  // console.log(info);
  if (info === undefined) return <h1>shimmer</h1>;
  const { snippet, statistics } = info;
  // console.log(snippet);
  const { thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics;

  const viewsFormat = (viewCount) => {
    if (viewCount > 999999) {
      return (viewCount / 1000000).toFixed(1) + "M";
    } else if (viewCount > 999) {
      return (viewCount / 1000).toFixed(1) + "k";
    }
  };
  /** This library is used to see the difference between published date and today's date  */
  const formattedDistance = formatDistanceToNow(new Date(publishedAt), {
    addSuffix: true,
  });

  /** This is used to remove about  */
  const formattedWithoutAbout = formattedDistance.replace("about ", "");
  // console.log(formattedWithoutAbout);

  return (
    <div className="">
      <div className="">
        <Link to={"watch?v=" + info.id}>
          <img
            src={thumbnails.medium.url}
            alt=""
            className="border rounded-lg border-black cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex">
        <img
          src=""
          alt="logo"
          className="w-10 mt-2  border border-black rounded-full h-10"
        />
        <div className="ml-3 w-56">
          <div className="">
            <h1 className="mt-1   h-12 font-bold text-ellipsis overflow-hidden">
              {snippet.title}
            </h1>
          </div>

          <h1 className="text-[0.84rem]">{snippet.channelTitle}</h1>
          <div className="flex text-[0.83rem]">
            <h1>{viewsFormat(viewCount) + " views " + " • "} </h1>

            <h1>{formattedWithoutAbout}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export const AdVideoCard = ({ info }) => {
  return (
    <div className="">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
