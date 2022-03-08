import { useRouter } from "next/router";
import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import { forwardRef } from "react";

const Channel = forwardRef(({ data }, ref) => {
  const router = useRouter();
  return (
    <div
      ref={ref}
      className='group cursor-pointer m-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'
      onClick={() => {
        router.push("/channel/" + data.id);
      }}
    >
      {data.thumbnail ? (
        <Image
          layout='responsive'
          src={`/channels/${data.thumbnail}`}
          width={1920}
          height={1080}
          alt={data.title}
          className='rounded-md'
        />
      ) : (
        <p>{data.title}</p>
      )}
      <div>
        <p className='truncate max-w-md'>{data.description}</p>
        <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out'>
          {data.title}
        </h2>
        {/* <p className='flex items-center opacity-0 group-hover:opacity-100'>
          <ThumbUpIcon className='h-5 mx-2' />
        </p> */}
      </div>
    </div>
  );
});

Channel.displayName = "Channel";

export default Channel;
