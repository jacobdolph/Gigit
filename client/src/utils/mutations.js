import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($userName: String!, $email: String!, $password: String!) {
    addUser(userName: $userName, email: $email, password: $password) {
      token
      user {
        _id
        userName
        email
      }
    }
  }
`;

export const ADD_GIG = gql`
  mutation AddGig(
    $gigName: String!
    $gigType: String!
    $userName: String!
    $phoneNum: String!
    $dateBooked: String!
    $date: String!
    $city: String!
    $endTime: String!
    $startTime: String!
    $usState: String!
    $zip: String!
    $gigDate: String!
    $userNotes: String!
  ) {
    addGig(
      gigName: $gigName
      gigType: $gigType
      userName: $userName
      phoneNum: $phoneNum
      dateBooked: $dateBooked
      date: $date
      city: $city
      endTime: $endTime
      startTime: $startTime
      usState: $usState
      zip: $zip
      gigDate: $gigDate
      userNotes: $userNotes
    ) {
      gigName
      gigType
      gigDate
    }
  }
`;
