import PropTypes from 'prop-types'
import MuiListItem from '@material-ui/core/ListItem'

function ListItem({ post }) {
  const domain = 'https://reddit.com'

  return (
    <MuiListItem
      component="a"
      title={post.data.title}
      href={`${domain}${post.data.permalink}`}
      button divider>
        {post.data.title}
    </MuiListItem>
  )
}

ListItem.propTypes = {
  post: PropTypes.object.isRequired
}

export default ListItem
