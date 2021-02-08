import {
  DELETE_ALL,
  DELETE_POST,
  READ_POST,
  SET_POSTS
} from '../constants/post';

const posts = (state = [], action) => {
  switch (action.type) {
    case DELETE_ALL:
      return [];
    case DELETE_POST:
      return state.filter((post) => post.data.name !== action.payload);
    case READ_POST:
      return state.map((post) => {
        if (post.data.name === action.payload) {
          post.read = true;
        }

        return post;
      });
    case SET_POSTS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default posts;
