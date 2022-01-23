import React from 'react';

function AccountBalance(props) {

    return (
        <div className='balance'>
          Your account balance: {props.accountBalance}
        </div>
    );
    
}

export default AccountBalance;