import React from "react";
import FlipMove from "react-flip-move";
import Channel from "./Channel";
import Thumbnail from "./Thumbnail";

function Channels({ list }) {
  //   console.log(list);
  return (
    <FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:flex flex-wrap justify-center'>
      {list.map((channel) => (
        <Channel key={channel.id} data={channel} />
      ))}
    </FlipMove>
  );
}

export default Channels;