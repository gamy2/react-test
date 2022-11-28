import React from 'react'

function PrimaryButton(props) {
  return (
    <button className='btn-primary'>
       <span className='btn-data'> {props.name}</span>
    </button>
  )
}

export default PrimaryButton