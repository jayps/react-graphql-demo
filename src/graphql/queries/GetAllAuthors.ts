import {gql} from '@apollo/client';

export const GetAllAuthorsQuery = gql`
    query listAuthors {
    listAuthors {
        items {
            id
            name
            books {
                id
                title
            }
        }
    }
}
`;
