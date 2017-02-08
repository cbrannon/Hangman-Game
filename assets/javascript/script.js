$( document ).ready(function() {

  function Game() {
    this.questions = [];
    this.wins = 0;
    this.guesses = [];
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

    this.addWin = function() {
      this.wins+=1;
    }

    this.setQuestion = function() {
      var question = questions[Object.keys(questions)[Math.floor(Math.random()*Object.keys(questions).length)]];
      this.question = question["question"];
      this.answer = question["answer"];
      this.image = question["imgLink"];
      this.audio = question["audio"];
    }

    this.addGuess = function(guess) {
      this.guesses.push(guess);
    }
  }

  var game = new Game();
  game.setQuestion();
  game.addWin();
  game.addGuess("A");

  console.log(game.guesses);
});
