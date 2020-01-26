var testQuestion = {
    prompt:"What is the correct answer?",
    answers:[
        {
            statement:"this one",
            correctAnswer:true
        },
        {
            statement:"that one",
            correctAnswer:false
        },
        {
            statement:"um",
            correctAnswer:false
        },
        {
            statement:"I don't know",
            correctAnswer:false
        }
    ]
}
//This method of using objects as answers will allow for multiple correct answers.

var questions = [testQuestion];