import {Author} from "../../types/Author";

export default (state: any, action: any) => {
    switch (action.type) {
        case 'GET_AUTHORS':
            return {
                ...state,
                loading: true,
                authors: []
            }
        case 'GET_AUTHORS_SUCCESS':
            return {
                ...state,
                loading: false,
                authors: action.payload
            }
        case 'ADD_AUTHOR':
            return {
                ...state,
                authors: state.authors.push(action.payload)
            }
        case 'DELETE_AUTHOR':
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}