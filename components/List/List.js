import { Divider, IconButton, ListSubheader } from '@material-ui/core';
import MuiList from '@material-ui/core/List';
import ChevrontLeftIcon from '@material-ui/icons/ChevronLeft';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

import ListItem from '../ListItem';
import useStyles from './List.styles';

function List({ posts }) {
  const classes = useStyles();

  return (
    <MuiList component="nav" dense disablePadding>
      <ListSubheader className={classes.listSubheader} component="h2">
        Reddit Posts
        <IconButton onClick={() => console.log('sasa')}>
          <ChevrontLeftIcon />
        </IconButton>
      </ListSubheader>
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
  posts: PropTypes.array.isRequired
};

export default List;
