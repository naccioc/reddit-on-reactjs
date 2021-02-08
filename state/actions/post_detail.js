import { LOAD_POST } from '../constants/post_detail';

export const loadPost = (post) => ({
  type: LOAD_POST,
  payload: post
});
