import React from 'react'

function Todo({ title, datetime}) {
  return (
    <div className='todo'>
    <h1>{title}</h1>
    <p>{datetime}</p>
    </div>
  )
}

export default Todo