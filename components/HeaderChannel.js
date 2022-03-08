import React from "react";
import Image from "next/image";

function HeaderChannel({ channel }) {
  const poster = channel.poster || channel.thumbnail;
  //overflow-hidden justify-center items-center bg-gradient-to-tl from-transparent to-gray-800
  return (
    <div
      className={`h-96 flex relative overflow-hidden bg-[url('/channels/${poster}')] mt-4`}
    >
      <div className='absolute -z-10 left-0 right-0 -top-0 bottom-0'>
        <Image
          layout='fill'
          objectFit='cover'
          //   layout='responsive'
          //   width={1920}
          //   height={384}
          quality={100}
          src={`/channels/${poster}`}
          alt={channel.title}
        />
      </div>

      {/* <h1 className='text-5xl'>{channel.title}</h1> */}
      {/* <Image
        layout='responsive'
        src={`/channels/${channel.poster || channel.thumbnail}`}
        width={1920}
        height={1080}
        alt={channel.title}
      /> */}
    </div>
  );
}

export default HeaderChannel;
