import { postsLoaded } from '../actions/post';
import { GET_POSTS } from '../constants/post';

export const getPostsMiddleware = (storeAPI) => (next) => async (action) => {
  if (action.type === GET_POSTS) {
    const { limit, after } = action.payload;
    let posts;

    if (typeof window === 'undefined') {
      const { getPosts } = await import('../../mocks/api/reddit');

      posts = await getPosts();
    } else {
      posts = await fetch(
        `/api/reddit?=limit${limit || ''}&after=${after || ''}`
      );
    }

    storeAPI.dispatch(postsLoaded(posts));
  }

  return next(action);
};
