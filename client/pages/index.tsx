import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Zenn Dev Clone</title>
                <meta name="description" content="Zenn | Tech blog" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    )
}

export default Home
