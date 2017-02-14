var hangman;

function Game() {
    this.wins = 0;
    this.correctGuesses = [];
    this.wrongGuesses = [];
    this.answerChars;
    this.currentWord = "";
    this.guessesRemaining = 10;

    var questions = [{
            question: "Name this American rock band formed in 1992 in Issaquah, Washington.",
            answer: "MODEST MOUSE",
            imgLink: "assets/images/modest-mouse.jpg",
            audio: "assets/audio/Doin' the Cockroach.mp3"
        },
        {
            question: "Name this English rock band from Abingdon, Oxfordshire, formed in 1985.",
            answer: "RADIOHEAD",
            imgLink: "assets/images/radiohead.jpg",
            audio: "assets/audio/I Might Be Wrong.m4a"
        },
        {
            question: "This band was an American rock band from El Paso, Texas, formed in 2001.",
            answer: "THE MARS VOLTA",
            imgLink: "assets/images/mars-volta.jpg",
            audio: "assets/audio/Cassandra Geminni_ Tarantism.mp3"
        },
        {
            question: "Name this American alternative rock band formed in 1986 in Boston, Massachusetts.",
            answer: "PIXIES",
            imgLink: "assets/images/pixies.jpg",
            audio: "assets/audio/I Bleed.m4a"
        },
        {
            question: "Name this American rock band from New York City, formed in 1981.",
            answer: "SONIC YOUTH",
            imgLink: "assets/images/sonic-youth.jpg",
            audio: "assets/audio/Bull in the Heather.mp3"
        },
        {
            question: "Name this American indie rock band formed in New York City in 2000?",
            answer: "YEAH YEAH YEAHS",
            imgLink: "assets/images/yeah-yeah-yeahs.jpg",
            audio: "assets/audio/Rich.mp3"
        },
        {
            question: "Name this three-piece band formed in 2000.",
            answer: "LIARS",
            imgLink: "assets/images/liars.jpg",
            audio: "assets/audio/Sailing To Byzantium.mp3"
        },
        {
            question: "Name the frontman of Radiohead.",
            answer: "THOM YORKE",
            imgLink: "assets/images/thom-yorke.jpg",
            audio: "assets/audio/A Brain In A Bottle.mp3"
        },
        {
            question: "Name the lead singer of Yeah Yeah Yeahs.",
            answer: "KAREN O",
            imgLink: "assets/images/karen-o.jpg",
            audio: "assets/audio/Pin.mp3"
        },
        {
            question: "Name this American rock band based in San Diego, California.",
            answer: "WAVVES",
            imgLink: "assets/images/wavves.jpg",
            audio: "assets/audio/Linus Spacehead.mp3"
        },
        {
            question: "Name this English post-punk group, formed in 1977 in Leeds.",
            answer: "GANG OF FOUR",
            imgLink: "assets/images/gang-of-four.jpg",
            audio: "assets/audio/Damaged Goods.mp3"
        },
        {
            question: "Name this English rock band formed in 1976 in Salford, Greater Manchester",
            answer: "JOY DIVISION",
            imgLink: "assets/images/joy-division.jpg",
            audio: "assets/audio/Disorder.mp3"
        },
        {
            question: "Name this English-American alternative rock supergroup.",
            answer: "ATOMS FOR PEACE",
            imgLink: "assets/images/atoms-for-peace.jpg",
            audio: "assets/audio/Before Your Very Eyes....mp3"
        },
        {
            question: "Name this American experimental pop band formed in Baltimore, Maryland in 2009.",
            answer: "ANIMAL COLLECTIVE",
            imgLink: "assets/images/animal-collective.jpg",
            audio: "assets/audio/Today's Supernatural.mp3"
        },
        {
            question: "Name this Swedish alternative and experimental fusion music group.",
            answer: "GOAT",
            imgLink: "assets/images/goat.jpg",
            audio: "assets/audio/Run To Your Mama.mp3"
        },
        {
            question: "Name this experimental hip hop group from Sacramento, California, formed in 2010.",
            answer: "DEATH GRIPS",
            imgLink: "assets/images/death-grips.jpg",
            audio: "assets/audio/Giving Bad People Good Ideas.mp3"
        },
        {
            question: "Name this garage rock band from Atlanta, Georgia.",
            answer: "BLACK LIPS",
            imgLink: "assets/images/black-lips.jpg",
            audio: "assets/audio/Katrina.mp3"
        },
        {
            question: "Name English rock band, formed in Birmingham in 1968, by guitarist and main songwriter Tony Iommi, bassist and main lyricist Geezer Butler, singer Ozzy Osbourne, and drummer Bill Ward.",
            answer: "BLACK SABBATH",
            imgLink: "assets/images/ozzy.jpg",
            audio: "assets/audio/Paranoid.mp3"
        },
        {
            question: "Name this 1960s British rock supergroup power trio consisting of bassist/singer Jack Bruce, drummer Ginger Baker, and guitarist/singer Eric Clapton.",
            answer: "CREAM",
            imgLink: "assets/images/cream.jpg",
            audio: "assets/audio/White Room.mp3"
        },
        {
            question: "Name this American experimental rock band whose erratic style veers between noise pop, punk rock, and avant-garde.",
            answer: "DEERHOOF",
            imgLink: "assets/images/deerhoof.jpg",
            audio: "assets/audio/Siriustar.mp3"
        },
        {
            question: "Name this American rock band from Atlanta, Georgia, formed in 2001. The band consists of Bradford Cox, Moses Archuleta, Lockett Pundt, Josh McKay, Javier Morales and Rhasaan Manning",
            answer: "DEERHUNTER",
            imgLink: "assets/images/deerhunter.jpg",
            audio: "assets/audio/He Would Have Laughed.mp3"
        },
        {
            question: "Name this American songwriter, singer, artist, and writer who has been influential in popular music and culture for more than five decades.",
            answer: "BOB DYLAN",
            imgLink: "assets/images/bob-dylan.jpg",
            audio: "assets/audio/The Times They Are A-Changin'.mp3"
        },
        {
            question: "Name this English rock band formed in London in 1968 consisting of guitarist Jimmy Page, singer Robert Plant, bassist and keyboardist John Paul Jones, and drummer John Bonham.",
            answer: "LED ZEPPELIN",
            imgLink: "assets/images/led-zeppelin.jpg",
            audio: "assets/audio/Black Dog.mp3"
        },
        {
            question: "Name this American heavy metal band from Atlanta, Georgia, formed in 2000 and composed of bassist Troy Sanders, guitarists Brent Hinds and Bill Kelliher and drummer Brann Dailor.",
            answer: "MASTADON",
            imgLink: "assets/images/mastadon.jpg",
            audio: "assets/audio/Oblivion.m4a"
        },
    ];

    this.setQuestion = function() {
        var randomQuestion = questions[Math.floor(Math.random() * Object.keys(questions).length)];

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

        this.createCurrentWord();
        document.getElementById("question-image").src = this.image;
        document.getElementById("question").innerHTML = this.question;
        document.getElementById("audio").src = this.audio;
        document.getElementById("word-display").innerHTML = this.currentWord;

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
                        document.getElementById("wrong-guesses").innerHTML = this.wrongGuesses;
                        console.log("Character added to wrong guesses: " + key);
                        console.log("Currently held wrong guesses: " + this.wrongGuesses);
                    }
                }
            } else {
                if (this.correctGuesses.indexOf(key) == -1) {
                    var classQueries = document.getElementsByClassName(key);
                    this.correctGuesses.push(key);

                    for (var i = 0; i < classQueries.length; i++) {
                        classQueries[i].style.color = "#FFFFFF";
                        classQueries[i].style.borderBottom = "none";
                    }

                    console.log("Character added to correct guesses: " + key);
                    this.checkWin();
                }
            }
        }
    }

    this.createCurrentWord = function() {
        for (var charIndex = 0; charIndex < this.answerChars.length; charIndex++) {
            var character = this.answerChars[charIndex];
            console.log("Current character in currentWord array: " + character);
            if (character == " ") {
                var spaceString = "<span class='answer-char'> </span>";
                console.log("Space string: " + spaceString)
                this.currentWord += spaceString;
            } else {
                var charString = "<span class='answer-char bottom-border " +
                    character + "'>" + character + "</span>";
                console.log("Character string: " + charString)
                this.currentWord += charString;
            }
        }
        console.log("CurrentWord string: " + this.currentWord);
    }

    this.reduceGuessesRemaining = function() {
        this.guessesRemaining--;
        document.getElementById("guess-count").innerHTML = this.guessesRemaining;
        console.log("Wins updated to: " + this.wins);

        if (this.guessesRemaining == 0) {
            this.reset();
        }
    }

    this.reset = function() {
        this.guessesRemaining = 10;
        this.currentWord = " ";
        this.correctGuesses = [];
        this.wrongGuesses = [];
        this.setQuestion();
        document.getElementById("guess-count").innerHTML = this.guessesRemaining;
        document.getElementById("wrong-guesses").innerHTML = "";
        document.getElementById("question-image").classList.add("blur");
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
            var thisGame = this;
            this.wins++;
            document.getElementById("question-image").classList.remove("blur");
            document.getElementById("win-count").innerHTML = this.wins;
            document.getElementById("wrong-guesses").innerHTML = "WINNER!";
            console.log("Wins updated to: " + this.wins);
            setTimeout(function() {
                thisGame.reset();
            }, 5000);

        }
    }
}

document.onkeypress = function(event) {
    var keyPressed = String.fromCharCode(event.which).toUpperCase();
    if (hangman == undefined) {
        hangman = new Game();
        hangman.setQuestion();
    } else {
        hangman.assignKey(keyPressed);
    }
    console.log(String.fromCharCode(keyPressed));
    console.log(hangman.correctGuesses);
};
