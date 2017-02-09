$(document).ready(function() {
    var game;

    function Game() {
        this.wins = 0;
        this.correctGuesses = [];
        this.wrongGuesses = [];
        this.answerChars;
        this.guessesRemaining = 15;

        var questions = {
            1: {
                question: "Name of band?",
                answer: "MODEST MOUSE",
                imgLink: "assets/images/ozzy.jpg",
                audio: "",
            },
            2: {
                question: "Name of band?",
                answer: "RADIOHEAD",
                imgLink: "assets/images/ozzy.jpg",
                audio: "",
            },
            3: {
                question: "Name of band?",
                answer: "MAC DEMARCO",
                imgLink: "assets/images/ozzy.jpg",
                audio: "",
            },
            4: {
                question: "Name of band?",
                answer: "THE MARS VOLTA",
                imgLink: "assets/images/ozzy.jpg",
                audio: "",
            },
            5: {
                question: "Name of band?",
                answer: "PIXIES",
                imgLink: "assets/images/ozzy.jpg",
                audio: "",
            },
            6: {
                question: "Name of band?",
                answer: "Sonic Youth",
                imgLink: "assets/images/ozzy.jpg",
                audio: "",
            },
            6: {
                question: "Name of band?",
                answer: "YEAH YEAH YEAHS",
                imgLink: "assets/images/ozzy.jpg",
                audio: "",
            },
            7: {
                question: "Name of band?",
                answer: "LIARS",
                imgLink: "assets/images/ozzy.jpg",
                audio: "",
            },
        };

        this.setQuestion = function() {
            var randomQuestion = questions[Object.keys(questions)[Math.floor(Math.random() * Object.keys(questions).length)]];
            this.question = randomQuestion["question"];
            this.answer = randomQuestion["answer"];
            this.image = randomQuestion["imgLink"];
            this.audio = randomQuestion["audio"];
            this.answerChars = this.answer.split('');

            $("#question-image").attr("src", this.image);
            $("#question").html(this.question);
            $("#audio").attr("src", this.audio);
            $("#word-display").html(this.answerChars);

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

            if (this.guessesRemaining == 0) {
                this.setQuestion();
            }
        }

        this.reset = function() {
            this.guessesRemaining = 15;
            this.correctGuesses = [];
            this.wrongGuesses = [];
            this.setQuestion();
            $("#guess-count").html(this.guessesRemaining);
            console.log("Guesses updated to: " + this.guessesRemaining);
        }

        this.checkWin = function() {
            var hasWon = false;
            for (var i = 0; i < this.answerChars.length; i++) {
                if (this.correctGuesses.indexOf(this.answerChars[i]) == -1) {
                    hasWon = true;
                } else {
                    hasWon = false;
                    break;
                }
            }
            console.log("Current answer characters: " + this.answerChars.length);
            console.log("Win status: " + hasWon);

            if (hasWon) {
                this.wins += 1;
                $("#win-count").html(this.wins);
                console.log("Wins updated to: " + this.wins);
                this.reset();
            }
        }
    }

    $(document).keypress(function(event) {
        var keyPressed = String.fromCharCode(event.which).toUpperCase();
        if (game == undefined) {
            game = new Game();
            game.setQuestion();
        } else {
            if (game.answerChars.indexOf(keyPressed) == -1) {
                if (game.wrongGuesses.indexOf(keyPressed) == -1) {
                    game.wrongGuesses.push(keyPressed);
                    if (game.guessesRemaining == 0) {
                        game.reset();
                    } else {
                        game.reduceGuessesRemaining();
                        $("#wrong-guesses").html(this.wrongGuesses);
                        console.log("Character added to wrong guesses: " + keyPressed);
                    }
                }
            } else {
                if (game.correctGuesses.indexOf(keyPressed) == -1) {
                    game.correctGuesses.push(keyPressed);
                    console.log("Character added to correct guesses: " + keyPressed);
                    game.checkWin();
                }
            }
        }
        console.log(String.fromCharCode(keyPressed));
        console.log(game.correctGuesses);
    });
});
