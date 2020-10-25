import { gql } from '@apollo/client';

export const DeleteBookMutation = gql`
  mutation MyMutation($id:ID!) {
      deleteBook(input: {id: $id}) {
        id
      }
    }

`;
