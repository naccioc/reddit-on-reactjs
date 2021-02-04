import {
  AppBar,
  Drawer,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { useState } from 'react';

import List from '../components/List';
import { initializeStore } from '../state/store';
import useStyles from '../styles/Home.styles';
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
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Head>
        <title>Reddit on React.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              edge="start"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="h1">
              Reddit on React.js
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper
          }}
          variant="persistent"
          open={open}
        >
          <List posts={posts} />
        </Drawer>
      </main>
    </div>
  );
}

Home.propTypes = {
  initial_state: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired
};

export default Home;
