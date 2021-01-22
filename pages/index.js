import Head from 'next/head';
import PropTypes from 'prop-types';

import List from '../components/List';
import { initializeStore } from '../state/store';
import styles from '../styles/Home.module.css';
import { getPosts } from './api/reddit';

export async function getServerSideProps() {
  const store = initializeStore();
  const initial_state = store.getState();
  const data = await getPosts();

  if (!data) {
    return {
      notFound: true
    };
  }

  const posts = data.data.children.map((post) => post);

  return {
    props: {
      initial_state,
      posts
    }
  };
}

function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reddit on React.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Reddit on React.js</h1>

        <div className={styles.grid}>
          <List posts={posts} />
        </div>
      </main>
    </div>
  );
}

Home.propTypes = {
  initial_state: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired
};

export default Home;
