import { gql } from "@apollo/client";

export const QUERY_GIGS = gql`
  query Gigs {
    gigs {
      _id
      gigName
      gigType
      userName
      phoneNum
      email
      dateBooked
      date
      addOne
      addTwo
      city
      endTime
      startTime
      usState
      zip
      gigDate
      userNotes
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      userName
      email
      gigs {
        _id
        gigName
        gigType
        userName
        phoneNum
        email
        dateBooked
        date
        addOne
        addTwo
        city
        endTime
        startTime
        usState
        zip
        gigDate
        userNotes
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      userName
      email
    }
  }
`;
