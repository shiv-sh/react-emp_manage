import { LOGIN, INITIALLIST, SETSELECTEDEMP, EMPINVIEW } from '../actions/types';

const initialState = {
    loggedInUser: {},
    allEmployees: [],
    empInView: [],
    selectedEmployee: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                loggedInUser: action.payload
            }
            case INITIALLIST:
            return {
                ...state,
                allEmployees:action.payload,
                empInView:action.payload,
                selectedEmployee:action.payload[0]
            }
            case SETSELECTEDEMP:
            return {
                ...state,
                selectedEmployee:action.payload
            }
            case EMPINVIEW:
            return {
                ...state,
                empInView:action.payload
            }
        default:
            return state;
    }
}