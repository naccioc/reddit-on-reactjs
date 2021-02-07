import { DELETE_POST, POSTS_LOADED } from '../constants/post';

const posts = (state = [], action) => {
  switch (action.type) {
    case DELETE_POST:
      return state.filter((post) => post.name !== action.payload);
    case POSTS_LOADED:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default posts;
