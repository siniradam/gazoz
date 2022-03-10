import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import YouTube from "react-youtube";
import HeaderPlayer from "../../components/HeaderPlayer";
import youtube from "../../utils/youtube";

function Play({ video }) {
  console.log(video);
  const router = useRouter();
  const { id } = router.query;

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isEnded, setIsEnded] = useState(false);

  const onPlay = (event) => {
    setIsPlaying(true);
  };

  const onPause = () => {
    setIsPlaying(false);
  };

  const onEnd = () => {
    setIsEnded(true);
    setIsPlaying(false);
  };

  const onError = (event) => {};

  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      rel: 0,
      modestbranding: 1,
      origin: "https://gazoz.vercel.app",
    },
  };

  return (
    <div className='flex w-screen h-screen'>
      <HeaderPlayer visible={!isPlaying} />
      <YouTube
        videoId={id} // defaults -> null
        // id={string} // defaults -> null
        className='w-screen h-screen' // defaults -> null
        // containerClassName={string}       // defaults -> ''
        // title={string}                    // defaults -> null
        opts={opts} // defaults -> {}
        // onReady={func}                    // defaults -> noop
        onPlay={onPlay} // defaults -> noop
        onPause={onPause} // defaults -> noop
        onEnd={onEnd} // defaults -> noop
        onError={onEnd} // defaults -> noop
        // onStateChange={func}              // defaults -> noop
        // onPlaybackRateChange={func}       // defaults -> noop
        // onPlaybackQualityChange={func}    // defaults -> noop
      />
      {/* <iframe
        width='100%'
        height='100%'
        src={`//www.youtube.com/embed/${id}`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        autoPlay='1'
        widget_referrer='https://gazoz.vercel.app/'
        cc_lang_pref='tr'
        hl='tr-tr'
        modestbranding='1'
        rel='0'
      ></iframe> */}
    </div>
  );
}

//TODO: Fetch video player

export async function getServerSideProps(context) {
  const YOUTUBE_KEY_ALT = process.env.YOUTUBE_KEY_ALT;
  const { id } = context.query;
  const url = `${youtube.apiurl}/videos?part=statistics,player&id=${id}&key=${YOUTUBE_KEY_ALT}`;

  const request = await fetch(url).then((res) => res.json());

  return {
    props: {
      video: request.items[0],
    },
  };
}

Play.displayName = "Play";

export default Play;
