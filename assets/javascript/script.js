$(document).ready(function() {
    var hangman;

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
                question: "Name of this dork?",
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
                answer: "SONIC YOUTH",
                imgLink: "assets/images/ozzy.jpg",
                audio: "",
            },
            7: {
                question: "Name of band?",
                answer: "YEAH YEAH YEAHS",
                imgLink: "assets/images/ozzy.jpg",
                audio: "",
            },
            8: {
                question: "Name of band?",
                answer: "LIARS",
                imgLink: "assets/images/ozzy.jpg",
                audio: "",
            },
            9: {
                question: "Front man of Radiohead?",
                answer: "THOM YORKE",
                imgLink: "assets/images/ozzy.jpg",
                audio: "",
            },
            10: {
                question: "Lead singer of Yeah Yeah Yeahs?",
                answer: "KAREN O",
                imgLink: "assets/images/ozzy.jpg",
                audio: "",
            },
            11: {
                question: "What's the name of this baby?",
                answer: "TY SEGALL",
                imgLink: "assets/images/ozzy.jpg",
                audio: "",
            },
            12: {
                question: "Name of band?",
                answer: "THE GROWLERS",
                imgLink: "assets/images/ozzy.jpg",
                audio: "",
            },
            13: {
                question: "Name of band?",
                answer: "WAVVES",
                imgLink: "assets/images/ozzy.jpg",
                audio: "",
            },
            14: {
                question: "Name of band?",
                answer: "KING GIZZARD AND THE LIZARD WIZARD",
                imgLink: "assets/images/ozzy.jpg",
                audio: "",
            },
            15: {
                question: "Name of band?",
                answer: "TELEVISION",
                imgLink: "assets/images/ozzy.jpg",
                audio: "",
            },
            16: {
                question: "Name of band?",
                answer: "GANG OF FOUR",
                imgLink: "assets/images/ozzy.jpg",
                audio: "",
            },
            17: {
                question: "Name of band?",
                answer: "JOY DIVISION",
                imgLink: "assets/images/ozzy.jpg",
                audio: "",
            },
            18: {
                question: "Name of band?",
                answer: "ATOMS FOR PEACE",
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

            if (this.answerChars.indexOf(" ") != -1) {
              this.correctGuesses.push(" ");
            }
        }

        this.assignKey = function(key) {
          if (key.match(/[a-z]/i)) {
            if (this.answerChars.indexOf(key) == -1) {
                if (this.wrongGuesses.indexOf(key) == -1) {
                    this.wrongGuesses.push(key);
                    if (this.guessesRemaining == 0) {
                        thisn.reset();
                    } else {
                        this.reduceGuessesRemaining();
                        $("#wrong-guesses").html(this.wrongGuesses);
                        console.log("Character added to wrong guesses: " + key);
                        console.log("Currently held wrong guesses: " + this.wrongGuesses);
                    }
                }
            } else {
                if (this.correctGuesses.indexOf(key) == -1) {
                    this.correctGuesses.push(key);
                    console.log("Character added to correct guesses: " + key);
                    this.checkWin();
                }
            }
          }
        }

        this.reduceGuessesRemaining = function() {
            this.guessesRemaining -= 1;
            $("#guess-count").html(this.guessesRemaining);
            console.log("Wins updated to: " + this.wins);

            if (this.guessesRemaining == 0) {
                this.reset();
            }
        }

        this.reset = function() {
            this.guessesRemaining = 15;
            this.correctGuesses = [];
            this.wrongGuesses = [];
            this.setQuestion();
            $("#guess-count").html(this.guessesRemaining);
            $("#wrong-guesses").html("");
            console.log("Guesses updated to: " + this.guessesRemaining);
        }

        this.checkWin = function() {
            var hasWon = false;
            for (var answerChar = 0; answerChar < this.answerChars.length; answerChar++) {
              var charCheck = this.answerChars[answerChar];
              console.log(charCheck);

              if (this.correctGuesses.indexOf(charCheck) == -1) {
                hasWon = false;
                break;
              } else {
                hasWon = true;
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
        if (hangman == undefined) {
            hangman = new Game();
            hangman.setQuestion();
        } else {
          hangman.assignKey(keyPressed);
        }
        console.log(String.fromCharCode(keyPressed));
        console.log(hangman.correctGuesses);
    });
});
