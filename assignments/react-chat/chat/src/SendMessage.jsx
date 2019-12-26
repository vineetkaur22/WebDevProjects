import React, { useState } from 'react';
import {sendMessage} from './services';


function SendMessage({props}){
    const [message, setMessage] = useState("");
    const [sendButtonEnabled, setSendButtonEnabled] = useState(true);

    const handleInput = ((inputText) => {
        setMessage(inputText);
        if(inputText === ""){
            setSendButtonEnabled(true);
        }
        else{
            setSendButtonEnabled(false);
        }
    });

    const handleMessage  = (() => {
        const user = props.user;
        sendMessage({user, message})
			.then( function(response) {
                setMessage("");
                props.refreshMessages();
			})
			.catch(function(e) {
                props.setError(e.message);
			});
    });

    return (
        <div >               
            <input type="text" className="to-send" name="text" id ="message-text" value={message} placeholder="Enter message to send" onChange={ e => handleInput(e.target.value)}/>
            <button id="send-button" type="submit" disabled={sendButtonEnabled} onClick={handleMessage}>Send</button>
        </div>
    );
}

export default SendMessage;
