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
      {/* <LatestVideos channel={channel} latest={latest} /> */}
      <Playlists channel={channel} playlists={playlists} />
    </div>
  );
};
export async function getServerSideProps(context) {
  const YOUTUBE_KEY = process.env.YOUTUBE_KEY;
  const YOUTUBE_KEY_ALT = process.env.YOUTUBE_KEY_ALT;

  const { id } = context.query;
  const channel = yt.channels.find((channel) => channel.id === id);

  // Channel Details
  //`${youtube.apiurl}/channels?part=snippet&id=${id}&maxResults=12&order=date&type=video&key=${YOUTUBE_KEY}`

  // Videos
  //`${youtube.apiurl}/search?part=snippet&channelId=${id}&maxResults=12&order=date&type=video&key=${YOUTUBE_KEY}`

  const latest = await fetch(
    `${youtube.apiurl}/search?part=snippet&channelId=${id}&maxResults=12&&key=${YOUTUBE_KEY}`
  ).then((res) => res.json());

  let playlistItems = channel.playlists;

  const playlists = playlistItems[0]
    ? await fetch(
        `${youtube.apiurl}/playlistItems?part=snippet&playlistId=${playlistItems[0].id}&key=${YOUTUBE_KEY_ALT}`
      ).then((res) => res.json())
    : [];

  //https://www.googleapis.com/youtube/v3/?part=snippet&playlistId=PLLxcPkP3uSOZYen_E3NON-eV6qJDMMBrh&key=AIzaSyBvh5J818CEzba6X8261c2WBkULb918AQ4&maxResults=12

  return {
    props: {
      channel: channel,
      latest: latest, //|| {},
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
