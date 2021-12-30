import React from "react";
import ReactDOM from "react-dom";

const Greet = () => "Hi Dave";

// const Greet1 = (name) => {
//   return 'Hi' + name;
// }
// Passing Props
function Dave() {
  const firstName = "Dave";
  const lastName = "Ceddia";

  return (
    <person className="person" age={33} name={firstName + " " + lastName} />
  );
}

//  Writing the above with the React.createElement

function Dave1() {
  const firstName = "Dave";
  const lastName = "Ceddia";

  return React.createElement(
    {
      age: 33,
      name: firstName + " " + lastName,
      className: "person",
    },
    null
  );
}

// Receiving Props

function Hello(props) {
  return <span>Hello, {props.name}</span>;
}

// Receiving props in arrow function

const Hellow = () => <span>Hello, {props.name}</span>;

// Using destructuring
const Hello1 = ({ name }) => <span>Hello, {name} </span>;

// const Hello = ({ firstName, lastName }) => (
//   <span>Hello, {firstName}{lastName}</span>
// );

// const Hello = (props) => {
//   const { name } = props;
//   return (
//     <span>Hello, {name}</span>
//   );
// }

// Communicating with Parent Components

function handleAction(event) {
  console.log("Child did", event);
}

function Parents() {
  return <Child onAction={handleAction} />;
}
function Child({ onAction }) {
  return <button onClick={onAction} />;
}
ReactDOM.render(
  <div>
    <Greet />
    {/* <Greet1 /> */}
    <Dave />
  </div>,
  document.querySelector("#root")
);
