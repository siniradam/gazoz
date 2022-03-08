import React from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import { psTime } from "../utils/tools";
import VideoThumbnail from "./VideoThumbnail";

function LatestVideos({ channel, latest }) {
  const videos = latest.items || [];
  const time = psTime();

  return (
    <>
      <h1 className='px-7 pt-5 text-xl font-bold'>{channel.title}</h1>
      {/* title does not show up. */}
      <Flipper className='px-5 mt-5 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {videos.length === 0 ? (
          <p>
            Seems like we&apos;ve reached end of the quota.
            <br />
            This is time for us ({time})
            <br />
            Quota will be available at midnight.
          </p>
        ) : (
          videos.map((video) => {
            return (
              <Flipped key={video.id}>
                <VideoThumbnail video={video} />
              </Flipped>
            );
          })
        )}
      </Flipper>
    </>
  );
}

export default LatestVideos;
