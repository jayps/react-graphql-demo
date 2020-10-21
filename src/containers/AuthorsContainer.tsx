import React from 'react';
import AuthorsPage from "../pages/Authors";
import AuthorsContext from "../contexts/authors/AuthorsContext";

const AuthorsContainer = () => {
    return (
        <AuthorsContext>
            <AuthorsPage/>
        </AuthorsContext>
    )
}

export default AuthorsContainer;