import React from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import Channel from "./Channel";

function HomeSlider({ list }) {
  console.log(list);
  return (
    <Flipper className='px-5 my-10 h-64 sm:grid md:grid-cols-1'>
      <div>
        <div className='flex space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
          {list.map((channel) => (
            <Flipped key={channel.id}>
              <Channel data={channel} hideTitle />
            </Flipped>
          ))}
        </div>
      </div>
    </Flipper>
  );
}

export default HomeSlider;
