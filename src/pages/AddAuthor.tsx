import React, {useContext} from 'react';
import {AuthorsContext} from "../contexts/authors/AuthorsContext";
import PageHeader from "../components/PageHeader";
import PageLayout from "../components/PageLayout";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import Loader from "../components/Loader";

const AddAuthorPage = () => {
    const {addAuthor, loading} = useContext(AuthorsContext);
    const [authorName, setAuthorName] = React.useState('');

    const onSubmit = (e: any) => {
        e.preventDefault();
        addAuthor(authorName);
    }

    return (
        <PageLayout>
            <Loader loading={loading} message="Creating author...">
                <PageHeader>
                    <h1>Add Author</h1>
                </PageHeader>
                <Form onSubmit={onSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" placeholder="Author name" onChange={(e) => setAuthorName(e.target.value)} value={authorName} required />
                    </FormGroup>
                    <Button className="btn btn-sm float-right">Submit</Button>
                </Form>
            </Loader>
        </PageLayout>
    )
}

export default AddAuthorPage;