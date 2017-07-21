var React = require('react')
var ReactDOM = require('react-dom')
var shows = require('./shows.json')
var Show = require('./Show')

ReactDOM.render(
  <Show shows={shows} showIndex={2} />,
  document.getElementById('root')
)
