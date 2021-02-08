import {
  AppBar,
  Drawer,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';

import Detail from '../components/Detail';
import List from '../components/List';
import { openDrawer } from '../state/actions/drawer';
import { getPosts } from '../state/actions/post';
import { initializeStore } from '../state/store';
import useStyles from '../styles/Home.styles';

export async function getServerSideProps() {
  const store = initializeStore();

  await store.dispatch(getPosts());

  const initial_state = store.getState();

  if (!initial_state.posts) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      initial_state
    }
  };
}

function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const drawer_status = useSelector((state) => state.drawer_status);

  // Handlers
  const handleDrawer = () => dispatch(openDrawer());

  return (
    <div>
      <Head>
        <title>Reddit on React.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            edge="start"
            onClick={handleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="h6">
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
        <List />
      </Drawer>
      <Detail />
    </div>
  );
}

export default Home;
