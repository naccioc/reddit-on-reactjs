import { CLOSE_DRAWER, OPEN_DRAWER } from '../constants';

export const openDrawer = () => {
  return function (dispatch) {
    dispatch({
      type: OPEN_DRAWER
    });
  };
};

export const closeDrawer = () => {
  return function (dispatch) {
    dispatch({
      type: CLOSE_DRAWER
    });
  };
};
