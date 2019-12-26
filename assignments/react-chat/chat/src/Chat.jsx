import React, { useState, useEffect, useCallback } from 'react';
import UserList from './UserList';
import MessageList from './MessageList';
import SendMessage from './SendMessage';
import {getMessages} from './services';

function Chat({props}){
	const [messages, setMessages] = useState([]);	
	const [errorMessage, setErrorMessage] = useState([]);
	const user = props.user;

	//const refreshMessages = function(){
	const refreshMessages = useCallback( () => {
			getMessages(user)
			.then( messagelist => { 
			setMessages(messagelist);
			})
			.catch(function(e){
				setErrorMessage(e.message);
			});
	},[user]);

	const setError = function (error){
		setErrorMessage(error);
	}

	const logoutChat = function(){
		props.setUser("");
	};

	useEffect(() => {
			refreshMessages();
	}, [refreshMessages]);

	return(
		<div id="chat-app">
			<div className="chat-topbar">
                <div id="title">
                  <h2>Welcome to group chat</h2>
                </div>
                <button type="submit" className="topbar-button" onClick={refreshMessages}>Refresh</button>
                <button type="submit" className="topbar-button" onClick={logoutChat}>Logout</button>
				<div className="error-message">{errorMessage}</div>
            </div>
			<div className="chat-content">
				<div id="side-bar">
 					<UserList props={{user:user, setError:setError}}/>
				</div>
				<div id="message-window">
					<MessageList messages={messages}/>
				</div>
				<div id="outgoing">
					<SendMessage props={{user:user, refreshMessages:refreshMessages, setError:setError}}/>
				</div>
			</div>
		</div>
	);
};

export default Chat;