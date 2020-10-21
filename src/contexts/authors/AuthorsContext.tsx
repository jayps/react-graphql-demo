import {Author} from "../../types/Author";
import React, {createContext, useReducer} from "react";
import AuthorsReducer from "./AuthorsReducer";
import {ApolloClient, InMemoryCache, gql, createHttpLink, useMutation} from '@apollo/client';
import {setContext} from "@apollo/client/link/context";
import {AddAuthorMutation} from "../../graphql/mutations/AddAuthorMutation";
import {withApollo} from "@apollo/client/react/hoc";
import { v4 as uuidv4 } from 'uuid';
import {useHistory} from "react-router-dom";

export interface AuthorsState {
    authors: Author[];
    loading: boolean;
    error: boolean;
    addAuthor: (name: string) => void
    getAuthors: () => void,
}

const initialState: AuthorsState = {
    authors: [],
    loading: false,
    error: false,
    addAuthor: () => {
    },
    getAuthors: () => {

    }
}

export const AuthorsContext = createContext(initialState);
const AuthorsProvider = ({children, client}: any) => {
    const [state, dispatch] = useReducer(AuthorsReducer, initialState);
    const [addAuthorMutation, { data }] = useMutation(AddAuthorMutation);
    const history = useHistory()

    const getAuthors = () => {
        dispatch({
            type: 'GET_AUTHORS'
        })
        client
            .query({
                query: gql`
                    query listAuthors {
                        listAuthors {
                            items {
                                id
                                name
                            }
                        }
                    }
    `
            })
            .then((result: any) => {
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

    return (
        <AuthorsContext.Provider value={{
            authors: state.authors,
            loading: state.loading,
            error: state.error,
            addAuthor: addAuthor,
            getAuthors: getAuthors
        }}>
            {children}
        </AuthorsContext.Provider>
    )
}

export default withApollo(AuthorsProvider);