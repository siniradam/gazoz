import Image from "next/image";
import React, { forwardRef } from "react";

const VideoThumbnail = forwardRef(({ video }, ref) => {
  const v = video.snippet;
  return (
    <div
      ref={ref}
      className='group cursor-pointer m-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'
      onClick={() => {
        router.push("/video/");
      }}
    >
      <Image
        layout='responsive'
        src={`${v.thumbnails.high.url}`}
        width={v.thumbnails.high.width}
        height={v.thumbnails.high.height}
        alt={v.title}
      />
      <div>
        <p className='truncate max-w-md'>{v.description}</p>
        <h2 className='mt-1 text-xl text-white transition-all duration-100 ease-in-out'>
          {v.title}
        </h2>
        {/* <p className='flex items-center opacity-0 group-hover:opacity-100'>
          <ThumbUpIcon className='h-5 mx-2' />
        </p> */}
      </div>
    </div>
  );
});

VideoThumbnail.displayName = "VideoThumbnail";

export default VideoThumbnail;
