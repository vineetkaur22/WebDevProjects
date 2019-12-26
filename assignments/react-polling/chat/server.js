const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 5000;

const chat = require('./chat');
app.use(express.static('./build'));

app.use(cookieParser());
const userSessions = {};

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

app.post('/login', express.json(), (req, res) => {
	const { user } = req.body;
	const sessionId = Math.floor( Date.now() + (Math.random() * 10000));
	userSessions[sessionId] = user;
	res.cookie('session', sessionId, {
	  sameSite: 'Strict', 
	});
	res.json({sessionId});
  });

app.get('/logout',(req, res) =>{
	const sessionId = req.cookies && req.cookies.session;
	if(!sessionId) {
		res.status(401).json({ error: 'You must be logged in' });
		return;
	}
	if(!userSessions[sessionId]) {
		res.status(403).json({ error: 'You do not have a valid session' });
		return;
	}
	delete userSessions[sessionId];
	var cookie = req.cookies;
	res.clearCookie('session');
	res.json('cookie cleared');
});


app.get('/users', (req,res) => {
	const sessionId = req.cookies && req.cookies.session;
	if(!sessionId) {
		res.status(401).json({ error: 'You must be logged in' });
		return;
	}
	if(!userSessions[sessionId]) {
		res.status(403).json({ error: 'You do not have a valid session' });
		return;
	}
	res.status(200).json(chat.users);
});

app.get('/messages', (req,res) => {
	const sessionId = req.cookies && req.cookies.session;
	if(!sessionId) {
		res.status(401).json({ error: 'You must be logged in' });
		return;
	}
	if(!userSessions[sessionId]) {
		res.status(403).json({ error: 'You do not have a valid session' });
		return;
	}
	res.status(200).json(chat.messages);
});

app.post('/messages', express.json(), (req,res)=>{
	const sessionId = req.cookies && req.cookies.session;
	const message = req.body.message;
	if(!sessionId) {
		res.status(401).json({ error: 'You must be logged in' });
	} 
	if(!userSessions[sessionId]) {
		res.status(403).json({ error: 'You do not have a valid session' });
		return;
	}
	const date = new Date();
	chat.addMessage({sender:userSessions[sessionId], timestamp:date, text:message});
	chat.updateUserTimestamp({sender:userSessions[sessionId], timestamp:date});
	res.status(200).json("success");
});

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
