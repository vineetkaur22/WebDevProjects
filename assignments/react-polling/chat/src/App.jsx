import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Chat from './Chat';
import { login, logout} from './services';

function App() {
	const [user, setUser] = useState("");

	const onLogin = (user) => {
		login({user})
		.then( data => {
		  setUser(user);
		})
		.catch( err => {
			console.warn('error in user Login');
		});
	
	};

	const onLogout = () => {
		logout()
		.then( () => { 
		  setUser("");
		})
		.catch(err => {
			console.warn('error in user Logout');
		});
	}


 	if(user && user!== ""){
		return (
		<div className="App">
			<Chat onLogout={onLogout} user={user}/> 
		</div>
		);
 	}
 	else{
		return(
		<div className="App">
			<Login onLogin={onLogin}/>
		</div>
		);
 	}

}


export default App;
