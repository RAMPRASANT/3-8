export default function userReducer(state = {}, action) {
  switch (action.type) {
    case 'VERIFICATION_DATA':
      return action.payload;
      break;
    default:
      return state;

  }
}