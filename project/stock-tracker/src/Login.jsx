
import React, { useState } from 'react';
import { addUser } from './services';

function Login({onLogin , errorMessage, setErrorMessage}){
    const [username, setUsername] = useState("");
    //const [errorMessage, setErrorMessage] = useState("");
	const [loginButtonDisabled, setLoginButtonDisabled] = useState(true);
	
    const handleInput = ((inputText) => {
        setUsername(inputText);
        if(inputText === ""){
            setLoginButtonDisabled(true);
        }
        else{
            setLoginButtonDisabled(false);
        }
    });
    
    const onKeyUp = (e) => {
        if(e.key === 'Enter') {
            handleUsername();
        }
    };

	const regExp = /^[a-zA-Z0-9]*$/;

    const handleUsername = (() => {
		if(username === ""){
			setErrorMessage("Username cannot be empty");
		}
		else if(!regExp.test(username)){
			setErrorMessage("Username can only contain alphabets or numbers");
		}
		else{
			setErrorMessage("");
			addUser({username})
			.then( function(response) {
				onLogin(username)
			})
			.catch(function(e) {
				if(e.message)
					setErrorMessage(e.message);
				else
					setErrorMessage("Error in login");
			});
		}
	}); 

    return (
		<div className = "login-page">
			<div className="login-box">
				<h1>Login</h1>
				<input type="text" placeholder="Enter username" value={username}
					onChange={ e => handleInput(e.target.value)} onKeyUp={onKeyUp}/>
				<div><span className="errorMessage">{errorMessage}</span></div>
				<button id="submit-button" type="submit" disabled={loginButtonDisabled} onClick={handleUsername}>Login</button>
			</div>
		</div>	
  	);
 }

 export default Login;
