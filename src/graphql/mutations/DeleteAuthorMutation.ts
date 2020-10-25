import { gql } from '@apollo/client';

export const DeleteAuthorMutation = gql`
  mutation deleteAuthor($id: ID!){
      deleteAuthor(input: {id: $id}){
        id
      }
    }
`;
