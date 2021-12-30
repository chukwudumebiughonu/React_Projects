import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <Author />
        <Time />
        <Message />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="assets/chukwudumebi.png" className="avatar" alt="avatar" />;
}

function Message() {
  return <div className="message">This is less than 140 characters.</div>;
}

function Author() {
  return (
    <span className="author">
      <span className="name">Chukwudumebi</span>
      <span className="handle">@chukwudumebi</span>
    </span>
  );
}
const Time = () => <span className="time">3 hours ago</span>;
const ReplyButton = () => <i className="fa fa-reply reply-button" />;
const RetweetButton = () => <i className="fa fa-retweet retweet-button" />;
const LikeButton = () => <i className="fa fa-heart like-button" />;
const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

const testTweet = {
  message: 'Something about cats.',
  gravatar: 'xyz',
  author: {
    handle: 'catperson',
    name: 'Iama Cat Person'
  },
  likes: 2,
  retweets: 0,
  timestamp: '2021-07-30 21;24:37'
};
ReactDOM.render(
  <div>
    <Tweet tweet={testTweet}/>
  </div>,
  document.querySelector("#root")
);
