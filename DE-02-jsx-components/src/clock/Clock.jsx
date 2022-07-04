import React from 'react'

const Clock = () => {
  return (
    <div>Clock
    
    <h2>{new Date().toLocaleString()}</h2>
    
    </div>
  )
}

export default Clock