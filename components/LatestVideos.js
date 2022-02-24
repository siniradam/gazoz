import React from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import { psTime } from "../utils/tools";
import VideoThumbnail from "./VideoThumbnail";

function LatestVideos({ channel, latest }) {
  const videos = latest.items || [];
  const time = psTime();

  return (
    <>
      <h1>{channel.title}</h1>
      {/* title does not show up. */}
      <Flipper className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {videos.length === 0 ? (
          <p>
            Seems like we've reached end of the quota.
            <br />
            This is time for us ({time})
            <br />
            Quota will be available at midnight.
          </p>
        ) : (
          videos.map((video) => {
            return (
              <Flipped key={video.id.videoId}>
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
