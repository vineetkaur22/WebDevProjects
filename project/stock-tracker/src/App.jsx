import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import StockApp from './StockApp';
import { login, logout} from './services';

function App() {
	const [username, setUsername] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
	
    const onLogin = (username) => {
		login({username})
		.then( data => {
			setUsername(username);
		})
		.catch( err => {
			setErrorMessage('Error in user Login');
		});
	};

	const onLogout = () => {
		logout()
		.then( () => { 
			setUsername("");
		})
		.catch(err => {
			setErrorMessage('Error in user Logout');
		});
	}

	if(username){
		return (
		<div className="App">
			<div><span className="errorMessage">{errorMessage}</span></div>
			<StockApp onLogout={onLogout} username={username} errorMessage={errorMessage} setErrorMessage={setErrorMessage}/> 
		</div>
		);
 	}
 	else{
		return(
		<div className="App">
			<Login onLogin={onLogin} errorMessage={errorMessage} setErrorMessage={setErrorMessage}/>
		</div>
		);
 	}
}

export default App;
