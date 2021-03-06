import {
  DELETE_ALL,
  DELETE_POST,
  GET_POSTS,
  READ_POST,
  SET_POSTS
} from '../constants/post';

export const deleteAll = () => ({ type: DELETE_ALL });

export const deletePost = (id) => ({
  type: DELETE_POST,
  payload: id
});

export const getPosts = (limit, after) => ({
  type: GET_POSTS,
  payload: {
    limit,
    after
  }
});

export const readPost = (id) => ({
  type: READ_POST,
  payload: id
});

export const setPosts = (posts) => ({
  type: SET_POSTS,
  payload: posts
});
