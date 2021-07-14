import {
  SET_CLOSE_SIDEBAR,
  SET_TOGGLE_SIDEBAR,
} from 'store/reducer/Common/commonReducer';

export const SidebarActionToggle = () => {
  return {
    type: SET_TOGGLE_SIDEBAR,
  };
};

export const SidebarCloseAction = () => {
  return {
    type: SET_CLOSE_SIDEBAR,
  };
};
