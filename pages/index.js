import Head from 'next/head'
import Link from 'next/link'
import ReactPlayer from 'react-player'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Welcome, as of now this is my placeholder website which, while it will be converted into a project page, will
          serve as my music library for the near future.
        </p>
      </section>
      <h1>Song of the Day</h1>
      <div className="styles.home">
        <ReactPlayer url="https://www.youtube.com/watch?v=NYZwBFsThu0&ab_channel=EttaJames-Topic" />
      </div>
      <h1>Playlist Links</h1>
      <h2>
        <Link href="https://open.spotify.com/playlist/2BWi3snwBcasc3QsEnnNiA?si=-HAd63NIRRG3RS0ktXrypw">
          <a>Punk </a>
        </Link>
        <Link href="https://open.spotify.com/playlist/65t93vfa8UUXaFt2wDdOpX?si=C3cYiIeySbauC_7nVgE7dA">
          <a>Classical </a>
        </Link>
        <Link href="https://open.spotify.com/playlist/3ZVVQoi9Z9Z4kvaDgua2fi?si=gkS7SC2XRlS95_Rws6uP7g">
          <a>For the Funk in All of us </a>
        </Link>
      </h2>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </Layout>
  )
}
