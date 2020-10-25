import {Author} from "../../types/Author";
import React, {createContext, useReducer} from "react";
import AuthorsReducer from "./AuthorsReducer";
import {gql, useMutation, useQuery} from '@apollo/client';
import {AddAuthorMutation} from "../../graphql/mutations/AddAuthorMutation";
import {withApollo} from "@apollo/client/react/hoc";
import {useHistory} from "react-router-dom";
import {DeleteAuthorMutation} from "../../graphql/mutations/DeleteAuthorMutation";
import {AddBookMutation} from "../../graphql/mutations/AddBookMutation";
import {Book} from "../../types/Book";
import {DeleteBookMutation} from "../../graphql/mutations/DeleteBookMutation";
import {GetAllAuthorsQuery} from "../../graphql/queries/GetAllAuthors";
import {GetAuthorByIdQuery} from "../../graphql/queries/GetAuthorById";

export interface AuthorsState {
    authors: Author[];
    loading: boolean;
    error: boolean;
    currentAuthor?: Author | null;
    addAuthor: (name: string) => void
    addBook: (book: Book) => void
    getAuthors: () => void,
    getAuthorById: (id: string) => void,
    deleteAuthor: (id: string, name: string) => void,
    deleteBook: (book: Book) => void,
}

const initialState: AuthorsState = {
    authors: [],
    loading: false,
    error: false,
    currentAuthor: null,
    addAuthor: () => {
    },
    addBook: () => {
    },
    getAuthors: () => {

    },
    getAuthorById: () => {

    },
    deleteAuthor: () => {

    },
    deleteBook: () => {

    }
}

export const AuthorsContext = createContext(initialState);
const AuthorsProvider = ({children, client}: any) => {
    const [state, dispatch] = useReducer(AuthorsReducer, initialState);
    const [addAuthorMutation] = useMutation(AddAuthorMutation);
    const [addBookMutation] = useMutation(AddBookMutation);
    const [deleteAuthorMutation] = useMutation(DeleteAuthorMutation);
    const [deleteBookMutation] = useMutation(DeleteBookMutation);
    const history = useHistory()

    const getAuthors = () => {
        dispatch({
            type: 'GET_AUTHORS'
        });

        client
            .query({
                query: GetAllAuthorsQuery
            })
            .then((result: any) => {
                client.resetStore(); // TODO: Find a better way of not caching this result.
                dispatch({
                    type: 'GET_AUTHORS_SUCCESS',
                    payload: result.data.listAuthors.items
                });
            });
    }

    const getAuthorById = (id: string) => {
        dispatch({
            type: 'GET_AUTHOR'
        });

        client
            .query({
                query: GetAuthorByIdQuery,
                variables: {
                    id
                }
            })
            .then((result: any) => {
                client.resetStore(); // TODO: Find a better way of not caching this result.
                dispatch({
                    type: 'GET_AUTHOR_SUCCESS',
                    payload: {
                        ...result.data.getAuthor,
                        books: result.data.listBooks.items
                    }
                });
            });
    }

    const addAuthor = (name: string) => {
        addAuthorMutation(
            {
                variables: {name}
            })
            .then((res) => {
                getAuthors();
                history.push('/');
            });
    }

    const addBook = (book: Book) => {
        addBookMutation(
            {
                variables: {...book}
            })
            .then((res) => {
                history.push(`/authors/${book.author}`);
            });
    }

    const deleteAuthor = (id: string, name: string) => {
        dispatch({
            type: 'DELETE_AUTHOR'
        });

        deleteAuthorMutation(
            {
                variables: {id}
            })
            .then((res) => {
                getAuthors();
            });
    }

    const deleteBook = (book: Book) => {
        dispatch({
            type: 'DELETE_BOOK'
        });

        deleteBookMutation(
            {
                variables: {id: book.id}
            })
            .then((res) => {
                dispatch({
                    type: 'DELETE_BOOK_SUCCESS',
                    payload: {
                        id: book.id
                    }
                });
                getAuthorById(book.author);
            });
    }

    return (
        <AuthorsContext.Provider value={{
            authors: state.authors,
            loading: state.loading,
            error: state.error,
            currentAuthor: state.currentAuthor,
            addAuthor,
            getAuthorById,
            addBook,
            getAuthors,
            deleteAuthor,
            deleteBook
        }}>
            {children}
        </AuthorsContext.Provider>
    )
}

export default withApollo(AuthorsProvider);