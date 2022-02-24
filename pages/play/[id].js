import { useRouter } from "next/router";
import React from "react";
import youtube from "../../utils/youtube";

function Play({ video }) {
  console.log(video);
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className='flex w-screen h-screen'>
      <iframe
        width='100%'
        height='100%'
        src={`//www.youtube.com/embed/${id}`}
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
        autoplay='1'
        widget_referrer='https://gazoz.vercel.app/'
        cc_lang_pref='tr'
        hl='tr-tr'
        modestbranding='1'
        rel='0'
      ></iframe>
    </div>
  );
}

//TODO: Fetch video player

export async function getServerSideProps(context) {
  const YOUTUBE_KEY = process.env.YOUTUBE_KEY;
  const { id } = context.query;
  const url = `${youtube.apiurl}/videos?part=statistics,player&id=${id}&key=${YOUTUBE_KEY}`;

  const request = await fetch(url).then((res) => res.json());

  return {
    props: {
      video: request.items[0],
    },
  };
}

Play.displayName = "Play";

export default Play;
