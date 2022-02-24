import React from "react";
import { Flipper, Flipped } from "react-flip-toolkit";

import Playlist from "./Playlist";

function Playlists({ playlists }) {
  const playList = playlists || [];
  return (
    <Flipper className='px-5 my-10 sm:grid md:grid-cols-1'>
      {playList.map((playlist) => (
        <Flipped key={playlist.content.etag}>
          <Playlist title={playlist.title} videos={playlist.content.items} />
        </Flipped>
      ))}
    </Flipper>
  );
}

export default Playlists;
