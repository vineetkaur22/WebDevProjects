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

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
