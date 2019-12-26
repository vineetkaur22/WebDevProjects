
const wordList = ["the", "and","you", "was", "for", "are", "wow", "his","one", "had", "but","not", "all", "can","ace","aah",
"abo","act","car","cee","cog","dog","die","ebb","dot"];

function checkWord(inputWord, gameObject){

	lowerCaseInputWord = inputWord.toLowerCase();
	lowerCaseAnsweredString = gameObject.answerString.toLowerCase();
	
	if (!wordList.includes(lowerCaseInputWord)){
		gameObject.guessedStrings.set(inputWord, "Invalid word");	
	}
	else if(lowerCaseAnsweredString == lowerCaseInputWord){
		gameObject.guessedStrings.set(inputWord, "Correct Answer");	
		gameObject.counter = gameObject.counter + 1;
	}
	else {
		let count = 0;
		for (const c of lowerCaseInputWord) {
			if(lowerCaseAnsweredString.includes(c)){
				count++;
			}
		}
		gameObject.guessedStrings.set(inputWord, count);
		gameObject.counter = gameObject.counter + 1;
	
	}
}

function getRandomWord (words) {
	let randomNumber = Math.floor(Math.random() * (words.wordList.length + 1));
	return words.wordList[randomNumber]
}

const words = {
	wordList,
	checkWord,
	getRandomWord
};

module.exports = words;

