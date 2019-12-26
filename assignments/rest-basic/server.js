const express = require('express');
const app = express();
const PORT = 3000;

const chat = require('./chat'); // "chat" holds all the non-web logic for managing users/messages
const chatWeb = require('./chat-web'); // "chat-web" holds the templates for the generated HTML
const loginWeb = require('./login-web');

app.use(express.static('./public'));

app.get('/', (req, res) => {
	res.send(loginWeb.loginPage(false));
});

app.get('/chat/:username',(req, res) => {
	let name = req.params.username;
	res.send(chatWeb.chatPage(chat, name));
});

app.get('/login',(req, res) => {	
	res.send(loginWeb.loginPage(false));
});

app.post('/logout', express.urlencoded({ extended: false }), (req, res) =>{
	if(req.body.username){
		const username  = req.body.username;
		chat.deleteUser({sender:username});
	}	
	res.redirect('/login');
});

app.post('/chat', express.urlencoded({ extended: false }), (req, res) => {
	const {username, text}  = req.body; 
	if(!username){
		res.redirect('/login');
	}
	const date = new Date();
	if(text){
		chat.addMessage({sender:username,timestamp:date,text:text});
		chat.updateUserTimestamp({sender:username,timestamp:date});
		res.send(chatWeb.chatPage(chat, username));
	}
	else{
		if(chat.addUser({sender:username,timestamp:date})){
			res.send(chatWeb.chatPage(chat, username));
		}
		else{
			res.send(loginWeb.loginPage(true));
		}
	}
});

app.get('/messages/:name', (req,res) => {
	const name = req.params.name;
	if(!name) {
		res.status(401).json({ error: "'name' property required" });
	} 
	else {
		userFound = false;
		chat.users.forEach((element) => {
			if(element.sender == name){
				userFound = true;
			}
		});

		if(!userFound) {
			res.status(403).json({ error: `user not logged in: ${name}`});
		}	
		else {
			const userMessages = [];
			chat.messages.forEach((element) => {
				//if(element.sender == name){
					userMessages.push(element);
				//}
			});
			res.status(200).json(userMessages);
		}
	}
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
