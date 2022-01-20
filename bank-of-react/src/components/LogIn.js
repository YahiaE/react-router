import React from 'react'
import { Redirect } from 'react-router-dom'

function LogIn () {

    const [state, setState] = React.useState ({
                                            user: {
                                                userName: '',
                                                password: ''
                                            },
                                            redirect: false
                                        })

  function handleChange (e) {
    const updatedUser = {...this.state.user}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({user: updatedUser})
  }

  function handleSubmit (e) {
    e.preventDefault()
    this.props.mockLogIn(this.state.user)
    this.setState({redirect: true})
  }

  if (state.redirect) {
    return (<Redirect to="/userProfile"/>)
  }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="userName">User Name</label>
            <input type="text" name="userName" onChange={handleChange} value={state.user.userName} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <button>Log In</button>
        </form>
      </div>
    )
    }

export default LogIn