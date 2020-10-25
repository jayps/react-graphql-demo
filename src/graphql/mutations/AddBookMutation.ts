import {gql} from '@apollo/client';

export const AddBookMutation = gql`
mutation createBook($author:ID!, $description:String!, $price: Float!, $title:String!) {
    createBook(input: {author: $author, description: $description, price: $price, title: $title}){
        id
        title
        description
        author
        price
    }
}
`;


