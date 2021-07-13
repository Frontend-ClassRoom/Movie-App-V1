import {
  CloseFixedHeaderACtion,
  SetFixedHeaderAction,
  SidebarActionToggle,
  SidebarCloseAction,
} from 'store/action';

export const SET_TOGGLE_SIDEBAR = 'common/SET_TOGGLE_SIDEBAR' as const;
export const SET_CLOSE_SIDEBAR = 'common/SET_CLOSE_SIDEBAR' as const;
export const SET_FIXED_HEADER = 'common/SET_FIXED_HEADER' as const;
export const SET_CLOSE_FIXED_HEADER = 'common/SET_CLOSE_FIXED_HEADER' as const;

export interface CommonState {
  sidebar: boolean;
  fixedHeader: boolean;
}

export type CommonActionType =
  | ReturnType<typeof SidebarActionToggle>
  | ReturnType<typeof SidebarCloseAction>
  | ReturnType<typeof SetFixedHeaderAction>
  | ReturnType<typeof CloseFixedHeaderACtion>;

const initialState: CommonState = {
  sidebar: false,
  fixedHeader: false,
};

const commonReducer = (
  state = initialState,
  action: CommonActionType | any
) => {
  switch (action.type) {
    case 'common/SET_TOGGLE_SIDEBAR':
      return {
        ...state,
        sidebar: !state.sidebar,
      };
    case 'common/SET_CLOSE_SIDEBAR':
      return {
        ...state,
        sidebar: false,
      };
    case 'common/SET_FIXED_HEADER':
      return {
        ...state,
        fixedHeader: true,
      };
    case 'common/SET_CLOSE_FIXED_HEADER':
      return {
        ...state,
        fixedHeader: false,
      };
    default:
      return state;
  }
};

export default commonReducer;
