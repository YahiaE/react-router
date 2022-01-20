import React from 'react';
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom';
import Home from "./components/Home"
import UserProfile from "./components/UserProfile"
import LogIn from "./components/LogIn"

function App () {

    const [state, setState] = React.useState({
        accountBalance : 14568.27,
        currentUser: {
            userName: 'bob_loblaw',
            memberSince: '08/23/99',
        }
    })

    const HomeComponent = () => (<Home accountBalance={state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile currentUser={state.currentUser}  />
    );

    function mockLogIn(logInInfo) {
        const newUser = {...this.state.currentUser}
        newUser.userName = logInInfo.userName
        this.setState({currentUser: newUser})
      }

    const LogInComponent = () => (<LogIn user={state.currentUser} mockLogIn={mockLogIn}/>)


    return (
        <Router>
            <Switch>
                <Route exact path="/" render={HomeComponent}/>
                <Route exact path="/userProfile" render={UserProfileComponent}/>
                <Route exact path="/login" render={LogInComponent}/>
            </Switch>
        </Router>
    );

}

export default App;