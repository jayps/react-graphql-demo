import React, {useContext, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {GetAuthorByIdQuery} from "../graphql/queries/GetAuthorById";
import {Book} from "../types/Book";
import {useQuery} from "@apollo/client";
import PageLayout from "../components/PageLayout";
import PageHeader from "../components/PageHeader";
import BookDetail from "../components/BookDetail";
import {AuthorsContext} from "../contexts/authors/AuthorsContext";

const AuthorDetail = () => {
    const {getAuthorById, loading, error, currentAuthor} = useContext(AuthorsContext); // TODO: Add a method here to delete a book from an author
    const {authorId} = useParams();

    useEffect(() => {
        getAuthorById(authorId);
    }, [])

    if (loading) {
        return <PageLayout><p>Loading...</p></PageLayout>
    }


    if (error) {
        return <PageLayout><p>Oops! Something has gone wrong. Please try again.</p></PageLayout>
    }

    console.log('currentAuthor', currentAuthor);

    return (
        <PageLayout>
            <PageHeader>
                <h1>Author: {currentAuthor?.name}</h1>
                <Link to={`/authors/${authorId}/create-book`} className="btn btn-primary">Add book</Link>
            </PageHeader>
            {
                currentAuthor?.books.length === 0 ? (
                    <p>This author has no books</p>
                ) : (
                    <div>
                        {
                            currentAuthor?.books.map((book: Book) => <BookDetail key={book.id} book={book} />)
                        }
                    </div>
                )

            }
        </PageLayout>
    )

}

export default AuthorDetail;