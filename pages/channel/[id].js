import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/Header";
import Nav from "../../components/Nav";

import yt from "../../utils/channels";
import youtube from "../../utils/youtube";
import Playlists from "../../components/Playlists";
import LatestVideos from "../../components/LatestVideos";
import HeaderChannel from "../../components/HeaderChannel";

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

      <HeaderChannel channel={channel} />

      {/* Results */}
      <LatestVideos channel={channel} latest={latest} />
      <Playlists channel={channel} playlists={playlists} />
    </div>
  );
};
export async function getServerSideProps(context) {
  const YOUTUBE_KEY = process.env.YOUTUBE_KEY;
  const YOUTUBE_KEY_ALT = process.env.YOUTUBE_KEY_ALT;

  const { id } = context.query;
  const channel = yt.channels.find((channel) => channel.id === id);
  const uploadsPlaylistId = `UU${channel.id.slice(2)}`;

  const uploads =
    (await fetch(
      `${youtube.apiurl}/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=8&key=${YOUTUBE_KEY}`
    ).then((res) => res.json())) || [];

  let playlistItems = channel.playlists;
  const playlists = playlistItems[0]
    ? await fetch(
        `${youtube.apiurl}/playlistItems?part=snippet&playlistId=${playlistItems[0].id}&maxResults=8&key=${YOUTUBE_KEY_ALT}`
      ).then((res) => res.json())
    : [];

  return {
    props: {
      channel: channel,
      latest: uploads, //|| {},
      playlists:
        [
          {
            title: playlistItems[0] ? playlistItems[0].title : "",
            content: playlists,
          },
        ] || [],
    },
  };
}

export default Channel;
