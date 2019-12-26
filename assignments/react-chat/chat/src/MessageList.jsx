import React from 'react';

function MessageList({messages}){
	return (
   <ol className="message-list"> 
    {
    messages.map( function (message,i){
      return  <li key={i} className="message-cell">
          <div className="chat-cell">
              <img className="user-icon" alt="user icon" src={message.image}/>
              <span className="messagelist-username">{message.sender}</span>
          </div>
          <div className="chat-cell-text {'__' + message.sender + '__'}">
            <span>{message.text}</span>
            <br/>
            <span className="timestamp">
              {message.timestamp}
            </span>
          </div>
      </li>
    })
    }
    </ol>
	);
};

export default MessageList;