import Head from 'next/head'
import PropTypes from 'prop-types'
import { getPosts } from './api/reddit'
import { initializeStore } from '../state/store'
import styles from '../styles/Home.module.css'
import List from '../components/List'

export async function getServerSideProps() {
  const store = initializeStore()
  const initialState = store.getState()
  const data = await getPosts()

  if (!data) {
    return {
      notFound: true
    }
  }

  const posts = data.data.children.map(post => post)

  return {
    props: {
      initialState,
      posts
    }
  }
}

function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reddit on React.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Reddit on React.js
        </h1>

        <div className={styles.grid}>
          <List posts={posts} />
        </div>
      </main>
    </div>
  )
}

Home.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Home
