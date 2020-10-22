import { gql } from '@apollo/client';

export const DeleteAuthorMutation = gql`
  mutation deleteAuthor($input: DeleteAuthorInput!) {
    deleteAuthor(input: $input){
        id
        name
    }
  }
`;
