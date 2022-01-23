import React from 'react'
import { Navigate } from 'react-router-dom'

function LogIn (props) {

    const [state, setState] = React.useState ({
                                            user: {
                                                userName: '',
                                                password: ''
                                            },
                                            redirect: false
                                        })

  function handleChange (e) {
    const updatedUser = {...state.user}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue
    console.log(inputField)
    setState({user: updatedUser})
  }

  function handleSubmit (e) {
    e.preventDefault()
    props.mockLogIn(state.user)
    setState({redirect: true})
  }

  if (state.redirect) {
    return(<Navigate to="/"/>)
  }

    return (
      <div>
        <form onSubmit={handleSubmit} className='login'>
          <div className='input'>
            <label htmlFor="userName">User Name</label>
            <input type="text" name="userName" onChange={handleChange} value={state.user.userName} />
          </div>
          <div className='input'>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <button>Log In</button>
        </form>
      </div>
    )
    }

export default LogIn