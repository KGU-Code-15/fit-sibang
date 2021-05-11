import { ADD_RECORD } from "../_action/types"

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = {}, action) {
  switch (action.type) {
    case ADD_RECORD:
      return { ...state, addRecordSuccess: action.payload }

    default:
      return state
  }
}
