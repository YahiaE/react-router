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
                                  <h1>Weclome! {props.info.currentUser.userName}</h1>
                                  <Link to="/userProfile">User Profile</Link>
                                  <br />
                                  <Link to="/Debits">Debits</Link>
                                  <br />
                                  <Link to="/Credits">Credits</Link>
                              
                                  <AccountBalance accountBalance={props.info.accountBalance}/>
                                </>}
        </div>
    )
}

export default Home;


