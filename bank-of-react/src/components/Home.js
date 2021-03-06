import React from 'react';
import AccountBalance from "./AccountBalance"
import {Link} from 'react-router-dom';

function Home(props) {

  console.log(props);
    return (
        <div>
          {/* <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/> */}
          {!props.info.currentUser.login && <h3>Please <Link to="/login">login</Link></h3>}
          {props.info.currentUser.login && <>
                                  <div className='links'>
                                    <Link to="/userProfile">User Profile</Link>
                                    <Link to="/Debits">Debits</Link>
                                    <Link to="/Credits">Credits</Link>
                                  </div>
                                  <h1 className='titles'>Weclome! {props.info.currentUser.userName}</h1>
                                  <AccountBalance accountBalance={props.info.accountBalance}/>
                                </>}
        </div>
    )
}

export default Home;


