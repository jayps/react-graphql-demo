import React, {useContext} from 'react';
import {AuthorsContext} from "../contexts/authors/AuthorsContext";
import {Author} from "../types/Author";
import {Link} from "react-router-dom";
import PageLayout from "../components/PageLayout";
import {Alert, Button} from "reactstrap";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import Loader from "../components/Loader";
import {Helmet} from "react-helmet";

const AuthorListItem = styled(Link)`
    padding: 16px;
    margin-bottom: 16px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.25s ease;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        text-decoration: none;
    }
`;

const AuthorsPage = () => {
    const {authors, loading, getAuthors, deleteAuthor, deletingAuthor} = useContext(AuthorsContext);

    React.useEffect(() => {
        getAuthors();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onClickDeleteAuthor = (event: any, id: string, name: string) => {
        event.preventDefault();
        deleteAuthor(id, name);
    }

    return (
        <PageLayout>
            <Helmet>
                <title>Authors | Library Demo</title>
            </Helmet>
            <PageHeader>
                <h1>Authors</h1>
                        <div>
                            <Link to="/add-author" className="btn btn-primary">Add Author</Link>
                        </div>
            </PageHeader>
            <Loader loading={loading || deletingAuthor} message={deletingAuthor ? 'Deleting author...' : 'Loading authors...'}>
                {
                    authors.length === 0 && (
                        <Alert color="info">
                            No authors found. Would you like to <strong><Link to="/add-author">add a new author</Link></strong>?
                        </Alert>
                    )
                }
                {
                    authors.length > 0 && (
                        authors.map((author: Author) => (
                            <AuthorListItem key={author.id} to={`/authors/${author.id}`}>
                                {author.name}
                                <Button onClick={(e) => onClickDeleteAuthor(e, author.id, author.name)}
                                        className="btn btn-danger">
                                    Delete
                                </Button>
                            </AuthorListItem>
                        ))
                    )
                }
            </Loader>
        </PageLayout>
    )
}

export default AuthorsPage;