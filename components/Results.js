import React from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import Thumbnail from "./Thumbnail";

function Results({ results }) {
  return (
    <Flipper className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
      {results.map((result) => (
        <Flipped key={result.id}>
          <Thumbnail result={result} />
        </Flipped>
      ))}
    </Flipper>
  );
}

export default Results;
