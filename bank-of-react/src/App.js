import React from 'react';
import {BrowserRouter as Router, Routes ,Route, Outlet} from 'react-router-dom';
import Home from "./components/Home"
import UserProfile from "./components/UserProfile"
import LogIn from "./components/LogIn"
import Debits from './components/Debits';

function App () {

    const [state, setState] = React.useState({
        accountBalance : 14568.27,
        currentUser: {
            userName: 'bob_loblaw',
            memberSince: '08/23/99',
        }
    })


    function mockLogIn(logInInfo) {
        const newUser = {...state.currentUser}
        newUser.userName = logInInfo.userName
        setState({currentUser: newUser})
    }

    //
    function handleChange(amount){
        const balance = Number(state.accountBalance)+Number(amount)
        setState({...state, accountBalance:balance})
    }


    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home accountBalance={state.accountBalance}/>}/>
                <Route exact path="/userProfile" element={<UserProfile currentUser={state.currentUser}  />}/>
                <Route exact path="/login" element={<LogIn user={state.currentUser} mockLogIn={mockLogIn} />}/>
                <Route exact path="/Debits" element={<Debits accountBalance={state.accountBalance} onChange={handleChange}/>}/>
            </Routes>
        </Router>
    );

}

export default App;