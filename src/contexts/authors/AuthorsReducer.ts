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
        case 'CREATE_AUTHOR':
            return {
                ...state,
                loading: true
            }
        case 'DELETE_AUTHOR':
            return {
                ...state,
                deletingAuthor: true
            }
        case 'DELETE_AUTHOR_SUCCESS':
            return {
                ...state,
                deletingAuthor: false
            }
        case 'DELETE_BOOK':
            return {
                ...state,
                deletingBook: true
            }
        case 'DELETE_BOOK_SUCCESS':
            return {
                ...state,
                deletingBook: false
            }
        case 'CREATE_BOOK':
            return {
                ...state,
                loading: true
            }
        case 'ERROR':
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
}