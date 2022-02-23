import React from "react";
import FlipMove from "react-flip-move";
import Channel from "./Channel";
import Playlist from "./Playlist";
import Thumbnail from "./Thumbnail";

function Playlists({ playlists }) {
  return (
    <FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:flex flex-wrap justify-center'>
      {playlists.map((playlist) => (
        <Playlist playlist={playlist} />
      ))}
    </FlipMove>
  );
}

export default Playlists;
