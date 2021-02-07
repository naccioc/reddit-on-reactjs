import { DELETE_POST, GET_POSTS, POSTS_LOADED } from '../constants/post';

export const getPosts = (limit, after) => ({
  type: GET_POSTS,
  payload: {
    limit,
    after
  }
});

export const postsLoaded = (posts) => ({
  type: POSTS_LOADED,
  payload: posts
});

export const deletePost = (id) => ({
  type: DELETE_POST,
  payload: id
});
