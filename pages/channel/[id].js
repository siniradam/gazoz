import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/Header";
import Nav from "../../components/Nav";

import yt from "../../utils/channels";
import youtube from "../../utils/youtube";
import Playlists from "../../components/Playlists";
import LatestVideos from "../../components/LatestVideos";

const Channel = ({ channel, latest, playlists }) => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div>
      <Head>
        <title>gazoz</title>
        <meta name='description' content='Curated youtube channels.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* Header */}
      <Header />

      {/* Nav */}
      <Nav />

      {/* Results */}
      <LatestVideos channel={channel} latest={latest} />
      <Playlists channel={channel} playlists={playlists} />
    </div>
  );
};
export async function getServerSideProps(context) {
  const YOUTUBE_KEY = process.env.YOUTUBE_KEY;

  const { id } = context.query;
  const channel = yt.channels.filter((channel) => channel.id === id);

  //  const request = await fetch(`${youtube.apiurl}/channels?id=${id}`).then(
  const request = await fetch(
    `${youtube.apiurl}/search?part=snippet&channelId=${id}&maxResults=10&order=date&type=video&key=${YOUTUBE_KEY}`
  ).then((res) => res.json());

  return {
    props: {
      channel: channel,
      latest: request,
      playlists: channel.playlists || [],
    },
  };
}

export default Channel;
