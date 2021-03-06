import { useRouter } from "next/router";
import React from "react";
import requests from "../utils/requests";
import yt from "../utils/channels";

function Nav() {
  const router = useRouter();
  return (
    <nav className='relative'>
      <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
        {Object.entries(yt.categories).map(([key, { title, id }]) => {
          return (
            <h2
              key={key}
              onClick={() => router.push(`/category/${id}`)}
              className='
            cursor-pointer
            transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500
            last:pr-24
            '
            >
              {title}
            </h2>
          );
        })}
      </div>
      <div className='absolute top-0 right-0 bg-gradient-to-l from-gray-800 h-10 w-1/12 pointer-events-none'></div>
    </nav>
  );
}

export default Nav;
