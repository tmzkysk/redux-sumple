import SEND from '../constants/form_constant'

// reducerの定義
export default function formReducer(state, action) {
  switch (action.type) {
    case SEND:
      return Object.assign({}, state, {
        value: action.value,
      });
    default:
      return state;
  }
}