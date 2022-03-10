import React, { useState, useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { PrevButton, NextButton } from "./CarouselButtons";
import { useRouter } from "next/router";

function HomeCarousel({ channels }) {
  const [viewportRef, embla] = useEmblaCarousel({
    align: "center",
    skipSnaps: false,
  });

  const autoplay = useRef(
    Autoplay(
      { delay: 1000, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )
  );

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollNext = useCallback(() => {
    if (!embla) return;
    embla.scrollNext();
    autoplay.current.reset();
  }, [embla]);

  const scrollPrev = useCallback(() => {
    if (!embla) return;
    embla.scrollPrev();
    autoplay.current.reset();
  }, [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  const router = useRouter();

  const onSlideClick = useCallback(
    (index) => {
      if (embla && embla.clickAllowed()) {
        router.push(`/channel/${index}`);
      }
    },
    [embla]
  );

  return (
    <div className='embla mx-5 my-5 w-3/5  mx-auto rounded-md'>
      <div className='embla__viewport rounded-md' ref={viewportRef}>
        <div className='embla__container'>
          {channels.map((channel) => (
            <div
              className='embla__slide'
              key={channel.id}
              onClick={() => onSlideClick(channel.id)}
            >
              <div className='embla__slide__inner h-12w'>
                <img
                  className='embla__slide__img'
                  src={`channels/${channel.poster}`}
                  alt={channel.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
}

export default HomeCarousel;
