import { Types } from "../actions/users";

const INITAL_STATE = {
    items: []
}

export default function users(state = INITAL_STATE, action){
    switch(action.Type){
        case Types.GET_USERS_SUCCESS: {
            return { items: action.payload.items }
        }
        default: return state
    }
}