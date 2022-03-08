import Image from "next/image";
import React from "react";
import HeaderItem from "./HeaderItem";
import { HomeIcon, ChevronLeftIcon } from "@heroicons/react/outline";

function HeaderPlayer({ visible }) {
  return visible ? (
    <header className='flex flex-col sm:flex-row justify-between items-center h-auto absolute left-0 top-0 right-0 bg-gradient-to-b from-gray-700 to-transparent'>
      <div className='flex flex-grow  max-w-2xl'>
        <HeaderItem title='Back' Icon={ChevronLeftIcon} />
      </div>
      <div className='m-5'>
        <Image
          src='/gazoz.png'
          width={208}
          height={64}
          className='object-contain'
          alt='Gazoz'
        />
      </div>
    </header>
  ) : null;
}

export default HeaderPlayer;
