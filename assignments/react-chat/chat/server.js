const express = require('express');
const app = express();
const PORT = 5000;

const chat = require('./chat');

app.post('/users', express.json(), (req, res) => {
	const username = req.body.username;
	if(chat.isUsernameInvalid(username)){
		res.status(400).json({message: "error in adding user"});
	}
	else{
		const date = new Date();
		chat.addUser({sender:username,timestamp:date});
		res.status(200).json("success");
	}
});

app.get('/users/:name', (req,res) => {
	const name = req.params.name;
	if(!name) {
		res.status(401).json({ error: "'name' property required" });
	} 
	else {
		if(!chat.isExistingUser(name)){
			res.status(403).json({ error: `user not logged in: ${name}`});
		}	
		else {
			res.status(200).json(chat.users);
		}
	}
});

app.get('/messages/:name', (req,res) => {
	const name = req.params.name;
	if(!name) {
		res.status(401).json({ error: "'name' property required" });
	} 
	else {
		if(!chat.isExistingUser(name)){
			res.status(403).json({ error: `user not logged in: ${name}`});
		}	
		else {
			res.status(200).json(chat.messages);
		}
	}
});

app.post('/messages/:name', express.json(), (req,res)=>{
	const username = req.params.name;
	const message = req.body.message;
	if(!username) {
			res.status(401).json({ error: "'name' property required" });
	} 
	else{
		const date = new Date();
		chat.addMessage({sender:username, timestamp:date, text:message});
		chat.updateUserTimestamp({sender:username, timestamp:date});
		res.status(200).json("success");
	}
});

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
