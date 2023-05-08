import React from 'react'
import NAV from '../components/nav'
import FORM from '../components/form.js'

function admin() {
  return (
    <div>
    <div className="container">
      <NAV />
    </div>

    <div className="container">
        <FORM/>
    </div>
  </div>
  )
}

export default admin