import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import AuthorsContainer from "./containers/AuthorsContainer";
import AddAuthorContainer from "./containers/AddAuthorContainer";
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";

function App() {
    const httpLink = createHttpLink({
        uri: 'https://6yzdq7olcjgznhzuqosi575hqa.appsync-api.us-east-1.amazonaws.com/graphql',
    });

    const authLink = setContext((_, { headers }) => {
        return {
            headers: {
                ...headers,
                'x-api-key': `da2-hp5clowlrrg4tcqzwauunfn6fq`
            }
        }
    });

    const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache:
    });

    return (
        <ApolloProvider client={client}>
            <Router>
                <Switch>
                    <Route path="/add-author" exact>
                        <AddAuthorContainer />
                    </Route>
                    <Route path="/" exact>
                        <AuthorsContainer/>
                    </Route>
                </Switch>
            </Router>
        </ApolloProvider>

    );
}

export default App;
