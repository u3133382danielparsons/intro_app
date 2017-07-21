var React = require('react')
var ReactDOM = require('react-dom')


var Component = function() {
  return (
    <h1>Hello World</h1>
  )
}

ReactDOM.render(
  <Component />,
  document.getElementById('root')
)
