var myQuestions = [{
        question: "1) Which of the following option leads to the portability and security of Java?",
        answers: {
            a: 'Bytecode is executed by JVM',
            b: 'The applet makes the Java code secure and portable',
            c: 'Use of exception handling'
        },
        correctAnswer: 'a'
    },
    {
        question: "2) Which of the following is not a Java features?",
        answers: {
            a: 'Dynamic',
            b: 'Architecture Neutral',
            c: 'Use of pointers'
        },
        correctAnswer: 'c'
    },
    {
        question: `3) Which of the following is a valid declaration of a char?
        public class MyFirst {  
            public static void main(String[] args) {
                MyFirst obj = new MyFirst(n);
            }  
            static int a = 10;  
            static int n;
            int b = 5;
            int c;
            public MyFirst(int m) {
                System.out.println(a + ", " + b + ", " + c + ", " + n + ", " + m);
            }
            // Instance Block  
            {
                b = 30;
                n = 20;
            }
            // Static Block  
            static
            {
                a = 60;
            }   
        }  `,
        answers: {
            a: 'Instance block, method, static block, and constructor',
            b: 'Static block, method, instance block, and constructor',
            c: 'Static block, instance block, constructor, and method'
        },
        correctAnswer: 'c'
    },
    {
        question: "4) The \u0021 article referred to as a",
        answers: {
            a: 'Unicode escape sequence',
            b: 'Octal escape',
            c: 'Hexadecimal'
        },
        correctAnswer: 'a'
    },
    {
        question: "5)_____ is used to find and fix bugs in the Java programs.",
        answers: {
            a: 'JVM',
            b: 'JDB',
            c: 'JRE'
        },
        correctAnswer: 'b'
    },
    {
        question: "6) Which of the following is a valid declaration of a char?",
        answers: {
            a: 'char ch = \'\\utea\';',
            b: 'char ca = tea;',
            c: 'char cr = \\u0223;'
        },
        correctAnswer: 'a'
    },
    {
        question: "7) What is the return type of the hashCode() method in the Object class?",
        answers: {
            a: 'Object',
            b: 'int',
            c: 'long'
        },
        correctAnswer: 'b'
    },
    {
        question: "8) Which of the following is a valid long literal?",
        answers: {
            a: 'ABH8097',
            b: '904423',
            c: '0xnf029L'
        },
        correctAnswer: 'c'
    },
    {
        question: "9) Evaluate the following Java expression, if x=3, y=5, and z=10:",
        answers: {
            a: '24',
            b: '23',
            c: '20'
        },
        correctAnswer: 'a'
    },
    {
        question: "10) Evaluate the following Java expression, if x=3, y=5, and z=10:",
        answers: {
            a: '24',
            b: '23',
            c: '20'
        },
        correctAnswer: 'a'
    },
    {
        question: "11) In which process, a local variable has the same name as one of the instance variables?",
        answers: {
            a: 'Serialization',
            b: 'Variable Shadowing',
            c: 'Abstraction'
        },
        correctAnswer: 'b'
    },
    {
        question: "12) Which package contains the Random class?",
        answers: {
            a: 'java.util package',
            b: 'java.lang package',
            c: 'java.awt package'
        },
        correctAnswer: 'a'
    },
    {
        question: "13) Which package contains the Random class?",
        answers: {
            a: 'java.util package',
            b: 'java.lang package',
            c: 'java.awt package'
        },
        correctAnswer: 'a'
    },
];

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for (var i = 0; i < questions.length; i++) {

            // first reset the list of answers
            answers = [];

            // for each available answer to this question...
            for (letter in questions[i].answers) {

                // ...add an html radio button
                answers.push(
                    `
                    <label>
                        <input type="radio" name="question${i}" value="${letter}">
                        <span>${letter}: ${questions[i].answers[letter]}<span>
                    </label>
                    `
                );
            }

            // add this question and its answers to the output

            output.push(
                `
                <div class="question-container">
                    <div class="question">
                        <code>${questions[i].question}</code>
                    </div>
                    <div class="answers">${answers.join('')}</div>
                </div>
                `
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML =
            `<div class="row">
                <div class="col s10">
                    <div class="row">
                        <div class="col s12 m6">
                            <div class="row">
                                <div class="input-field">
                                    <input id="name" name="name" type="text" required />
                                    <label for="name">Name</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field">
                                    <input id="email" name="email" type="email" required />
                                    <label for="email">Email</label>
                                </div>
                            </div>
                        </div>
                        <div class="col s12 m6">
                            <div class="right">
                                <h5>Timer: 60:00<h5>
                            </div>
                        </div>
                    </div>
                ${output.join('')}
                <button id="submit" class="btn waves-effect waves-light" type="submit" name="action">Get Results</button>
                </div>
            </div>`;
    }

    function showResults(questions, quizContainer, resultsContainer) {

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;

        const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        // Validation
        if (name !== '' && email !== '') {
            if (EMAIL_REGEX.test(email)) {
                // gather answer containers from our quiz
                var answerContainers = quizContainer.querySelectorAll('.answers');

                // keep track of user's answers
                var userAnswer = '';
                var numCorrect = 0;

                // for each question...
                for (var i = 0; i < questions.length; i++) {

                    // find selected answer
                    userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

                    // if answer is correct
                    if (userAnswer === questions[i].correctAnswer) {
                        // add to the number of correct answers
                        numCorrect++;

                        // color the answers green
                        answerContainers[i].style.color = 'green';
                    }
                    // if answer is wrong or blank
                    else {
                        // color the answers red
                        answerContainers[i].style.color = 'red';
                    }
                }

                // show number of correct answers out of total
                var score = numCorrect + ' out of ' + questions.length;
                resultsContainer.innerHTML = score;
                sendEmail(score, name, email);
            } else {
                alert('Please Enter a valid Email Address');
                // M.toast({ html: 'Please Enter a valid Email Address' });
           }
        } else {
            alert('Please Enter Your Name and Email to Continue');
        }
    }

    // show the questions
    showQuestions(questions, quizContainer);

    // when user clicks submit, show results
    document.getElementById('submit').onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
    }
}

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function sendEmail(score, name, email) {
    var data = new FormData();
    data.append('apikey', '55EF3CBB993E80E5B93EB7DB09CF933DFE8AC858FFE5CEDC807B7B860BCBBDF96F09EAEBD2C9166AAF6BE852391ACF5D');
    data.append('subject', 'Result: ' + score);
    data.append('from', 'ryan97singh@gmail.com');
    data.append('fromName', "Neeyamo")
    data.append('to', `ryan97singh@gmail.com,kmrsnn@gmail.com,${email}`);
    data.append('bodyText', `Name: ${name}\nEmail: ${email}`);
	fetch('https://api.elasticemail.com/v2/email/send', {
		method: 'POST',
		body: data
    }).then(res => {
        if (res.status === 200) {
            alert('Answers Submitted Successfully')
        }
    }).catch(err => console.error(err));
}
