import React from 'react'
import ReactDOM from 'react-dom'
import APP from './js/App'

import './css/style.css'

ReactDOM.render(
  <APP />,
  document.getElementById('react-root') // eslint-disable-line no-undef
)

if(module.hot) // eslint-disable-line no-undef  
  module.hot.accept() // eslint-disable-line no-undef  

