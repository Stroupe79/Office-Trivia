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
    
    var timer=30

    var timerTick = setInterval(function() {
        $("#timer").html("<h2> <class='timerHead>" + timer + "</h2>");
            timer--;
        if(timer <= -1){
            clearInterval(timerTick);
            incorrect ++;
            console.log(incorrect);
        }
    }, 1000);

    

    // $("#questions").text(questions[0]);
    // $("#answers").text(answers[0]);

    function addQuestions() {
        i = currentQuestion;
        $("#questions").text(questions[i]);
        f = -1;
        answers[i].forEach(function () {
            f++;
            $("#answers").append("<div> <input type='radio' id='ans" + [f] + "' class='ansButton m-3'>" + answers[i][f]);
        });

    };

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