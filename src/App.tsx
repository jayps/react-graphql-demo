import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import AuthorsContainer from "./containers/AuthorsContainer";
import AddAuthorContainer from "./containers/AddAuthorContainer";
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import AuthorDetailContainer from "./containers/AuthorDetailContainer";
import AddBookContainer from "./containers/AddBookContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const httpLink = createHttpLink({
        uri: 'https://vskcaejpvbgulc7wcyxlnhhfjq.appsync-api.us-east-1.amazonaws.com/graphql',
    });

    const authLink = setContext((_, { headers }) => {
        return {
            headers: {
                ...headers,
                'x-api-key': `da2-xb43hszutfbxrg4rx3m3s2tara`
            }
        }
    });

    const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
    });

    return (
        <ApolloProvider client={client}>
            <Router>
                <Switch>
                    <Route path="/authors/:authorId/create-book" exact>
                        <AddBookContainer />
                    </Route>
                    <Route path="/authors/:authorId" exact>
                        <AuthorDetailContainer />
                    </Route>
                    <Route path="/add-author" exact>
                        <AddAuthorContainer />
                    </Route>
                    <Route path="/authors" exact>
                        <AuthorsContainer/>
                    </Route>
                    <Route path="/" exact>
                        <Redirect to="/authors" />
                    </Route>
                </Switch>
            </Router>
        </ApolloProvider>

    );
}

export default App;
