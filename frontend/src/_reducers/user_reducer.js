import { LOGIN_USER, REGISTER_USER } from '../_action/types'

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload }
    case REGISTER_USER:
      return { ...state, registerSuccess: action.payload }
    default:
      return state
  }
}
