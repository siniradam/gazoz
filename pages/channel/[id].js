import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Channels from "../../components/Channels";

import channels from "../../utils/channels";

const Channel = ({ results }) => {
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
      <Channels results={results} />
    </div>
  );
};
export async function getServerSideProps(context) {
  const channelList = channels.find((channel) => channel.category === pid);

  //   const request = await fetch(
  //     `${youtube.apiurl}/channels?id=`
  //   ).then((res) => res.json());

  return {
    props: {
      list: channelList,
      //      youtube: request,
    },
  };
}

export default Channel;
