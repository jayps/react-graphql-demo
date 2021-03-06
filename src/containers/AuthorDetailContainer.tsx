import React from 'react';
import AuthorsContext from "../contexts/authors/AuthorsContext";
import AuthorDetail from "../pages/AuthorDetail";

const AuthorDetailContainer = () => {
    return (
        <AuthorsContext>
            <AuthorDetail/>
        </AuthorsContext>
    )
}

export default AuthorDetailContainer;