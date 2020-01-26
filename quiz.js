console.log(questions);

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

//DOM Declarations: Output

var questionPrompt = $("#questionPrompt");

//Variables
var question_index = 0;

var current_score = 0;

var currentQuestion = questions[0];

var currentAnswers = questions[0].answers;

//functions
function updateQuestion()
{
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
}

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

function answerClicked(event)
{
    let index = parseInt(this.id.replace("button",""));
    console.log(index);
    if (currentAnswers[index].isCorrect) {
        setQuizView(displayCorrect);
    } else
    {
        setQuizView(displayIncorrect);
    }
    debugger;
}


// Event Assignment

startButton.click(
    function() {
        question_index = 0;
        current_score = 0;
        updateQuestion();
        setQuizView(displayQuestion);
    }
)

for (let i = 0; i < answerButtons.length; i++) {
    const b = answerButtons[i];
    b.click(answerClicked);
}