// src/components/MessageButton/MessageButton.jsx
import React from 'react';
import './MessageButton.css';

const MessageButton = ({ onClick }) => {
  return (
    <button className="message-button" aria-label="Send a Message" onClick={onClick}>
      📝
    </button>
  );
};

export default MessageButton;
