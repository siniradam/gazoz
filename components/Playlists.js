import React from "react";
import { Flipper, Flipped } from "react-flip-toolkit";

import Playlist from "./Playlist";

function Playlists({ playlists }) {
  return (
    <Flipper className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
      {/* {playlists.map((playlist) => (
        <Playlist  playlist={playlist} />
      ))} */}
    </Flipper>
  );
}

export default Playlists;
