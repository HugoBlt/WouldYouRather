import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Dashboard extends Component {
  render() {
    const {remaningQuestions, answeredQuestions, user } = this.props
    return (
      <div>
        <h3 className='center'> Would You Rather ? </h3>
        <div>        
          <ul className='home-list'>
            {remaningQuestions.map((id) => (
              <li key = {id}>
                <Question id = {id}/>
              </li>
            ))}
          </ul>
          <ul className='home-list'>
            {answeredQuestions.map((id) => (
              <li key = {id}>
                <Question id = {id}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({authedUser, users, questions}) {
  const user = users[authedUser] 
  const answeredQuestions = Object.keys(user.answers)

  return {
    remaningQuestions: Object.keys(questions).filter(id => !answeredQuestions.includes(id))
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    answeredQuestions : answeredQuestions
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    user
  }
}

export default connect(mapStateToProps)(Dashboard)
