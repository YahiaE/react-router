import React from 'react';
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import Home from "./components/Home"
import UserProfile from "./components/UserProfile"
import LogIn from "./components/LogIn"
import Debits from './components/Debits';
import Credits from './components/Credits';

function App () {

    const [state, setState] = React.useState({
        accountBalance : 14568.27,
        currentUser: {
            userName: 'bob_loblaw',
            memberSince: '08/23/99',
            login:false
        }
    })


    function mockLogIn(logInInfo) {
        const newUser = {...state.currentUser}
        newUser.userName = logInInfo.userName
        newUser.memberSince = new Date().toISOString().slice(0,10)
        newUser.login = true
        setState({...state,currentUser: newUser})
    }

    
    function handleChange(amount){
        const balance = Number(state.accountBalance)+Number(amount)
        setState({...state, accountBalance:balance})
    }


    return (
        <Router>
            <h1 className='nav'>Bank of React</h1>
            <Routes>
                <Route exact path="react-router/" element={<Home info={state}/>}/>
                <Route exact path="/login" element={<LogIn user={state.currentUser} mockLogIn={mockLogIn} />}/>
                <Route exact path="/userProfile" element={<UserProfile info={state}  />}/>
                <Route exact path="/Debits" element={<Debits accountBalance={state.accountBalance} login={state.currentUser.login} onChange={handleChange}/>}/>
                <Route exact path="/Credits" element={<Credits accountBalance={state.accountBalance} login={state.currentUser.login} onChange={handleChange}/>}/>
            </Routes>
        </Router>
    );

}

export default App;