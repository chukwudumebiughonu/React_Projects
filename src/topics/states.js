import React from 'react';
import ReactDOM from 'react-dom';

// function handleAction(event) {
//     console.log('Child did:', event);

// }

// function Parent(){
//     return(
//         <Child onAction={handleAction}/>
//     )
// }

// function Child ({ onAction }) {
//     return(
//         <button onClick={onAction}>
//         Click Me! 
//         </button>
//     );
// }

function Child({ onAction }) {
  return (
    <button onClick={onAction}>
      Click Me!
    </button>
  )
};

class CountingParent extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      actionCount: 0
    };
    this.handleAction = this.handleAction.bind(this);
  }

  handleAction(action) {
    console.log('Child says', action);

    this.setState({
      actionCount: this.state.actionCount + 1
    });
  }

  render() {
    return (
      <div>
        <Child onAction={ this.handleAction } />
        <p>Clicked { this.state.actionCount } times</p>
      </div>
    );
  }
  
}
const Page = () => (
  <div>
    <CountingParent/>
    <CountingParent/>
    <CountingParent/>
  </div>
)
ReactDOM.render(<Page/>, document.querySelector('#root'))