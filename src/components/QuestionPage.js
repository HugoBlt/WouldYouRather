import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Col, Button } from 'react-bootstrap';
import { formatDate } from '../utils/helpers'
import { handleResponse } from '../actions/questions'


class QuestionPage extends Component {
  state = {
    selectedOption: '',
    showResult: false,
  }
  optionSelected = (e) => {
    this.setState({
      selectedOption: e.target.id
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const { dispatch, question, authedUser } = this.props
    const answer = this.state.selectedOption

    this.setState({
      showResult: true,
    })
    dispatch(handleResponse({
      authedUser,
      qid : question.id,
      answer,
    }))
  }
  render () {
    const { question, user } = this.props
    
    if (question === null) {
      return (<p className = 'center'>Error 404 : This Question doesn't exist ! Why not created it ?</p>)
    }
    
    const { author, timestamp } = question
    const { name, avatarURL } = user
    const totalAnswer = question.optionOne.votes.length + question.optionTwo.votes.length
    const ratioAnswer = 100 * question.optionOne.votes.length / totalAnswer
    

    return (
      <div>
        <h2 className='center'> Would You Rather ? </h2>
        <div className='question'>
          <img
            src={require(`../utils/avatars/${avatarURL}`)}
            alt={`Avatar of ${author}`}
            className='avatar-details'
          />
          <div>
            <div className='question-info'>
                <span>{`${name} asks :`}</span>
                <div>{formatDate(timestamp)}</div>
            </div>
            <div className='question-choice'>
            <Form>
                <Form.Group>
                  <Col sm={12}>
                    <Form.Check
                      type="radio"
                      label={question.optionOne.text}
                      name="answer"
                      id="optionOne"
                      onChange={this.optionSelected}
                    />
                    <Form.Check
                      type="radio"
                      label={question.optionTwo.text}
                      name="answer"
                      id="optionTwo"
                      onChange={this.optionSelected}
                    />
                  </Col>
                </Form.Group>
                <Button className='btn' disabled = {this.state.selectedOption === ''} onClick={this.handleSubmit}>
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
        {this.state.showResult === true
          ?
          <div className='center'> 
            <h4> Other's Response </h4>
            <div className='answer'>
              <div className='row'>
                <div className = 'column'>
                  <div className='score'>{`${ratioAnswer}%`}</div>
                  <div>{`${question.optionOne.text}`}</div>
                </div>
                <div className = 'column'>
                  <div className='score'>{`${100 - ratioAnswer}%`}</div>
                  <div>{`${question.optionTwo.text}`}</div>
                </div>
              </div>
              <div>{`Total Answer : ${totalAnswer}`}</div>
            </div>
          </div>
          : null
          }
      </div>
    )
  }
}

function mapStateToProps ({authedUser, users, questions}, { id }) {

  const question = questions[id]
  const user = users[question.author]


  return {
    question: questions[id]
    ? questions[id]
    : null,
    user : questions[id]
    ? users[questions[id].author]
    : null,
    authedUser,
  }
}

export default connect(mapStateToProps)(QuestionPage)
