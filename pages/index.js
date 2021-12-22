import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({ results }) {
  console.log(results);
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="This is a movie web application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}

      <Header />

      {/* Nav */}

      <Nav />

      {/* Results */}

      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre || "fetchTrending";
  const url = `https://api.themoviedb.org/3${requests[genre]?.url}`;
  const request = await fetch(url).then((res) => res.json());
  return {
    props: {
      results: request.results,
    },
  };
}
