import React from "react";

function MessageForm({ message, handleSubmit, handleContentChange }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user"
          placeholder="username" />
        <input
          type="text"
          name="content"
          placeholder="message"
          value={message}
          onChange={(event) => handleContentChange(event.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default MessageForm;
