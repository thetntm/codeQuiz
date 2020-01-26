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

var questions = 
[
    //question 1:
    {
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
    },
    //question 2:
    {
        prompt:"Ok, how about this one?",
        answers:[
            {
                statement:"Don't click me!",
                isCorrect:false
            },
            {
                statement:"Click me!",
                isCorrect:true
            },
            {
                statement:"Or click me!",
                isCorrect:true
            },
            {
                statement:"But not me!",
                isCorrect:false
            }
        ]
    }

]