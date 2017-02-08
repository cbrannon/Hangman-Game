$(document).ready(function() {

    function Game() {
        var questions = {
            1: {
                question: "Who dat?",
                answer: "Me",
                imgLink: "",
                audio: "",
            },
            2: {
                question: "Who are you?",
                answer: "dog",
                imgLink: "",
                audio: "",
            },
            2: {
                question: "Who are you?",
                answer: "dog",
                imgLink: "",
                audio: "",
            },
        };

        this.wins = 0;
        this.guesses = [];
        this.questionChars;

        this.addWin = function() {
            this.wins += 1;
            $("#win-count").html(this.wins);
        }

        this.setQuestion = function() {
            var randomQuestion = questions[Object.keys(questions)[Math.floor(Math.random() * Object.keys(questions).length)]];
            this.question = randomQuestion["question"];
            this.answer = randomQuestion["answer"];
            this.image = randomQuestion["imgLink"];
            this.audio = randomQuestion["audio"];
            this.questionChars = this.answer.split('');
        }

        this.addGuess = function(guess) {
            this.guesses.push(guess);
        }


    }

    var game = new Game();
    game.setQuestion();


    console.log(game.questionChars);
});
