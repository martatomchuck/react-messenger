import React from "react";

import "./index.css";

function convertDate(timestamp) {
  const datetime = new Date(timestamp);
  return `${datetime.getHours()}:${datetime.getMinutes()}:${datetime.getSeconds()}`;
}

function Message({ message }) {
  return (
    <div className="message">
      <div className="message--user">
        {message.user}{" "}
        <span className="message--time">{convertDate(message.datetime)}</span>
      </div>
      <div className="message--content">{message.content}</div>
    </div>
  );
}

export default Message;
