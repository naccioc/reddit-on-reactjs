import { Divider, IconButton, ListSubheader } from '@material-ui/core';
import MuiList from '@material-ui/core/List';
import ChevrontLeftIcon from '@material-ui/icons/ChevronLeft';
import DeleteIcon from '@material-ui/icons/Delete';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { closeDrawer } from '../../state/actions/drawer';
import { deleteAll } from '../../state/actions/post';
import ListItem from '../ListItem';
import useStyles from './List.styles';

function List() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  // Handlers
  const handleDeleteAll = () => dispatch(deleteAll());
  const handleCloseDrawer = () => dispatch(closeDrawer());

  return (
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
      {posts.map((post, index, array) => (
        <Fragment key={post.data.id}>
          <ListItem post={post} />
          {array.length - 1 !== index && <Divider variant="inset" />}
        </Fragment>
      ))}
    </MuiList>
  );
}

export default List;
