import { CLOSE_DRAWER, OPEN_DRAWER } from '../constants/drawer';

const drawerStatus = (state = true, action) => {
  switch (action.type) {
    case OPEN_DRAWER:
      return true;
    case CLOSE_DRAWER:
      return false;
    default:
      return state;
  }
};

export default drawerStatus;
