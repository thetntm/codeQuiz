var testQuestion = {
    prompt:"What is the correct answer?",
    answers:[
        {
            statement:"this one",
            isCorrect:true
        },
        {
            statement:"that one",
            isCorrect:false
        },
        {
            statement:"um",
            isCorrect:false
        },
        {
            statement:"I don't know",
            isCorrect:false
        }
    ]
}
//This method of using objects as answers will allow for multiple correct answers.

var questions = [testQuestion];