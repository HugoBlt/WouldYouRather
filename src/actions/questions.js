
import { saveQuestionAnswer, saveQuestion } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_RESPONSE = 'ADD_RESPONSE'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function addResponse ({authedUser, qid, answer}) {
  return {
    type: ADD_RESPONSE,
    authedUser,
    qid,
    answer,
  }
}

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function handleResponse (info) {
  return (dispatch) => {

    dispatch(addResponse(info))

    return saveQuestionAnswer(info)
      .catch((e) => {
        console.warn('Error in addResponse:', e)
        dispatch(addResponse(info))
        alert('The was an error replying, please try again.')
      })
  }
}


export function handleAddQuestion (question) {
  return (dispatch) => {

    dispatch(addQuestion(question))

    return saveQuestion(question)
      .catch((e) => {
        console.warn('Error in addQuestion:', e)
        dispatch(addQuestion(question))
        alert('The was an error uploading the question, please try again.')
      })
  }
}