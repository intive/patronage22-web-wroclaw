import { gql } from "graphql-request";

export const GET_PRESENTATIONS = gql`query getPresentations($email: String!) {
    presentations {
      presentation @include(if email = $email)
    }
  }`;

export const GET_PRESENTATION = gql`
  query getPresentation($id: String!) {
    presentation(id: $id) {
      id
      name
      description
      email
      startTime
      currentTime
      timer
      link
      status
      isPublic
      questions
    }
  }
`;

export const ADD_PRESENTATION = gql`
mutation addPresentation($presentation: Presentation!) {
    presentation(id: $presentation.id)
}
`;

export const CHANGE_PRESENTATION = gql`
mutation changePresentation($presentation: Presentation!) {
  presentation(id: $presentation.id)
}
`;

export const DELETE_PRESENTATION = gql`
  mutation deletePresentation($id: String!) {
    presentations {
      presentation(id: $id)
    }
  }
`;
