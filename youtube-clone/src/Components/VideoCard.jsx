// import React from 'react'

const VideoCard = ({ info }) => {
  console.log(info);
  if (info === undefined) return <h1>shimmer</h1>;
  const { snippet, statistics } = info;
  // console.log(snippet);
  const { thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics;

  return (
    <div>
      <div>
        <img
          src={thumbnails.medium.url}
          alt=""
          className="border border-black"
        />
      </div>
      <div className="flex">
        <img
          src=""
          alt="logo"
          className="w-10 my-2 border border-black rounded-full h-10"
        />
        <div className="ml-3 w-56">
          <h1>{snippet.title}</h1>
          <h1>{snippet.channelTitle}</h1>
          <div className="flex">
            <h1>{viewCount}</h1>
            <h1>{publishedAt}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
