import React from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import VideoThumbnail from "./VideoThumbnail";

function LatestVideos({ channel, latest }) {
  console.log(channel);
  return (
    <>
      <h1>{channel.title}</h1>
      {/* title does not show up. */}
      <Flipper className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {latest.items.map((video) => {
          return (
            <Flipped key={video.id.videoId}>
              <VideoThumbnail video={video} />
            </Flipped>
          );
        })}
      </Flipper>
    </>
  );
}

export default LatestVideos;
