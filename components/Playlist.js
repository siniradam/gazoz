import React from "react";
import VideoThumbnail from "./VideoThumbnail";

function Playlist({ title, videos }) {
  const list = videos || [];
  return (
    <div>
      <h1 className='px-3 my-2 text-xl font-bold text-white'>{title}</h1>
      <div className='flex space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
        {list.map((video) => {
          return <VideoThumbnail key={video.id} video={video} />;
        })}
      </div>
    </div>
  );
}

export default Playlist;
