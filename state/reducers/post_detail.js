import { LOAD_POST } from '../constants/post_detail';

const postDetail = (state = null, action) => {
  switch (action.type) {
    case LOAD_POST:
      return action.payload;
    default:
      return state;
  }
};

export default postDetail;
