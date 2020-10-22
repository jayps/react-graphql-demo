import React, {useContext} from 'react';
import {AuthorsContext} from "../contexts/authors/AuthorsContext";
import {Author} from "../types/Author";
import {Link} from "react-router-dom";

const AuthorsPage = () => {
    const {authors, loading, error, getAuthors, deleteAuthor} = useContext(AuthorsContext);

    React.useEffect(() => {
        getAuthors();
    }, [])

    return (
        <div>
            <h1>Authors</h1>
            {
                loading && (
                    <p>Loading...</p>
                )
            }
            {
                error && (
                    <p>Oops! Something has gone wrong. Please try again.</p>
                )
            }

            {
                !loading && !error && (
                    <div>
                        <Link to="/add-author">Add author</Link>
                        <hr />
                    </div>
                )
            }

            {
                !loading && !error && authors.length === 0 && (
                    <p>
                        No authors found.
                    </p>
                )
            }
            {
                !loading && !error && authors.length > 0 && (
                    authors.map((author: Author) => (
                        <div>
                            <button onClick={() => deleteAuthor(author.id, author.name)}>&times;</button>&nbsp;<Link to={`/authors/${author.id}`}>{author.name}</Link>
                        </div>
                    ))
                )
            }
        </div>
    )
}

export default AuthorsPage;