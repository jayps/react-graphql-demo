import {gql} from '@apollo/client';

export const GetAuthorByIdQuery = gql`
    query MyQuery($id: ID = "") {
      getAuthor(id: $id) {
        id
        name
      }
      listBooks(filter: {author: {eq: $id}}){
        items {
          id
          title
          description
          author
          price
        }
      }
    }

`;