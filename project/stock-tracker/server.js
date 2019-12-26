const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 5000;
const userStocks = require('./stock');
app.use(cookieParser());
const userSessions = {};

app.post('/login', express.json(), (req, res) => {
	const  {username} = req.body;
	const sessionId = Math.floor( Date.now() + (Math.random() * 10000));
	userSessions[sessionId] = username;
	res.cookie('session', sessionId, {
		sameSite: 'Strict', 
	  });
	  res.json({sessionId});
});

app.post('/users', express.json(), (req, res) => {
	const username = req.body.username;
    userStocks.addUser(username);
	res.status(200).json("success");
});

app.post('/stocks', express.json(), (req,res)=>{
	const sessionId = req.cookies && req.cookies.session;
	const stockname = req.body.stockname;
	if(!sessionId) {
		res.status(401).json({ error: 'You must be logged in' });
	} 
	if(!userSessions[sessionId]) {
		res.status(403).json({ error: 'You do not have a valid session' });
		return;
	}
	const username = userSessions[sessionId];
	if(!userStocks.isExistingStock(username, stockname)){
		userStocks.addUserStock(username, stockname)
		.then((response) => {
			res.status(200).json(response);
		})
		.catch((error) => {
 			res.status(500).json("Error in adding stock");
		});
	}
});

app.delete('/stocks', express.json(), (req,res)=>{
	const sessionId = req.cookies && req.cookies.session;
	const stockname = req.body.stockname;
	if(!sessionId) {
		res.status(401).json({ error: 'You must be logged in' });
	} 
	if(!userSessions[sessionId]) {
		res.status(403).json({ error: 'You do not have a valid session' });
		return;
	}
	const username = userSessions[sessionId];
	if(userStocks.isExistingStock(username, stockname)){
		userStocks.deleteUserStock(username, stockname)
		res.status(200).json("deleted");
	}
});

app.put('/stocks', express.json(), (req,res)=>{
	const sessionId = req.cookies && req.cookies.session;
	const stockName = req.body.stockname;
	const stockQuantity = req.body.quantity;
	const stockEquity = req.body.equity;
	if(!sessionId) {
		res.status(401).json({ error: 'You must be logged in' });
	} 
	if(!userSessions[sessionId]) {
		res.status(403).json({ error: 'You do not have a valid session' });
		return;
	}
	const username = userSessions[sessionId];
	if(userStocks.isExistingStock(username, stockName)){
		userStocks.updateUserStock(username, stockName, stockQuantity, stockEquity);
		res.status(200).json("updated");
	}
});

app.get('/stocks', (req,res) => {
	const sessionId = req.cookies && req.cookies.session;
	if(!sessionId) {
		res.status(401).json({ error: 'You must be logged in' });
		return;
	}
	if(!userSessions[sessionId]) {
		res.status(403).json({ error: 'You do not have a valid session' });
		return;
	}
	const username = userSessions[sessionId];
	res.status(200).json(userStocks.getStocks(username));
});

app.get('/refreshstocks', (req,res) => {
	const sessionId = req.cookies && req.cookies.session;
	if(!sessionId) {
		res.status(401).json({ error: 'You must be logged in' });
		return;
	}
	if(!userSessions[sessionId]) {
		res.status(403).json({ error: 'You do not have a valid session' });
		return;
	}
	const username = userSessions[sessionId];
	userStocks.refreshUserStock(username)
	.then((response) => {
		res.status(200).json(response);
	})
	.catch((error) => {
		res.status(500).json("Error in refreshing stock");
	});
});

app.get('/logout',(req, res) =>{
	const sessionId = req.cookies && req.cookies.session;
	if(!sessionId){
		res.status(401).json({ error: 'You must be logged in' });
		return;
	}
	if(!userSessions[sessionId]) {
		res.status(403).json({ error: 'You do not have a valid session' });
		return;
	}
	delete userSessions[sessionId];
	res.clearCookie('session');
	res.json('cookie cleared');
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
