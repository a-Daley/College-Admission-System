import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div className="nav">
    <h1>THE GAME OF LIFE AFTER COLLEGE</h1>
    <nav>
      <div>
        <Link to="/">Start Over</Link>
      </div>
      )}
    </nav>
    <hr />
  </div>
)

export default Navbar
