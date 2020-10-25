import {Book} from "../types/Book";
import React, {useContext} from "react";
import {Button, Col, Row} from "reactstrap";
import styled from "styled-components";
import {AuthorsContext} from "../contexts/authors/AuthorsContext";

type BookDetailProps = {
    book: Book
}

const BookDetailRow = styled(Row)`
    background-color: rgba(0, 0, 0, 0.01);
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
    padding-top: 16px;
`;

const BookActions = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const BookDetail: React.FC<BookDetailProps> = ({book}: BookDetailProps) => {
    const {deleteBook} = useContext(AuthorsContext);

    return (
        <BookDetailRow>
            <Col>
                <h4>
                    {book.title} <small>(R {book.price.toFixed(2)})</small>
                </h4>
                <p>{book.description}</p>
                <BookActions>
                    <Button color="danger" onClick={() => deleteBook(book)}>Delete</Button>
                </BookActions>
            </Col>
        </BookDetailRow>
    )
}

export default BookDetail;