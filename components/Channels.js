import React from "react";
import { Flipper, Flipped } from "react-flip-toolkit";

import Channel from "./Channel";
import Thumbnail from "./Thumbnail";

function Channels({ list }) {
  //   console.log(list);
  return (
    <Flipper className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5'>
      {list.map((channel) => (
        <Flipped key={channel.id}>
          <Channel data={channel} />
        </Flipped>
      ))}
    </Flipper>
  );
}

export default Channels;
