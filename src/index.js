import React from "react";
import ReactDOM from "react-dom";

function HelloWorld() {
  return <div>Hello World!</div>;
}

// Example of simple react element that returns some JSX
function Hello() {
  return <span>Hello! Chukwudumebi</span>;
}

function Ello() {
  return React.createElement("span", {}, "How are you doing");
}
function Excell() {
  return React.createElement("div", {}, "Have an excellent mind");
}
function ToDo() {
  return <div>Things I am going to do include</div>;
}

function Babell() {
  return React.createElement(
    "div",
    {},
    "Understanding the difference  between JSX and Babel complied Javascript"
  );
}
function Jsx() {
  return <div>Practice makes perfect</div>;
}
function ManyChildren() {
  return React.createElement(
    "div",
    {},
    React.createElement("div", {}, "The first child"),
    React.createElement(
      "div",
      {},
      "The next child",
      React.createElement("div", {}, "The last child")
    )
  );
}

function Children() {
  return React.createElement(
    "div",
    {},
    React.createElement("div", {}, "Child one"),
    React.createElement(
      "div",
      {},
      "Child two",
      React.createElement("div", {}, "Child three")
    )
  );
}
function SongNames(props) {
  return <span className="song-names">{props.song.names}</span>;
}

function NewSong(props) {
  return React.createElement("span", { className: "new-song" }, props.new.song);
}
function SongTune(props) {
  return React.createElment(
    "span",
    { className: "song-tune" },
    props.song.tune
  );
}

// Working with JSX composing components

function Hellow() {
  return <div>Hello Oxford</div>;
}
function StartUp() {
  return <span>Oncosys</span>;
}
function Cure() {
  return React.createElement("span", {}, "The platform for personalized care");
}
function Oncobit() {
  return <div>Personalized treatment for cancer</div>
}
function PineBio() {
  return (
    <div>Personalized treatment for heart conditions</div>
  );
}
function P4() {
  return (
    <div>
      <Oncobit />
      <PineBio />
    </div>
  );
}
// Wrap JSX with parentheses
function Pre4() {
  return<div>
    <Oncobit />
    <PineBio />
  </div>
}
function Hardware() {
  return <span>Hardware is the visible component</span>
}
function Software() {
  return(<span> while software is the non-tangible components</span>)
}
function Comp(){
  return (
    <div>
      <Hardware />
      <Software />
    </div>
  );
}
// A component function must be returned as a single element

function OneComp() {
  return [
    React.createElement(Hardware, null),
    React.createElement(Software, null)
  ]
}
// Wrapping element with a tag
function One() {
  return (
    <div>
      <Hardware/>
      <Software/>
    </div>
  )
}
function NameCells() {
  return (
    <React.Fragment>
    <td>First Name</td>
      <td>Last Name</td>
    </React.Fragment>
  );
}
// Using React.Fragment
function NewName() {
  return (
    <React.Fragment>
      <td>School name</td>
      <td>Class name</td>
    </React.Fragment>
  )
}

function NewComp() {
  return <div>
    <NameCells />
    <NewName />
  </div>
}
// Trying out React.Fragment in '<>'
function Refunct() {
  return (
    <>
      <td>The first title</td>
      <td>The second title</td>
    </>
  )
}


// Inserting real javascript expression inside JSX code 


function SubmitButton() {
  const ButtonLabel = 'submit';
  
  return (
    <button>{ButtonLabel}</button>
  );
}

function Turtle() {
  const TurtleButton = 'submit';

  return (
    <button>{TurtleButton}</button>
  );
}

// If in JSX   

// This can be done with  the tenary operator that is the quotation mark/

function ValidIndicator() {
  const isValid = true;
  return (
    <span>{isValid ? 'valid' : 'not valid'}</span>
  );
}


function Valid() {
  const newval = true;
  return (
    <div>{newval ? 'this is valid' : 'this is not valid'}</div>
  );
}

function Isgreat() {
  const itIsGreat =false;
  return (
    <div>
      {itIsGreat ? 'This great' : 'this is not great'}
    </div>
  );
}
// using  boolllean operators such as && 

function Blonde() {
  const isBlonde = true;
  return (
    <div>
    { isBlonde && 'she is a blonde'}
      {!isBlonde && 'she is not a blonde'}
    </div>
  );
}

function Prof() {
  const isProf = true;
  return (
    <div>
      {isProf && 'He is a professor'}
      {!isProf && 'He is not a professor'}
    </div>
  )
}
// Commenting in JSX 

function Validity() {
  const Check = true;
  return (
    <div>{Check ? 'this a validity indicatior' : 'This is not a validity indicator'}
      {/* lets make a comment here */}
      // doubl-slash comments are  okay in multi-line blocks
      {/* 
      <span>Let's comment on a span</span>
      <span>Here is another comment on a span</span>
      */}
    </div>
    
  );
}

// Note components are started with capital letters in JSX
// If it starts with a lower case it is assumed to be a built in  html or svg  element

// Close Every element in JSX
// JSX requires that every  element is closed even element like <br>  and <input> that is lef open in  HTML so do This
// return <br />;
// return <input type='password' ... />;
// return <li>test</li>

// and not this
// return <br>;
//   return <input type='password' ...>;
//   return<li>
ReactDOM.render(
  <div>
    <HelloWorld /> <Hello />
    <Ello /> <Excell /> <ToDo />
    <Babell /> <Excell /> <ToDo /> <Jsx />
    <ManyChildren /> <Children />
    {/* <SongNames /> <NewSong /> <SongTune /> */}
    <Hellow /> <StartUp /> <Cure /><P4 /> <Pre4 />
    <Comp /> <OneComp /> <One /> <NameCells /> <NewName />
    <NewComp /> <Refunct /> <SubmitButton /> <Turtle />
    <ValidIndicator/> <Valid /> <Isgreat /> <Blonde /> <Prof/> <Validity/>
  </div>,
  document.querySelector("#root")
);

