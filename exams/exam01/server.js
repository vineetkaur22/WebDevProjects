const express = require('express');
const app = express();
const PORT = 3000;
const words = require('./words'); 
const game = require('./game'); 

app.use(express.static('./public'));

app.get('/', (req, res) => {
  let token = game.startNewGame(words);
  res.send(game.gamePage(words, token));
});

app.post('/guessWord', express.urlencoded({ extended: false }), (req, res) => {
  const {inputword, token}  = req.body; 
  let gameObject = game.getGame(token);
  words.checkWord(inputword, gameObject);
  res.send(game.gamePage(words, token));
});

app.get('/playAgain', express.urlencoded({ extended: false }), (req, res) => {
	  res.redirect('/');
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
