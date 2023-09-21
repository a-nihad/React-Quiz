import React from 'react'
import Option from './Option'

const Question = ({question}) => {
  return (
    <div>
      <h1 className='text-2xl font-semibold mb-5'> {question.question} </h1>
      <div> <Option options={question.options} /> </div>
    </div>
  )
}

export default Question
