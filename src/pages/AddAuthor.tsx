import React, {useContext} from 'react';
import PageLayout from "../components/PageLayout";
import {AuthorsContext} from "../contexts/authors/AuthorsContext";
import {Author} from "../types/Author";
import { useHistory } from 'react-router-dom';
import {useMutation} from "@apollo/client";
import {AddAuthorMutation} from "../graphql/mutations/AddAuthorMutation";

const AddAuthorPage = () => {
    const {addAuthor} = useContext(AuthorsContext);
    const [authorName, setAuthorName] = React.useState('');

    const onSubmit = (e: any) => {
        e.preventDefault();
        addAuthor(authorName);
    }

    return (
        <div>
            <h1>Add Author</h1>
            <form onSubmit={onSubmit}>
                <label>Name</label><br />
                <input type="text" id="name" name="name" onChange={(e) => setAuthorName(e.target.value)} value={authorName}/>

                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default AddAuthorPage;