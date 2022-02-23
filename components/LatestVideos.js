import React from "react";
import FlipMove from "react-flip-move";
import VideoThumbnail from "./VideoThumbnail";

function LatestVideos({ channel, latest }) {
  console.log(channel);
  return (
    <>
      <h1>{channel.title}</h1>
      {/* title does not show up. */}
      <FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:flex flex-wrap justify-center'>
        {latest.items.map((video) => {
          return <VideoThumbnail video={video} />;
        })}
      </FlipMove>
    </>
  );
}

export default LatestVideos;
