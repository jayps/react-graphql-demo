import React from 'react';
import AuthorsContext from "../contexts/authors/AuthorsContext";
import AuthorDetail from "../pages/AuthorDetail";

const AuthorsContainer = () => {
    return (
        <AuthorsContext>
            <AuthorDetail/>
        </AuthorsContext>
    )
}

export default AuthorsContainer;