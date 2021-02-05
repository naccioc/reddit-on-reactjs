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
import { connect } from 'react-redux';

import List from '../components/List';
import { openDrawer } from '../state/actions/drawer';
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

function Home({ posts, drawer_status, openDrawer }) {
  const classes = useStyles();

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
              onClick={openDrawer}
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
          open={drawer_status}
        >
          <List posts={posts} />
        </Drawer>
      </main>
    </div>
  );
}

Home.propTypes = {
  initial_state: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  drawer_status: PropTypes.bool.isRequired,
  openDrawer: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  drawer_status: state.drawer_status
});

const mapDispatchToProps = {
  openDrawer
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
