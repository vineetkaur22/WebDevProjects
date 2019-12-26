import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Chat from './Chat';

function App() {
	const [user, setUser] = useState("");

 	if(user !== null && user !== ""){
		return (
		<div className="App">
			<Chat props={{user:user, setUser:setUser}}/> 
		</div>
		);
 	}
 	else{
		return(
		<div className="App">
			<Login setUser={setUser}/>
		</div>
		);
 	}

}


export default App;
