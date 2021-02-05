import { CLOSE_DRAWER, OPEN_DRAWER } from '../constants';

export default function drawer_status(state = false, action) {
  switch (action.type) {
    case OPEN_DRAWER:
      return true;
    case CLOSE_DRAWER:
      return false;
    default:
      return state;
  }
}
