import React from 'react';
import AuthorsContext from "../contexts/authors/AuthorsContext";
import AddAuthorPage from "../pages/AddAuthor";

const AddAuthorContainer = () => {
    return (
        <AuthorsContext>
            <AddAuthorPage/>
        </AuthorsContext>
    )
}

export default AddAuthorContainer;