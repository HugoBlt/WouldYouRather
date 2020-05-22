import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { setAuthedUser } from '../actions/autheduser'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  state = {
    user : this.props.authedUser ? this.props.authedUser : '',
    userAlreadyLog : false,
    toHome : false
  }
  handleSelectProfil = (e) => {
    const user = e.target.value
    this.setState(() => ({
      user
    }))
  }
  handleSubmit = (e) => {
    const user = this.state.user
    const { dispatch } = this.props
    dispatch(setAuthedUser(user))
    this.setState(() => ({
      userAlreadyLog : true,
      toHome : true,
    }))
  }
  render () {
    console.log('ici', this.state.toHome)
    if (this.state.toHome === true) {
      return <Redirect to='/dashboard'/>
    }
    return (
      <div className='center'>
        <h3>Choose your profil : </h3>
        <Form >
            <Form.Group>
              <Form.Control as="select" onChange={this.handleSelectProfil} value = {this.state.user}> 
              <option value="" >Select your profil</option>           
                {Object.keys(this.props.users).map((user) => (
                  <option key = {this.props.users[user].id} value = {this.props.users[user].id}>
                    {this.props.users[user].id}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Button
              className='btn'
              disabled={this.state.user === ''}
              onClick={this.handleSubmit}>
                Log in
            </Button>
        </Form>
      </div>
    )
  }
}

function mapStateToProps ({users, authedUser}) {

  return {
    users,
    authedUser : authedUser 
    ? authedUser
    : null,
  }
}

export default connect(mapStateToProps)(Login)