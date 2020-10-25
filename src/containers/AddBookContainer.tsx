import React from 'react';
import AuthorsContext from "../contexts/authors/AuthorsContext";
import AddBookPage from "../pages/AddBook";

const AddBookContainer = () => {
    return (
        <AuthorsContext>
            <AddBookPage/>
        </AuthorsContext>
    )
}

export default AddBookContainer;