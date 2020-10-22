import React, {useContext} from 'react';
import {AuthorsContext} from "../contexts/authors/AuthorsContext";

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