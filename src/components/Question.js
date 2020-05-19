import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/helpers'

class Question extends Component {
  render() {
    const { question, user } = this.props
    const { author, timestamp } = question
    const { name, avatarURL } = user
    return (
      <div className='question'>
        <img
          src={require(`../utils/avatars/${avatarURL}`)}
          alt={`Avatar of ${author}`}
          className='avatar'
        />
        <div className='question-info'>
          <div>
            <span>{name}</span>
            <div>{formatDate(timestamp)}</div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
  const question = questions[id]
  const user = users[question.author]

  return {
    authedUser,
    question,
    user,
  }
}

export default connect(mapStateToProps)(Question)
