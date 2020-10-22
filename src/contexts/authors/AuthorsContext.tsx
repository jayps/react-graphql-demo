import {Author} from "../../types/Author";
import React, {createContext, useReducer} from "react";
import AuthorsReducer from "./AuthorsReducer";
import {gql, useMutation} from '@apollo/client';
import {AddAuthorMutation} from "../../graphql/mutations/AddAuthorMutation";
import {withApollo} from "@apollo/client/react/hoc";
import { v4 as uuidv4 } from 'uuid';
import {useHistory} from "react-router-dom";
import {DeleteAuthorMutation} from "../../graphql/mutations/DeleteAuthorMutation";

export interface AuthorsState {
    authors: Author[];
    loading: boolean;
    error: boolean;
    currentAuthor?: Author;
    addAuthor: (name: string) => void
    getAuthors: () => void,
    deleteAuthor: (id: string, name: string) => void,
}

const initialState: AuthorsState = {
    authors: [],
    loading: false,
    error: false,
    currentAuthor: null,
    addAuthor: () => {
    },
    getAuthors: () => {

    },
    deleteAuthor: () => {

    }
}

export const AuthorsContext = createContext(initialState);
const AuthorsProvider = ({children, client}: any) => {
    const [state, dispatch] = useReducer(AuthorsReducer, initialState);
    const [addAuthorMutation] = useMutation(AddAuthorMutation);
    const [deleteAuthorMutation] = useMutation(DeleteAuthorMutation);
    const history = useHistory()

    const getAuthors = () => {
        dispatch({
            type: 'GET_AUTHORS'
        });

        // TODO: Instead of running client.query like this, use the useQuery hook instead. Probably doesn't belong here.
        client
            .query({
                query: gql`
                    query listAuthors {
                        listAuthors {
                            items {
                                id
                                name
                                books {
                                    id
                                    title
                                }
                            }
                        }
                    }
    `
            })
            .then((result: any) => {
                client.resetStore(); // TODO: Find a better way of not caching this result.
                dispatch({
                    type: 'GET_AUTHORS_SUCCESS',
                    payload: result.data.listAuthors.items
                });
            });
    }

    const addAuthor = (name: string) => {
        addAuthorMutation(
            {
                variables: {
                    createauthorinput: { id: uuidv4(), name }
                }
            })
            .then((res) => {
                getAuthors();
                history.push('/');
            });
    }

    const deleteAuthor = (id: string, name: string) => {
        dispatch({
            type: 'DELETE_AUTHOR'
        });

        deleteAuthorMutation(
            {
                variables: {
                    input: { id, name }
                }
            })
            .then((res) => {
                getAuthors();
            });
    }

    return (
        <AuthorsContext.Provider value={{
            authors: state.authors,
            loading: state.loading,
            error: state.error,
            addAuthor: addAuthor,
            getAuthors: getAuthors,
            deleteAuthor: deleteAuthor
        }}>
            {children}
        </AuthorsContext.Provider>
    )
}

export default withApollo(AuthorsProvider);