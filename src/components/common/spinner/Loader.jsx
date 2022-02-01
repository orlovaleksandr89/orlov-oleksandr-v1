import React from 'react'
import loader from '../../../assets/loader.gif'

function Spinner() {
  return (
    <div>
      <img
        src={loader}
        alt="spinner"
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  )
}

export default Spinner
