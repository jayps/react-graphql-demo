import React, {useContext, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {GetAuthorByIdQuery} from "../graphql/queries/GetAuthorById";
import {Book} from "../types/Book";
import {useQuery} from "@apollo/client";
import PageLayout from "../components/PageLayout";
import PageHeader from "../components/PageHeader";
import BookDetail from "../components/BookDetail";
import {AuthorsContext} from "../contexts/authors/AuthorsContext";
import Loader from "../components/Loader";
import {Alert} from "reactstrap";

const AuthorDetail = () => {
    const {getAuthorById, loading, error, currentAuthor, deletingBook} = useContext(AuthorsContext); // TODO: Add a method here to delete a book from an author
    const {authorId} = useParams();

    useEffect(() => {
        getAuthorById(authorId);
    }, [])

    if (error) {
        return <PageLayout><p>Oops! Something has gone wrong. Please try again.</p></PageLayout>
    }

    return (
        <PageLayout>
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