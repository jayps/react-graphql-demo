import React, {useContext} from 'react';
import {AuthorsContext} from "../contexts/authors/AuthorsContext";
import { useParams } from 'react-router-dom';
import {Book} from "../types/Book";
import PageLayout from "../components/PageLayout";
import PageHeader from "../components/PageHeader";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import Loader from "../components/Loader";

const AddBookPage = () => {
    const {addBook, loading} = useContext(AuthorsContext);
    const {authorId} = useParams();

    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [price, setPrice] = React.useState('');

    const onSubmit = (e: any) => {
        e.preventDefault();
        const book: Book = {
            title,
            description,
            author: authorId,
            price: parseFloat(price)
        }
        addBook(book);
    }

    return (
        <PageLayout>
            <Loader loading={loading} message="Creating book...">
                <PageHeader>
                    <h1>Add Book</h1>
                </PageHeader>
                <Form onSubmit={onSubmit}>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="text" name="title" id="title" placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="title">Description</Label>
                        <Input type="text" name="description" id="description" placeholder="Description" onChange={(e) => setDescription(e.target.value)} value={description} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="title">Price</Label>
                        <Input type="number" name="price" id="price" placeholder="Price" onChange={(e) => setPrice(e.target.value)} value={price} required />
                    </FormGroup>
                    <Button className="btn btn-sm float-right">Submit</Button>
                </Form>
            </Loader>
        </PageLayout>
    )
}

export default AddBookPage;