import { Avatar, Badge, IconButton } from '@material-ui/core';
import MuiListItem from '@material-ui/core/ListItem';
import DeleteIcon from '@material-ui/icons/Delete';
import ImageIcon from '@material-ui/icons/Image';
import { formatDistance, fromUnixTime } from 'date-fns';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deletePost, readPost } from '../../state/actions/post';
import useStyles from './ListItem.styles';

function ListItem({ post }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const domain = 'https://reddit.com';
  const post_date = formatDistance(fromUnixTime(post.data.created), new Date());

  // Handlers
  const handleClick = (event) => {
    const id = event.currentTarget.getAttribute('data-id');

    event.preventDefault();
    dispatch(readPost(id));
  };

  const handleDelete = (event) => {
    const id = event.currentTarget.getAttribute('data-id');

    event.stopPropagation();
    dispatch(deletePost(id));
  };

  return (
    <MuiListItem
      className={classes.listItem}
      component="div"
      title={post.data.title}
      data-href={`${domain}${post.data.permalink}`}
      alignItems="flex-start"
      button
      data-id={post.data.name}
      onClick={handleClick}
    >
      <Badge
        classes={{
          root: classes.Badge_root,
          badge: classes.Badge_badge
        }}
        overlap="rectangle"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        variant="dot"
        component="div"
        invisible={!!post.read}
      >
        <Avatar
          variant="square"
          alt={post.data.title}
          src={post.data.thumbnail}
        >
          <ImageIcon />
        </Avatar>
      </Badge>
      <div className={classes.listItem_info}>
        <div className={classes.listItem_metadata}>
          <span className={classes.listItem_metadata_author}>
            {post.data.author}
          </span>
          <span className={classes.listItem_metadata_timeago}>{post_date}</span>
        </div>
        <h3 className={classes.listItem_title}>{post.data.title}</h3>
        <div className={classes.listItem_actions}>
          <div className={classes.listItem_actions_comments}>
            {post.data.num_comments} comments
          </div>
          <IconButton
            disableRipple
            className={classes.listItem_actions_delete}
            data-id={post.data.name}
            onClick={handleDelete}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </MuiListItem>
  );
}

ListItem.propTypes = {
  post: PropTypes.object.isRequired
};

export default ListItem;
