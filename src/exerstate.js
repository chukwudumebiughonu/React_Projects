import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Child({ onAction }) {
  return (
    <button onClick={ onAction }>
      Click me
    </button>
  )
};
class House extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      kitchen: true,
      bathroom: false,
      livingRoom: true,
      bedroom: false,
    }
    this.handleAction = this.handleAction.bind(this);
  }
  handleAction(action) {
    console.log('Child says', action);

    this.setState({
      kitchen: this.state.kitchen + 0,
      bathroom: this.state.bathroom + 0,
      livingRoom: this.state.livingRoom + 0,
      bedroom: this.state.bedroom + 0,
    })

    
  }
  render() {
      return (
        <div>
          <Child onAction={ this.handleAction } />
          <p>Light { this.state.kitchen } is on</p>
          <p>Light { this.state.bathroom } is on</p>
          <p>Light { this.state.livingRoom } is on</p>
          <p>Light { this.state.bedroom } is on</p>
        </div>
      );
    }
}

ReactDOM.render(<House/>, document.querySelector('#root'))