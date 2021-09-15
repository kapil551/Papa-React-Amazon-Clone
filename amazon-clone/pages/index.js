import Head from 'next/head'

// import the Header Component
import Header from '../src/components/Header/Header';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <h1> Let's Build Amazon</h1>

      {/* Use the Header Component */}
      <Header />

    </div>
  )
}
