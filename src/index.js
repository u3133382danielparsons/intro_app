var React = require('react')
var ReactDOM = require('react-dom')
var shows = require('./shows.json')
var Show = require('./Show')

ReactDOM.render(
  <div>
    <Show show={shows[0]} />
    <Show show={shows[1]} />
    <Show show={shows[2]} />
  </div>,
  document.getElementById('root')
)
