//DOM Declarations: Displays for various stages of the game

var displayOpener = $("#quizOpener");

var displayQuestion = $("#quizQuestion");

var displayCorrect = $("#quizCorrect");

var displayIncorrect = $("#quizIncorrect");

var displayHighScoreInput = $("#quizHighScoreInput");

var displayHighScoreList = $("#quizHighScoreList");

//DOM Declarations: Input

var startButton = $("#quizStartButton");

var answerButtons = [$("#button0"),$("#button1"),$("#button2"),$("#button3")];

var inputInitials = $("#inputInitials");

var submitScoreButton = $("#submitHighScore");

var backToMainButton = $("#backToMain");

var clearHighScoresButton = $("#clearHighScores");

var goToHighScoresButton = $("#checkHighScores");

//DOM Declarations: Output

var highScoreList=$("#topThreeScores");

var questionPrompt = $("#questionPrompt");

var timer = $("#timer");

var score = $("#score");

var finalScore = $("#finalScore");

var timeBonusMessage = $("#timeBonus");

var endCondition=$("#endingCondition");

//Variables
var question_index = 0;

var current_score = 0;

var remaining_time = 0;

var time_bonus = true;

var time_bonus_window = 1000;

var currentQuestion = questions[0];

var currentAnswers = questions[0].answers;

var highScores = localStorage.getItem("highScores")

if (!highScores)
{
    highScores = [];
} else
{
    highScores=JSON.parse(highScores);
}

//Intervals and Timeouts

var questionTimeout = undefined;

var transitionTimeout = undefined;

var timerInterval = undefined;

//Game Variables

var correctAnswerPoints = 15;

var timeBonusPoints = 10;

var wrongAnswerPenalty = 10;

var completionBonus = 10;


//functions

//Update functions
function updateQuestion()
{
    if (!(question_index < questions.length)) {
        clearInterval(timerInterval);
        clearTimeout(questionTimeout);
        clearTimeout(transitionTimeout);

        current_score += completionBonus;
        updateScore();
        updateFinalScore();

        endCondition.text("You made it to the end! +" + completionBonus + " bonus points!");
        setQuizView(displayHighScoreInput);

        return false;
    }
    //set up shortcuts
    currentQuestion = questions[question_index];
    currentAnswers = questions[question_index].answers;
    //set the prompt
    questionPrompt.text(currentQuestion.prompt);
    //set the answers
    for (let i = 0; i < answerButtons.length; i++) {
        const b = answerButtons[i];
        b.text(currentAnswers[i].statement);
    }
    return true;
}

function updateTimer() {timer.text(remaining_time);}

function updateScore() {score.text(current_score);}

function updateFinalScore() {finalScore.text(current_score);}

function updateHighScores()
{
    highScoreList.empty();
    for (let i = 0; i < highScores.length; i++) {
        const scoreObject = highScores[i];
        highScoreList.append($("<li>" + scoreObject.initals + ": " + scoreObject.score + "</li>"));
    }
    
}

//useful functions

function setQuizView(view)
{
    displayOpener.css("display","none");

    displayQuestion.css("display","none");

    displayCorrect.css("display","none");

    displayIncorrect.css("display","none");

    displayHighScoreInput.css("display","none");

    displayHighScoreList.css("display","none");

    view.css("display","inline");
}

//event/interval/timeout functions

function answerClicked(event)
{
    let index = parseInt(this.id.replace("button",""));
    if (currentAnswers[index].isCorrect) {
        if (time_bonus) {
            current_score += 15;
            timeBonusMessage.text("Time Bonus! +" + timeBonusPoints + " points!")
        } else
        {
            timeBonusMessage.text("");
        }
        setQuizView(displayCorrect);

        current_score += 15;
        updateScore();
    } else
    {
        remaining_time -= wrongAnswerPenalty;
        updateTimer();
        setQuizView(displayIncorrect);
    }

    //Pause the timer while we show the result
    clearInterval(timerInterval)

    //prepare to load up the next question
    setTimeout(nextQuestion,1000);
}

function countDown()
{
    remaining_time -= 1;
    updateTimer();
    if (remaining_time<=0)
    {
        remaining_time = 0;

        //Code for end of the game.
        clearInterval(timerInterval);
        clearTimeout(questionTimeout);
        clearTimeout(transitionTimeout);

        endCondition.text("Time ran out! Better luck next time!");

        updateFinalScore();

        setQuizView(displayHighScoreInput);
    }
}

function nextQuestion()
{
    question_index++;

    time_bonus = true;

    questionTimeout = setTimeout(removeTimeBonus,time_bonus_window);
    timerInterval = setInterval(countDown,1000);

    if (updateQuestion())
    {
        setQuizView(displayQuestion);
    }
}

function removeTimeBonus() {time_bonus = false;}

function addHighScore()
{
    newScore = {initals:inputInitials.val().toUpperCase(),score:current_score}
    const startingLength = highScores.length;
    if (startingLength > 0)
    {
        for (let i = 0; i < startingLength; i++) {
            if (current_score > highScores[i].score)
            {
                highScores.splice(i,0,newScore);
            }
        }
        if (highScores.length > 3)
        {
            highScores.pop();
        }
        if (highScores.length < 3)
        {
            highScores.push(newScore);
        }
    } else
    {
        highScores.push(newScore);
    }
    localStorage.setItem("highScores",JSON.stringify(highScores));
}

function clearHighScores()
{
    highScores = [];
    localStorage.setItem("highScores","");
    updateHighScores();
}


// Event Assignment

startButton.click(
    function() {
        //set the timer
        for (let i = 0; i < questions.length; i++) {
            remaining_time += 15;
        }
        

        //reset variables
        question_index = 0;
        current_score = 0;
        time_bonus = true;

        //updates
        updateQuestion();
        updateTimer();
        updateScore();
        
        //setup intervals
        questionTimeout = setTimeout(removeTimeBonus,time_bonus_window);
        timerInterval = setInterval(countDown,1000);

        //show the question
        setQuizView(displayQuestion);
    }
)

clearHighScoresButton.click(clearHighScores);

backToMainButton.click(
    function() {setQuizView(displayOpener)}
)

goToHighScoresButton.click(
    function() {setQuizView(displayHighScoreList)}
)

submitScoreButton.click(function(){
    addHighScore();
    updateHighScores();
    setQuizView(displayHighScoreList);
}
);

for (let i = 0; i < answerButtons.length; i++) {
    const b = answerButtons[i];
    b.click(answerClicked);
}