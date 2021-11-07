import Head from 'next/head'

import SearchBar from '../components/SearchBar/SearchBar'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Search page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="title">CO2-nect</h1>
      <SearchBar />

      <style jsx>{`

        .title {
          text-align: center;
          padding: 20px 0;
        }

      `}</style>

      <style jsx global>{`
        html,
        body {
          width: 100%;
          height: 100%;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
