import React, {useContext} from 'react';
import {AuthorsContext} from "../contexts/authors/AuthorsContext";
import {Author} from "../types/Author";
import {Link} from "react-router-dom";

const AuthorDetail = () => {
    const {currentAuthor, loading, error, getAuthors} = useContext(AuthorsContext);

    React.useEffect(() => {
        getAuthors();
    }, [])

    if (loading) {
        return <div><p>Loading...</p></div>
    }

    if (error) {
        return <div><p>Oops! Something has gone wrong. Please try again.</p></div>
    }

    return (
        <div>
            <h1>Author: </h1>
        </div>
    )
}

export default AuthorDetail;