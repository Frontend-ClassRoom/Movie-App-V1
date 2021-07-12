import {
  SET_CLOSE_SIDEBAR,
  SET_SIDEBAR,
} from 'store/reducer/Common/commonReducer';

export const SidebarActionToggle = () => {
  return {
    type: SET_SIDEBAR,
  };
};

export const SidebarCloseAction = () => {
  return {
    type: SET_CLOSE_SIDEBAR,
  };
};
