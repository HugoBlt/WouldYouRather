import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/helpers'
import { Link, withRouter } from 'react-router-dom'

class Question extends Component {
  render() {
    const { question, user, answer } = this.props
    const { author, timestamp, id } = question
    const { name, avatarURL } = user

    if (question === null) {
      return <p>This Tweet doesn't existd</p>
    }

    return (
      <Link to={`/question/${id}`} className='question'>
        <img
          src={require(`../utils/avatars/${avatarURL}`)}
          alt={`Avatar of ${author}`}
          className='avatar'
        />
        <div className='question-info'>
          <div>
            <span>{`${name} asks :`}</span>
            <div>{formatDate(timestamp)}</div>
            {answer !== null ? <p>{`You prefers: ${answer}`}</p> : <p>Click to answer</p>}
          </div>
        </div>
      </Link>
    )
  }
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
  const question = questions[id]
  const user = users[question.author]

  return {
    question,
    user,
    answer : users[authedUser].answers[id]
    ? question[users[authedUser].answers[id]].text
    : null,
  }
}

export default withRouter(connect(mapStateToProps)(Question))
