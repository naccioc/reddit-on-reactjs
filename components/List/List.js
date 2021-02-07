import { Divider, IconButton, ListSubheader } from '@material-ui/core';
import MuiList from '@material-ui/core/List';
import ChevrontLeftIcon from '@material-ui/icons/ChevronLeft';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { connect } from 'react-redux';

import { closeDrawer } from '../../state/actions/drawer';
import { deleteAll } from '../../state/actions/post';
import ListItem from '../ListItem';
import useStyles from './List.styles';

function List({ posts, closeDrawer, deleteAll }) {
  const classes = useStyles();

  return (
    <MuiList
      component="nav"
      subheader={
        <ListSubheader className={classes.listSubheader} component="h2">
          Reddit Posts
          <div className={classes.listSubheader_actions}>
            <IconButton onClick={deleteAll}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={closeDrawer}>
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

List.propTypes = {
  posts: PropTypes.array.isRequired,
  closeDrawer: PropTypes.func.isRequired,
  deleteAll: PropTypes.func.isRequired
};

const mapDispatchtoProps = {
  closeDrawer,
  deleteAll
};

export default connect(null, mapDispatchtoProps)(List);
