import { useRouter } from "next/router";
import React from "react";

function HeaderItem({ title, Icon }) {
  const router = useRouter();
  return (
    <div
      className='group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white'
      onClick={() => router.push("/")}
    >
      <Icon className='h-8 mb-1 group-hover:animate-bounce' />

      <p className='opacity-0 group-hover:opacity-100 tracking-widest'>
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
