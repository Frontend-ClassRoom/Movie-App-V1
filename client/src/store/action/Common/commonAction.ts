import {
  SET_CLOSE_SIDEBAR,
  SET_TOGGLE_SIDEBAR,
  SET_FIXED_HEADER,
  SET_CLOSE_FIXED_HEADER,
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

export const SetFixedHeaderAction = () => {
  return {
    type: SET_FIXED_HEADER,
  };
};

export const CloseFixedHeaderACtion = () => {
  return {
    type: SET_CLOSE_FIXED_HEADER,
  };
};
