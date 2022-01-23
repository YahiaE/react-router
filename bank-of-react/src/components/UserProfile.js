import React from 'react';
import {Link} from 'react-router-dom';
import { Navigate } from 'react-router-dom'

function UserProfile(props){
    return (
      <div>
        {!props.info.currentUser.login && <Navigate to="/react-router"/>}
          {props.info.currentUser.login && 
            <>
              <Link className='links' to="/react-router">Home</Link>
              <h1 className='titles'>User Profile</h1>
            <div className='infos'>
              <div className='info'>Username: {props.info.currentUser.userName}</div>
              <div className='info'>Member Since: {props.info.currentUser.memberSince}</div>
            </div>
          </>
         }
      </div>
    );
}

export default UserProfile;