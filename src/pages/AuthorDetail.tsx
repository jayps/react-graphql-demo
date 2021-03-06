import React, {useContext, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {Book} from "../types/Book";
import PageLayout from "../components/PageLayout";
import PageHeader from "../components/PageHeader";
import BookDetail from "../components/BookDetail";
import {AuthorsContext} from "../contexts/authors/AuthorsContext";
import Loader from "../components/Loader";
import {Alert} from "reactstrap";
import {Helmet} from "react-helmet";

const AuthorDetail = () => {
    const {getAuthorById, loading, currentAuthor, deletingBook} = useContext(AuthorsContext); // TODO: Add a method here to delete a book from an author
    const {authorId} = useParams();

    useEffect(() => {
        getAuthorById(authorId);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <PageLayout>
            <Helmet>
                <title>Author | Library Demo</title>
            </Helmet>
            <Loader loading={loading || deletingBook} message={deletingBook ? 'Deleting book...' : 'Loading author...'}>
                <PageHeader>
                    <h1>Author: {currentAuthor?.name}</h1>
                    <Link to={`/authors/${authorId}/create-book`} className="btn btn-primary">Add book</Link>
                </PageHeader>
                {
                    currentAuthor?.books.length === 0 ? (
                            <Alert color="info">
                                {currentAuthor.name} has no books. Would you like to <strong><Link to={`/authors/${authorId}/create-book`}>create a new book</Link></strong>?
                            </Alert>
                    ) : (
                        <div>
                            {
                                currentAuthor?.books.map((book: Book) => <BookDetail key={book.id} book={book}/>)
                            }
                        </div>
                    )

                }
            </Loader>
        </PageLayout>
    )

}

export default AuthorDetail;