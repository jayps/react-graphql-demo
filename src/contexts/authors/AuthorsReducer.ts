export default (state: any, action: any) => {
    switch (action.type) {
        case 'GET_AUTHORS':
        case 'GET_AUTHOR':
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
        case 'GET_AUTHOR_SUCCESS':
            return {
                ...state,
                loading: false,
                currentAuthor: action.payload
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
        case 'DELETE_BOOK':
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}