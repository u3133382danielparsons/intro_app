var React = require('react')
var ReactDOM = require('react-dom')

var Component = React.createClass({
  getInitialState: function() {
    return{
      color: 'blue'
    };
  },

  handleButtonClick: function() {
    this.setState(function (prevState) {
      return {
        color: (prevState.color === 'blue' ? 'green' : 'blue')
      }
    })
  },

  render: function() {
    console.log(this.state.color)
    return(
      <div>
        <div style={{color: this.state.color}}>
          <h1>{this.props.greeting}</h1>
        </div>
        <button onClick={this.handleButtonClick}>Click Me</button>
      </div>
    )
  }
})

ReactDOM.render(
  <Component greeting="Hello World"  />,
  document.getElementById('root')
)
