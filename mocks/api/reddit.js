import { cloneDeep } from 'lodash';

import top_posts from '../../resources/top.mock.json';

function mockResponse(limit, after) {
  let posts = cloneDeep(top_posts);
  let start_index = 0;
  let posts_length;

  if (after) {
    const after_index = posts.data.children.findIndex(
      (post) => post.data.name === after
    );

    start_index = after_index + 1;
  }

  posts.data.children = posts.data.children.slice(
    start_index,
    start_index + limit
  );

  posts_length = posts.data.children.length;
  posts.data.after = posts.data.children[posts_length - 1].data.name;

  return Promise.resolve({
    data: posts
  });
}

export async function getPosts(limit = 10, after) {
  try {
    const response = await mockResponse(limit, after);

    return response.data.data.children;
  } catch (error) {
    console.error(`Couldn't fetch data`, error);
  }
}
