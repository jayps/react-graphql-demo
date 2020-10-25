import { gql } from '@apollo/client';

export const AddAuthorMutation = gql`
  mutation createAuthor($name: String!) {
      createAuthor(input: {name: $name}){
        id
        name
      }
    }

`;
