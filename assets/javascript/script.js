$(document).ready(function() {
    var game;

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
            3: {
                question: "Who are you?",
                answer: "dog",
                imgLink: "",
                audio: "",
            },
        };

        this.wins = 0;
        this.guesses = [];
        this.answerChars;

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
            this.answerChars = this.answer.split('');

            $("#answer-display").html(this.answer);
            $("#answer-display").html(this.answer);
            $("#answer-display").html(this.answer);
            $("#answer-display").html(this.answer);

            console.log("Set question to: " + this.question);
            console.log("Set answer to: " + this.answer);
            console.log("Set image path to: " + this.image);
            console.log("Set audio path to: " + this.audio);
            console.log("Set answer characters to: " + this.answerChars);
        }

        this.addGuess = function(guess) {
            this.guesses.push(guess);
            console.log("Character guessed: " + guess);
        }
    }

    $(document).keypress(function(event) {
        if (game == undefined) {
            game = new Game();
            game.setQuestion();
            console.log(game);
        }
    });




});
