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

var answerButtons = [$("#button1"),$("#button2"),$("#button3"),$("#button4")];

//DOM Declarations: Output

var questionPrompt = $("#questionPrompt");

for (let i = 0; i < answerButtons.length; i++) {
    const b = answerButtons[i];
    b.dataIndex = i;
} //assigns each button object a "dataIndex" attribue equal to it's index in the array that can be used to help find out which button corresponds to which answer.

//Variables
var question_index = 0;

var current_score = 0;

var currentQuestion = questions[0];

//functions
function updateQuestion()
{
    //get the current question
    currentQuestion = questions[question_index]; 
    //set the prompt
    questionPrompt.text(currentQuestion.prompt);
    //set the answers
    for (let i = 0; i < answerButtons.length; i++) {
        const b = answerButtons[i];
        b.text(currentQuestion.answers[i].statement);
    }
}


// Event Assignment

startButton.click(
    function() {
        question_index = 0;
        current_score = 0;
        updateQuestion();
        displayOpener.css("display","none");
        displayQuestion.css("display","inline");
    }
)
