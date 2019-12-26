function gamePage(words, token) {
    return `
<html>
  <head>
    <title>game</title>
    <link rel="stylesheet" href="game.css"/>
  </head>
  <body>
    <div class="main-container">
      <div class="counter-container">
        <span class="counter-span">Number of Attempts : ${getCounter(token)}</span>
      </div>

      <div class="flex-container">
        <div>
          <div class="header-div">
            <span class="header-span">Word List<span>
          </div>
          <div class="content-div">
            ${getWordList(words)}
            </ul>
          </div>
        </div>
        <div>
          <div class="header-div">
           Guessed Words
          </div>
          <div class="content-div">
            ${getGuessedWordList(token)}
            </ul>
          </div>
        </div>
        <div>
          <div class="header-div">
            Characters Matched
          </div>
          <div class="content-div">
            ${getWordResultList(token)}
            </ul>
          </div>
        </div>
      </div>
            
      <div class="flex-container-forms"> 
        <div>
           <form action="/guessWord" method="POST" class="form-component">
                <input type="text" name="inputword" placeholder="Enter the word" class="inputTextBox">
                <input type="hidden" name="token" value="${token}" />
                <button id="guessButton" type="submit">Guess</button>
            </form>
        </div>
        <div>
            <form action="/playAgain" method="GET">
              <button id="playButton" type="submit" >Play New Game</button>
            </form>
        </div>
      </div>
    </div>
  </body>
</html>`;   
}

function getGuessedWordList(token) {
  currentGameObject = currentGames.get(token);
  currentGuessedStrings = currentGameObject.guessedStrings;
  let ul = `<ul class="scroll">`;
  currentGuessedStrings.forEach(function(value, key, map) {
    ul += `<li>${key}</li>`
  });
  return ul;
}

function getCounter(token){
  currentGameObject = currentGames.get(token);
  currentCounter = currentGameObject.counter;
  let div = ``;
  div += `${currentCounter}`
  return div;
}

function getWordResultList(token) {
  currentGameObject = currentGames.get(token);
  currentGuessedStrings = currentGameObject.guessedStrings;
  let ul = `<ul class="scroll">`;
  currentGuessedStrings.forEach(function(value, key, map) {
    ul += `<li>${value}</li>`
  });
  return ul;
}

function getWordList(words) {
      return `<ul class="scroll">` +
      Object.values(words.wordList).map( currentWord => `
        <li>${currentWord}</li>    
        `).join('');
}

const currentGames = new Map();

/*  Definition of Game Object  
--------------------------------- 
  gameObject
  "answerString" : ""
  "counter" : number
  "guessedStrings" : [
            guessedString: "Not valid" / "Correct Answer" / Matched String count
           ]
*/


function startNewGame(words) {
  let token = Math.random().toString(36).substring(7);
  let newGame = {
    "answerString" : words.getRandomWord(words),
    "counter" : 0,
    "guessedStrings" : new Map()
  }
  currentGames.set(token, newGame);
  console.log("Token generated: " + token);
  console.log("Answer String: " + newGame.answerString);
  return token;
}

function getGame(token) {
  return currentGames.get(token);
}

const game = {
  gamePage,
  currentGames,
  startNewGame,
  getGame,
  getGuessedWordList,
  getWordList,
  getWordResultList,
  getCounter
};

module.exports = game;
