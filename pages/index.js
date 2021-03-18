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
        <p>Welcome, this project is one that will make home mixology simple and fun for anyone willing to try.
          This project incorporates an LED system connect with a basic app that stores the best cocktail recipes that allows a user
          to be as careful or adventurous as they wish.
        </p>
      </section>
      <h1>How does it work?</h1>
      <div style={{ position: 'relative', width: '600px', height: '500px' }}>
        <Image
          alt="Diagram"
          src="/images/PresentDiagram.png"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h1>Hardware</h1>
      <p>The starter packs on the Raspberry Pi was sold out so I have to build it on my own</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
          <tr>
            <th>Raspberry Pi with other parts</th>
            <th>$43.80</th>
            <th>1</th>
          </tr>
          <tr>
            <th>Adafruit DotStar LED Strip</th>
            <th>$24.95</th>
            <th>1</th>
          </tr>
          <tr>
            <th>NeoPixel 5050 RGB LED 10 pack</th>
            <th>$4.50</th>
            <th>1</th>
          </tr>
          <tr>
            <th>Shipping</th>
            <th>$11.48</th>
            <th></th>
          </tr>
          <tr>
            <th>Sales Tax</th>
            <th>$6.61</th>
            <th></th>
          </tr>
          <tr>
            <th>Total</th>
            <th>$91.34</th>
            <th></th>
          </tr>
        </thead>
      </table>
      <h1>Project Description</h1>
      <p>This project is for the aspiring mixologist that doesn't want to spend the vast majority of their time 
        searching through multiple websites or cocktail books to find a recipe that they will enjoy.  This will take the
        bottles available to one and provide recipes and give an clear visual indicator of what to use.
      </p>
      <h2>What I have to figure out</h2>
      <ul class ="a">
        <li>How to configure a Raspberry Pi with miscellanous parts and LED devices.</li>
        <li>Building an Android app that can communicate with my Raspberry Pi and provide database records or recipes.</li>
        <li>Configuring locations of bottle and displaying them when needed.</li>
      </ul>
      <h2>Losant can be used for:</h2>
      <ul class="b">
        <li>Maybe using other systems like an Alexa device to ask to display a certain recipe, or a random one.</li>
        <li>Storing data of favorite recipes and most used spirits to give recomendations</li>
      </ul>
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
