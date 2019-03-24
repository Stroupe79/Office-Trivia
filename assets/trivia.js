$(document).ready(function () {

    var timer = 30;

    // Qs and As arrays
    var questions = [
        "What was the name of Dwight's farm?",
        "During diversity training day, what race was Stanley's card?",
        "Which one of the actors for these characters is a real life famous musician?",
        "Who does Angela name her son after?",
        "What is the name of the security guard?",
        "Who said 'Bankruptcy is natures do-ver.'?",
        "What college did Andy attend?",
        "What is Micheal's favorite pizza joint in New York?",
        "Who dressed as 'The Joker' for Halloween?",
        "What was did Micheal give his 'Scotts Tots' in place of paid tuition to college?",
        "Which employee did Michael hit with his car?"
    ]

    var answers = [
        ["Schrute Farms", "Beets Unlimited", "Schrute and Sons", "It didn't have a name"],
        ["Italian", "Indian", "Black", "Asian"],
        ["Meredith", "Kevin", "Creed", "Angela"],
        ["Her Father", "Dwight's Father", "Her Cousin", "Her Cat"],
        ["Hank", "Stanley", "Roger", "They never say"],
        ["Creed", "Micheal", "Kevin", "Dwight"],
        ["Yale", "Dartmouth", "Cornell", "Penn State"],
        ["Luigis", "Sbarro", "Pizza Hut", "Tony's Pie Company"],
        ["Creed", "Kevin", "Dwight", "All three"],
        ["Gift Cards to Chilis", "Dunder Mifflin Shirts", "Printer Cartidges", "Laptop Batteries"],
        ["Phyllis", "Meredith", "Oscar", "Ryan"],
    ]

    var answerKey = [0, 2, 2, 3, 0, 0, 2, 1, 3, 3, 1]

    var currentQuestion = 0;
    var correct = 0;
    var incorrect = 0;

    var timer = 30;


    // countdown timer

    var timerTick = setInterval(function () {
        $("#timer").html("<h2> <class='timerHead>" + timer + "</h2>");
        timer--;
        if (timer <= -1) {
            clearInterval(timerTick);
            incorrect++;
            $("#incorrect").append(incorrect);
            console.log(incorrect);
        }
    }, 1000);



    // $("#questions").text(questions[0]);
    // $("#answers").text(answers[0]);

    // displays the current question and answers

    function addQuestions() {
        i = currentQuestion;
        $("#questions").text(questions[i]);
        f = -1;
        answers[i].forEach(function () {
            f++;
            $("#ansT" + [f]).text(answers[i][f]);
            // console.log(f);
        });
    };

    // click function, pass button number to check answer function

    $("#ans0").on("click", function () {
        checkAns(0);
        console.log(0);
    })

    $("#ans1").on("click", function () {
        checkAns(1);
        console.log(1);

    })

    $("#ans2").on("click", function () {
        checkAns(2);
        console.log(2)

    })

    $("#ans3").on("click", function () {
        checkAns(3);
        console.log(3)

    })


    // function click(){
    // $("#ans" + f).on("click", function(){
    //     checkAns(this.val);
    //     console.log(this.val)
    // });
    // };
    
    
    // checks button press against answer key array, using the current question as the index indicatior
    
    function checkAns(i) {
        if (currentQuestion === 10){
            gameOver();
        } else if (i === answerKey[currentQuestion]) {
            correct++;
            $("#correct").text(correct);
            $("#timer").append("<img src='./assets/images/win" + currentQuestion + ".gif'>");
            console.log(currentQuestion);
            currentQuestion++;
            addQuestions();
            console.log("correct");
            timer = 30;
        } else {
            incorrect++;
            currentQuestion++;
            $("#incorrect").text(incorrect);
            addQuestions();
            timer = 30;
        }
        document.getElementById("ans0").checked = false;
        document.getElementById("ans1").checked = false;
        document.getElementById("ans2").checked = false;
        document.getElementById("ans3").checked = false;

    };

    function gameOver(){
        clearInterval(timerTick);
        $("#timer").text("Correct Answeers = " + correct + " | Incorrect Answers = " + incorrect);
    }

    addQuestions();
    $("#correct").append(correct);
    $("#incorrect").append(incorrect);

    //Timer function   
    // $("#timer").text(timer);

    // setInterval(function () {
    //     timer--;
    //     if (timer <= 0) {
    //         alert("Times up")
    //     }
    // });

    //correct answer function

    //incorrect answer function

    //display gif on correct







});