import { Button, Divider, IconButton, ListSubheader } from '@material-ui/core';
import MuiList from '@material-ui/core/List';
import ChevrontLeftIcon from '@material-ui/icons/ChevronLeft';
import DeleteIcon from '@material-ui/icons/Delete';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { closeDrawer } from '../../state/actions/drawer';
import { deleteAll, getPosts } from '../../state/actions/post';
import ListItem from '../ListItem';
import useListItemStyles from '../ListItem/ListItem.styles';
import useStyles from './List.styles';

function List() {
  const classes = useStyles();
  const listItemClasses = useListItemStyles();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  // Handlers
  const handleDeleteAll = () => dispatch(deleteAll());
  const handleCloseDrawer = () => dispatch(closeDrawer());
  const handleLoadMore = (event) => {
    const after = event.currentTarget.getAttribute('data-id');

    dispatch(getPosts(10, after));
  };

  return (
    <Fragment>
      <MuiList
        component="nav"
        subheader={
          <ListSubheader className={classes.listSubheader} component="h2">
            Reddit Posts
            <div className={classes.listSubheader_actions}>
              <IconButton onClick={handleDeleteAll}>
                <DeleteIcon />
              </IconButton>
              <IconButton onClick={handleCloseDrawer}>
                <ChevrontLeftIcon />
              </IconButton>
            </div>
          </ListSubheader>
        }
      >
        <TransitionGroup component={null}>
          {posts.map((post, index, array) => (
            <CSSTransition
              key={post.data.id}
              timeout={500}
              classNames={{
                exit: listItemClasses.listItem_exit,
                exitActive: listItemClasses.listItem_exit_active
              }}
            >
              <Fragment>
                <ListItem post={post} />
                {array.length - 1 !== index && <Divider variant="inset" />}
              </Fragment>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </MuiList>
      {posts.length !== 0 && posts.length < 50 && (
        <Button
          variant="contained"
          color="primary"
          data-id={posts[posts.length - 1].data.name}
          onClick={handleLoadMore}
        >
          Load more
        </Button>
      )}
    </Fragment>
  );
}

export default List;
