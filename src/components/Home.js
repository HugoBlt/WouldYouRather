import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Home extends Component {
  render() {
    console.log('ici')
    console.log(this.props)
    return (
      <div>
        <h3 className='center'> Would You Rather ? </h3>
        <div>        
          <ul className='home-list'>
            {this.props.questionsIds.map((id) => (
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

  return {
    questionsIds: Object.keys(questions)
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    user,
  }
}

export default connect(mapStateToProps)(Home)

