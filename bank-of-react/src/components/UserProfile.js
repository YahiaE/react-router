import React from 'react';
import {Link} from 'react-router-dom';
import { Navigate } from 'react-router-dom'

function UserProfile(props){
    return (
      <div>
        {!props.info.currentUser.login && <Navigate to="/"/>}
          {props.info.currentUser.login && 
            <>
              <h1>User Profile</h1>

              <div>Username: {props.info.currentUser.userName}</div>
              <div>Member Since: {props.info.currentUser.memberSince}</div>

              <Link to="/">Home</Link>
          </>
         }
      </div>
    );
}

export default UserProfile;