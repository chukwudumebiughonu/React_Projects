import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

// class OneTimeButton extends React.Component{
//   state = { 
//     clicked: false
//   }

//   handleClick = () => {
//     this.props.onClick()

//     this.setState({
//       clicked: true
//     });
//   }
//   render() {
//     return (
//       <button
//         onClick={ this.handleClick }
//         disabled={ this.state.clicked }
//       >
//         You can only click me once
//       </button>
//     )
//   }
// }
// ReactDOM.render(<OneTimeButton onClick={() => alert('ha!')}/>,document.querySelector('#root'))

// converting to function

function OneTimeButton({ onClick }) {
  const [clicked, setClicked] = React.useState(false);

  const handleClick = () => {
    onClick();

    setClicked(true);
  }

  
  return (
    <button onClick={ handleClick }
      disabled={ clicked }
    >
      You can only click me once
    </button>
  );
  }

ReactDOM.render(<OneTimeButton onClick={() => alert('ha!')}/>, document.querySelector('#root'))