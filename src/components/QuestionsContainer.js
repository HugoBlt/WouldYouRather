import React from 'react'
import Question from './Question'

const QuestionsContainer = (props) => {
  return (
    <div className="column">
      <h4 className = 'center'>{props.title}</h4> 
    <ul className='home-list'>
      {props.listQuestion.map((id) => (
        <li key = {id}>
          <Question id = {id}/>
        </li>
      ))}
    </ul>
  </div>
  )
}


export default QuestionsContainer
