$( document ).ready(function() {
  var newGame;
  var questions = {
    1: { question: "Who dat?",
         answer: "Me",
         imgLink: "",
         audio: "",
       },
    2: { question: "Who are you?",
         answer: "dog",
         imgLink: "",
         audio: "",
       },
  };

  function Game() {
    this.wins = 1;
    this.guesses = [1];
    this.question = "A";
    this.answer = "A";

    function addWin() {
      return this.wins = wins + 1;
    }

    function setQuestion() {
      var question = questions[Object.keys(questions)[Math.floor(Math.random()*Object.keys(questions).length)]];
      this.question = question["question"];
      this.answer = question["answer"];
      this.image = question["imgLink"];
      this.audio = question["audio"];
    }

    function addGuess(guess) {
      this.guesses.push(guess);
    }
  }

  function startGame() {
    newGame = new Game();
  }

  startGame();
  newGame.setQuestion;

  console.log(newGame.question);
});
