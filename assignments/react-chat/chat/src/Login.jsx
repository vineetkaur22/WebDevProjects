import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addUser } from './services';

function Login({setUser}){
	const [username, setUsername] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [loginButtonEnabled, setLoginButtonEnabled] = useState(true);

	const handleInput = ((inputText) => {
        setUsername(inputText);
        if(inputText === ""){
            setLoginButtonEnabled(true);
        }
        else{
            setLoginButtonEnabled(false);
        }
	});
	
	const handleUsername = (() => {
		if(username === ""){
			setErrorMessage("Username cannot be empty");
		}
		else{
			setErrorMessage("");
			addUser({username})
			.then( function(response) {
				setUser(username);
			})
			.catch(function(e) {
				setErrorMessage(e.message);
			});

		}
	});

	return (
		<div className = "login-page">
			<div className="login-box">
				<h1>Login :</h1>
				<input type="text" placeholder="Enter username" value={username}
					onChange={ e => handleInput(e.target.value) }
				/>
				<span id="errorMessage">{errorMessage}</span>
				<button id="submit-button" type="submit" disabled={loginButtonEnabled} onClick={handleUsername}>Login</button>
			</div>
		</div>	
  	);
 }

Login.propTypes = {
  error: PropTypes.string
};

export default Login;

