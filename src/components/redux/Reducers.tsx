import { combineReducers } from 'redux';

const initialState = {
  appMode: 0,
};

export type ActionType = {
  type: string,
  payload: number
}

const globalReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case 'CHANGE_STATE_VALUE':
      return { ...state, appMode: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  global: globalReducer,
});

export default rootReducer;
