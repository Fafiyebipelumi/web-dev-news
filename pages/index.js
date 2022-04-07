import Head from 'next/head'
import layoutStyles from '../styles/Layout.module.css';

export default function Home({ }) {
  return (
    <>
      <Head>
        <title>WebDev Newz</title>
        < meta name="keywords" content="Web Development | programming" />
      </Head>
      <div className={layoutStyles.container}>
        <h1>Hello Next</h1>
      </div>
    </>
  )
}
