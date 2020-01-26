// var testQuestion = {
//     prompt:"What is the correct answer?",
//     answers:[
//         {
//             statement:"this one",
//             isCorrect:true
//         },
//         {
//             statement:"that one",
//             isCorrect:false
//         },
//         {
//             statement:"um",
//             isCorrect:false
//         }
//         {
//             statement:"I don't know",
//             isCorrect:false
//         }
//     ]
// }
//This method of using objects as answers will allow for multiple correct answers.

var questions = 
[
    //question 1:
    {
        prompt:"64/4 = ?",
        answers:[
            {
                statement:"8",
                isCorrect:false
            },
            {
                statement:"12",
                isCorrect:false
            },
            {
                statement:"14",
                isCorrect:false
            },
            {
                statement:"16",
                isCorrect:true
            }
        ]
    },
    //question 2:
    {
        prompt:"Which of these creates a float?",
        answers:[
            {
                statement:"var x = 10",
                isCorrect:false
            },
            {
                statement:"var x = 4/2",
                isCorrect:false
            },
            {
                statement:"var x = 46/23",
                isCorrect:false
            },
            {
                statement:"var x = 68/8",
                isCorrect:true
            }
        ]
    },
    //question 3
    {
        prompt:"how do you convert x from a string to an int?",
        answers:[
            {
                statement:"x = x.toInt()",
                isCorrect:false
            },
            {
                statement:"x = parseInt(x)",
                isCorrect:true
            },
            {
                statement:"x = toInt(x)",
                isCorrect:false
            },
            {
                statement:"x = x.parseInt()",
                isCorrect:false
            }
        ]
    },
    //question 4
    {
        prompt:"Which of these languages requires a semicolon after most statements?",
        answers:[
            {
                statement:"Java",
                isCorrect:true
            },
            {
                statement:"Swift",
                isCorrect:false
            },
            {
                statement:"Python",
                isCorrect:false
            },
            {
                statement:"Javascript",
                isCorrect:false
            }
        ]
    },
    //question 5
    {
        prompt:"Which old-school language is used by default in Xcode for programming Apple Computer and Iphone apps?",
        answers:[
            {
                statement:"Python",
                isCorrect:false
            },
            {
                statement:"Objective C",
                isCorrect:true
            },
            {
                statement:"C#",
                isCorrect:false
            },
            {
                statement:"C++",
                isCorrect:false
            }
        ]
    },
    //question 6
    {
        prompt:"what happens if you call a function as the iterator of a for loop?",
        answers:[
            {
                statement:"the function will run every loop",
                isCorrect:true
            },
            {
                statement:"the for loop will give up and move on to the next line of code",
                isCorrect:false
            },
            {
                statement:"you get an error.",
                isCorrect:false
            },
            {
                statement:"your computer punches you in the face.",
                isCorrect:false
            }
        ]
    },
    //question 7
    {
        prompt:"if you define a function named inside inside a function named outside, and you call inside outside of outside by passing it on as outside's return value, can you use values defined inside outside inside inside?",
        answers:[
            {
                statement:"yes, because the values are global",
                isCorrect:false
            },
            {
                statement:"No, because the values were defined outside inside",
                isCorrect:false
            },
            {
                statement:"No, because you're calling inside outside of outside",
                isCorrect:true
            },
            {
                statement:"yes, because outside was an inside job",
                isCorrect:false
            }
        ]
    }

]