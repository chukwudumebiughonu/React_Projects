import React from 'react';
import ReactDOM from 'react-dom';

class OneTimeButton extends React.Component{
  state = {
    Clicked: false
  }

  handleClick = () => {
    this.props.onClick();

    this.setState({ clicked: true });
  }

  render() {
    return (
      <button
        onClick={ this.handleClick }
        disabled={ this.state.clicked }
      >
        You Can Only Click Me Once
      </button>
    );
  }
}

ReactDOM.render(
  <OneTimeButton onClick={ () => alert('hi') } />,
  document.querySelector('#root')
);