import Head from 'next/head'
import { getPosts } from '../pages/api/reddit'
import styles from '../styles/Home.module.css'

export async function getServerSideProps() {
  const data = await getPosts()

  if (!data) {
    return {
      notFound: true
    }
  }

  const posts = data.data.children.map(post => post)

  return {
    props: {
      posts
    }
  }
}

export default function Home({ posts }) {
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
          <ul key="test">
            {posts.map(post => <li key={post.data.id}>{post.data.title}</li>)}
          </ul>
        </div>
      </main>
    </div>
  )
}
