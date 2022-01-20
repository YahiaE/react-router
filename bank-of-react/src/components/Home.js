import React from 'react';
import AccountBalance from "./AccountBalance"
import {Link} from 'react-router-dom';

function Home(props) {

    return (
        <div>
          {/* <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/> */}
          <h1>Bank of React</h1>
          
          <Link to="/userProfile">User Profile</Link>
          <br />
          <Link to="/Debits">Debits</Link>

          <AccountBalance accountBalance={props.accountBalance}/>
        </div>
    )
}

export default Home;


