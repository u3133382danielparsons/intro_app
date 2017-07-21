var React = require('react')
var ReactDOM = require('react-dom')

var Component = function(props) {
  return (
    <div style={{color: props.color}}>
      <h1>{props.greeting}</h1>
    </div>
  )
}

ReactDOM.render(
  <div>
    <Component greeting="Hey you!" color="blue" />,
    <Component greeting="Out there on your own." color="green" />
  </div>,
  document.getElementById('root')
)
