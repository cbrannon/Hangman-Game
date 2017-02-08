$(document).ready(function() {
    var game;

    function Game() {
        var questions = {
            1: {
                question: "Who dat?",
                answer: "ME",
                imgLink: "",
                audio: "",
            },
            2: {
                question: "Who are you?",
                answer: "DOG",
                imgLink: "",
                audio: "",
            },
            3: {
                question: "Who are you?",
                answer: "DOG",
                imgLink: "",
                audio: "",
            },
        };

        this.wins = 0;
        this.correctGuesses = [];
        this.wrongGuesses = [];
        this.answerChars;
        this.guessesRemaining = 25;

        this.setQuestion = function() {
            var randomQuestion = questions[Object.keys(questions)[Math.floor(Math.random() * Object.keys(questions).length)]];
            this.question = randomQuestion["question"];
            this.answer = randomQuestion["answer"];
            this.image = randomQuestion["imgLink"];
            this.audio = randomQuestion["audio"];
            this.answerChars = this.answer.split('');

            console.log("Set question to: " + this.question);
            console.log("Set answer to: " + this.answer);
            console.log("Set image path to: " + this.image);
            console.log("Set audio path to: " + this.audio);
            console.log("Set answer characters to: " + this.answerChars);
        }

        this.reduceGuessesRemaining = function() {
            this.guessesRemaining -= 1;
            $("#guess-count").html(this.guessesRemaining);
            console.log("Wins updated to: " + this.wins);
        }

        this.reset = function() {
            this.guessesRemaining = 25;
            this.correctGuesses = [];
            this.wrongGuesses = [];
            this.setQuestion();
            $("#guess-count").html(this.guessesRemaining);
            console.log("Guesses updated to: " + this.guessesRemaining);
        }

        this.checkWin = function() {
            if (this.correctGuesses.length == this.answerChars.length) {
                this.wins += 1;
                $("#win-count").html(this.wins);
                console.log("Wins updated to: " + this.wins);
                this.reset();
            }
        }
    }

    $(document).keypress(function(event) {
        var keyPressed = String.fromCharCode(event.keyCode).toUpperCase();
        if (game == undefined) {
            game = new Game();
            game.setQuestion();
        } else {
            if (game.answerChars.indexOf(keyPressed) == -1) {
                if (game.wrongGuesses.indexOf(keyPressed) == -1) {
                    game.wrongGuesses.push(keyPressed);
                    game.reduceGuessesRemaining();
                    console.log("Character added to wrong guesses: " + keyPressed);
                }
            } else {
                game.correctGuesses.push(keyPressed);
                console.log("Character added to correct guesses: " + keyPressed);
                game.checkWin();
            }
        }
        console.log(String.fromCharCode(keyPressed));
    });
});
