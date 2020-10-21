import { gql } from '@apollo/client';

export const AddAuthorMutation = gql`
  mutation createAuthor($createauthorinput: CreateAuthorInput!) {
      createAuthor(input: $createauthorinput) {
        id
        name
      }
    }
`;
