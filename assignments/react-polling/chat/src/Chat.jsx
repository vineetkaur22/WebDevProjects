import React, { useState, useEffect, useCallback } from 'react';
import UserList from './UserList';
import MessageList from './MessageList';
import SendMessage from './SendMessage';
import {getMessages} from './services';

function Chat({onLogout, user}){
	const [messages, setMessages] = useState([]);	
	const [errorMessage, setErrorMessage] = useState([]);

	const REFRESH_TIME_IN_MS = 3000;

	const refreshMessages = useCallback(() => {
			getMessages()
			.then( messagelist => { 
			setMessages(messagelist);
			})
			.catch(function(e){
				setErrorMessage(e.message);
			});
	},[]);

	useEffect(() => {
		if(user){
			refreshMessages();
			const intervalId = setInterval( () => {
				refreshMessages();
			}, REFRESH_TIME_IN_MS );
			return function cleanup() {
				clearInterval(intervalId);
			};
		}
	}, [user]);

	return(
		<div id="chat-app">
			<div className="chat-topbar">
                <div id="title">
                  <h2>Welcome to group chat</h2>
                </div>
                <button type="submit" className="topbar-button" onClick={refreshMessages}>Refresh</button>
                <button type="submit" className="topbar-button" onClick={onLogout}>Logout</button>
				<div className="error-message">{errorMessage}</div>
            </div>
			<div className="chat-content">
				<div id="side-bar">
 					<UserList setErrorMessage={setErrorMessage}/>
				</div>
				<div id="message-window">
					<MessageList messages={messages}/>
				</div>
				<div id="outgoing">
					<SendMessage props={{refreshMessages:refreshMessages, setErrorMessage:setErrorMessage}}/>
				</div>
			</div>
		</div>
	);
};

export default Chat;