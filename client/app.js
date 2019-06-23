import React from 'react'

import {Navbar, Sidebar, Footer} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <Sidebar />
        <Routes />
      </div>
      <Footer />
    </div>
  )
}

export default App
