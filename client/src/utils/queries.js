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
