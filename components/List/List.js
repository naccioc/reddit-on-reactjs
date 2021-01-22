import PropTypes from 'prop-types'
import MuiList from '@material-ui/core/List'
import ListItem from '../ListItem'

function List({ posts }) {
  return (
    <MuiList component="nav" dense>
      {posts.map(post => <ListItem key={post.data.id} post={post} />)}
    </MuiList>
  )
}

List.propTypes = {
  posts: PropTypes.array.isRequired
}

export default List
