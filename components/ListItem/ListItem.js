import { ListItemIcon } from '@material-ui/core';
import MuiListItem from '@material-ui/core/ListItem';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { formatDistance, fromUnixTime } from 'date-fns';
import PropTypes from 'prop-types';

import useStyles from './ListItem.styles';

function ListItem({ post }) {
  const classes = useStyles();
  const domain = 'https://reddit.com';
  const post_date = formatDistance(fromUnixTime(post.data.created), new Date());
  const handleClick = (event) => event.preventDefault();

  return (
    <MuiListItem
      className={classes.MuiListItem}
      component="a"
      title={post.data.title}
      href={`${domain}${post.data.permalink}`}
      alignItems="flex-start"
      button
      onClick={handleClick}
    >
      <div>
        <ListItemIcon>
          <FiberManualRecordIcon color="secondary" fontSize="small" />
        </ListItemIcon>
        {post.data.author}
        {post_date}
      </div>
      <div>{post.data.title}</div>
      <div>{post.data.num_comments}</div>
    </MuiListItem>
  );
}

ListItem.propTypes = {
  post: PropTypes.object.isRequired
};

export default ListItem;
