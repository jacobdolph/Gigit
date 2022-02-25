import React, { useState } from "react";
import { Container } from "../../components/Grid";
import "./style.css";
import { QUERY_ME, QUERY_ME_BASIC } from "../../utils/queries";
import Auth from "../../utils/auth";
import { useQuery } from "@apollo/client";
import ProfileCard from "../../components/ProfileCard";
import API from "../../utils/API";
var stockUser =
  "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";

const Profile = () => {
  var userImage;
  const loggedIn = Auth.loggedIn();
  const { loading, error, data: userData } = useQuery(QUERY_ME_BASIC);
  console.log(userData);

  if (!userData?.me?.__typename && !loggedIn) {
    return (
      <div className='profileError'>
        <h3 className='errorMessage'>Profile Error 404 User Not Found</h3>
        <a className='backButton btn' href='/'>
          Go Back to Home
        </a>
      </div>
    );
  } else {
    // declaring if user has image or not
    if (userData.me.picture) {
      userImage = userData.me.picture;
    } else {
      userImage = stockUser;
    }

    // returning page
    return (
      <Container>
        <div className='profileHead'>
          <img className='userImage' src={userImage} alt='profile' />

          <h2 className='userName'>Welcome {userData.me.name}</h2>
        </div>
        {/* not using row and col since react isnt liking it */}
        <div className='cardSection'>
          <div className='titleDiv'>
            <h3 className='title'>Your currently scheduled Gigs</h3>
          </div>
          <div className='cardContainer'>
            {userData?.me?.gigs?.map((res) => (
              <ProfileCard
                key={res._id}
                gigName={res.gigName}
                number={res.phoneNum}
                bookDate={res.date.split("T", 1)}
                fromTime={res.startTime}
                toTime={res.endTime}
                comment={res.userNotes}
              />
            ))}
          </div>
        </div>
      </Container>
    );
  }
};

export default Profile;
