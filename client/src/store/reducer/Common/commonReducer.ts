import { SidebarActionToggle, SidebarCloseAction } from 'store/action';

export const SET_TOGGLE_SIDEBAR = 'common/SET_TOGGLE_SIDEBAR' as const;
export const SET_CLOSE_SIDEBAR = 'common/SET_CLOSE_SIDEBAR' as const;

export interface CommonState {
  sidebar: boolean;
}

export type CommonActionType =
  | ReturnType<typeof SidebarActionToggle>
  | ReturnType<typeof SidebarCloseAction>;

const initialState: CommonState = {
  sidebar: false,
};

const commonReducer = (state = initialState, action: CommonActionType) => {
  switch (action.type) {
    case 'common/SET_TOGGLE_SIDEBAR':
      return {
        sidebar: !state.sidebar,
      };
    case 'common/SET_CLOSE_SIDEBAR':
      return {
        sidebar: false,
      };
    default:
      return state;
  }
};

export default commonReducer;
