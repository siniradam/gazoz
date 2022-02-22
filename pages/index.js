import Head from "next/head";
import Channels from "../components/Channels";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

import yt from "../utils/channels";

export default function Home({ results }) {
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
      <Channels list={yt.channels} />
      {/* <Results results={results} /> */}
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
