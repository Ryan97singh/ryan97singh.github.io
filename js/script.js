var name, email;
var myQuestions = [
	{
		question:
			"1) Which of the following option leads to the portability and security of Java?",
		answers: {
			a: "Bytecode is executed by JVM",
			b: "The applet makes the Java code secure and portable",
			c: "Use of exception handling",
		},
		correctAnswer: "a",
	},
	{
		question: "2) Which of the following is not a Java features?",
		answers: {
			a: "Dynamic",
			b: "Architecture Neutral",
			c: "Use of pointers",
		},
		correctAnswer: "c",
	},
	{
		question: `3) Which of the following is a valid declaration of a char?
        public class MyFirst {  
            public static void main(String[] args) {
                MyFirst obj = new MyFirst(n);            }  
            static int a = 10;  
            static int n;
            int b = 5;
            int c;
            public MyFirst(int m) {
                System.out.println(a + ", " + b + ", " + c + ", " + n + ", " + m);
            }
            {
                b = 30;
                n = 20;            } 
            static            {
                a = 60;            }           }  `,
		answers: {
			a: "Instance block, method, static block, and constructor",
			b: "Static block, method, instance block, and constructor",
			c: "Static block, instance block, constructor, and method",
		},
		correctAnswer: "c",
	},
	{
		question: "4) The \u0021 article referred to as a",
		answers: {
			a: "Unicode escape sequence",
			b: "Octal escape",
			c: "Hexadecimal",
		},
		correctAnswer: "a",
	},
	{
		question: "5)_____ is used to find and fix bugs in the Java programs.",
		answers: {
			a: "JVM",
			b: "JDB",
			c: "JRE",
		},
		correctAnswer: "b",
	},
	{
		question: "6) Which of the following is a valid declaration of a char?",
		answers: {
			a: "char ch = '\\utea';",
			b: "char ca = tea;",
			c: "char cr = \\u0223;",
		},
		correctAnswer: "a",
	},
	{
		question:
			"7) What is the return type of the hashCode() method in the Object class?",
		answers: {
			a: "Object",
			b: "int",
			c: "long",
		},
		correctAnswer: "b",
	},
	{
		question: "8) Which of the following is a valid long literal?",
		answers: {
			a: "ABH8097",
			b: "904423",
			c: "0xnf029L",
		},
		correctAnswer: "c",
	},
	{
		question:
			"9) Evaluate the following Java expression, if x=3, y=5, and z=10:",
		answers: {
			a: "24",
			b: "23",
			c: "20",
		},
		correctAnswer: "a",
	},
	{
		question:
			"10) Evaluate the following Java expression, if x=3, y=5, and z=10:",
		answers: {
			a: "24",
			b: "23",
			c: "20",
		},
		correctAnswer: "a",
	},
	{
		question:
			"11) In which process, a local variable has the same name as one of the instance variables?",
		answers: {
			a: "Serialization",
			b: "Variable Shadowing",
			c: "Abstraction",
		},
		correctAnswer: "b",
	},
	{
		question: "12) Which package contains the Random class?",
		answers: {
			a: "java.util package",
			b: "java.lang package",
			c: "java.awt package",
		},
		correctAnswer: "a",
	},
	{
		question: "13) What do you mean by chained exceptions in Java?",
		answers: {
			a: "Exceptions occurred by the VirtualMachineError",
			b: "An exception caused by other exceptions",
			c: "Exceptions occur in chains with discarding the debugging information",
		},
		correctAnswer: "b",
	},
	{
		question: "14) In which memory a String is stored, when we create a string using new operator?",
		answers: {
			a: "Stack",
			b: "String memory",
			c: "Heap memory",
		},
		correctAnswer: "c",
	},
	{
		question: `15) What will be the output of the following program?
		public class Test2 {  
    	public static void main(String[] args) {  
        StringBuffer s1 = new StringBuffer("Complete");  
        s1.setCharAt(1,'i');  
        s1.setCharAt(7,'d');  
        System.out.println(s1);  
     }  
 }  `,
		answers: {
			a: "Complete",
			b: "Iomplede",
			c: "Cimpletd",
		},
		correctAnswer: "c",
	},
	{
		question: `16) Given that Student is a class, how many reference variables and objects are created by the following code?

		Student studentName, studentId;  
		studentName = new Student();  
		Student stud_class = new Student();`,
		answers: {
			a: "Three reference variables and two objects are created.",
			b: "Two reference variables and two objects are created.",
			c: "One reference variable and two objects are created.",
		},
		correctAnswer: "a",
	},
	{
		question: "17) Which of the following is a valid syntax to synchronize the HashMap?",
		answers: {
			a: "Map m = hashMap.synchronizeMap();",
			b: "HashMap map =hashMap.synchronizeMap();",
			c: "Map m1 = Collections.synchronizedMap(hashMap);",
		},
		correctAnswer: "c",
	},
	{
		question: "18) Which of the following is a mutable class in java?",
		answers: {
			a: "Ejava.lang.String",
			b: "java.lang.StringBuilder",
			c: "java.lang.Byte",
		},
		correctAnswer: "b",
	},
	{
		question: `19) What will be the output of the following program?
		abstract class MyFirstClass  
		{  
     		abstract num (int a, int b) {  }  
		} `,
		answers: {
			a: "No error",
			b: "Method is not defined properly",
			c: "Constructor is not defined properly",
		},
		correctAnswer: "b",
	},
	{
		question: `20) Given,

		int values[ ] = {1,2,3,4,5,6,7,8,9,10};  
		for(int i=0;i< Y; ++i)  
		System.out.println(values[i]);
		Find the value of value[i]?`,
		answers: {
			a: "None of the above",
			b: "15",
			c: "10",
		},
		correctAnswer: "a",
	},
	{
		question: `21)  What is the output of the below code snippet?
		#include<stdio.h>
		main() 
		{ 
   		int a = 1; 
   		float b = 1.3; 
   		double c;
      		c = a + b; 
   		printf("%.2lf", c);
		}`,
		answers: {
			a: "2.30",
			b: "2.3",
			c: "Compile Error",
		},
		correctAnswer: "a",
	},
	
	{
		question: `22)  What is the output of the following program?
		#include<stdio.h>
		main() 
		{
  		char *p = NULL;
      		printf("%c", *p);
		}`,
		answers: {
			a: "Compile error",
			b: "0",
			c: "Runtime Error",
		},
		correctAnswer: "c",
	},
	{
		question: `23) What is the output of the following program?
		#include<stdio.h>
		main()		{ 
  		struct student   		{ 
       int num = 10;
		}var;
  		printf("%d", var.num);
		}`,
		answers: {
			a: "10",
			b: "Compile Error",
			c: "Run time error",
		},
		correctAnswer: "b",
	},
	{
		question: `24) Which header statement is missing in the given below program to get the desired output?

		#include<stdio.h>
		#include<math.h>

		int main ()
		{
   		double x = 1234321;
  
  		 double result = sqrt(x);
  
   		printf("The square root of %.2lf is %.2lf\n", x, result);
   		return 0;
		}`,
		answers: {
			a: "#include<defs.h>",
			b: "#include<math.h>",
			c: "#include<stdlib.h>",
		},
		correctAnswer: "b",
	},
	{
		question: `25) Which of the following statement can be used to free the allocated memory?`,
		answers: {
			a: "remove(var-name);",
			b: "free(var-name);",
			c: "erase(var-name)",
		},
		correctAnswer: "b",
	},
	{
		question: `26) Which files will get closed through the fclose() in the following program?
		#include<stdio.h>
		int main (){
   		FILE *fs, *ft, *fp;   
   		fp = fopen("ABC", "r");
   		fs = fopen("ACD", "r");
   		ft = fopen("ADF", "r");
   		fclose(fp, fs, ft);
		return 0;
		}`,
		answers: {
			a: "ABC",
			b: "ACD",
			c: "Return Error",
		},
		correctAnswer: "c",
	},
	{
		question: `27) How many times Neeyamo is printed?
		int main() {
			int a = 0;
			while (a++);
			{
				printf("Neeyamo");
			}

			return 0;
		}
`,
		answers: {
			a: "0 time",
			b: "1 time",
			c: "Infinite times",
		},
		correctAnswer: "b",
	},
	{
		question: `28) The format identifier ‘%i’ is also used for _____ data type?`,
		answers: {
			a: "char",
			b: "int",
			c: "float",
		},
		correctAnswer: "b",
	},
	{
		question: `29) What is short int in C programming?` ,
		answers: {
			a: "Basic data type of C",
			b: "Qualifier",
			c: "short is the qualifier and int is the basic datatype",
		},
		correctAnswer: "c",
	},
	{
		question: `30) Which is correct with respect to size of the datatypes? `,
		answers: {
			a: "char > int > float",
			b: "int > char > float",
			c: "char < int < double",
		},
		correctAnswer: "c",
	},
	{
		question: `31) HTML stands for?`,
		answers: {
			a: "Hyper Text Markup Language",
			b: "High Text Markup Language",
			c: "Hyper Tabular Markup Language",
		},
		correctAnswer: "a",
	},
	{
		question: `32) which of the following tag is used to mark a begining of paragraph ?`,
		answers: {
			a: "<TD>",
			b: "<br>",
			c: "<P>",
		},
		correctAnswer: "c",
	},
	{
		question: `33) From which tag descriptive list starts ?`,
		answers: {
			a: "<LL>",
			b: "<DD>",
			c: "<DL>",
		},
		correctAnswer: "c",
	},
	{
		question: `34) Correct HTML tag for the largest heading is`,
		answers: {
			a: "<h1>",
			b: "<h6>",
			c: "<head>",
		},
		correctAnswer: "a",
	},
	{
		question: `35) The attribute of <form> tag`,
		answers: {
			a: "Method",
			b: "Action",
			c: "Both (a)&(b)",
		},
		correctAnswer: "c",
	},
	{
		question: `36) Markup tags tell the web browser`,
		answers: {
			a: "How to organise the page",
			b: "How to display the page",
			c: "How to display message box on page",
		},
		correctAnswer: "b",
	},
	{
		question: `37) HTML is a subset of`,
		answers: {
			a: "SGMT",
			b: "SGML",
			c: "SGMD",
		},
		correctAnswer: "b",
	},
	{
		question: `38) Which of the following is a container?`,
		answers: {
			a: "<SELECT>",
			b: "<BODY>",
			c: "Both (a) and (b)",
		},
		correctAnswer: "c",
	},
	{
		question: `39) <DT> tag is designed to fit a single line of our web page but <DD> tag will accept a`,
		answers: {
			a: "line of text",
			b: "full paragraph",
			c: "word",
		},
		correctAnswer: "b",
	},
	{
		question: "40) Character encoding is",
		answers: {
			a: "method used to represent numbers in a character",
			b: "method used to represent character in a number",
			c: "a system that consists of a code which pairs each character with a pattern,sequence of natural numbers or electrical pulse in order to transmit the data",
		},
		correctAnswer: "c",
	},
	{
		question: "41) Which of the following is correct about JavaScript?",
		answers: {
			a: "JavaScript is a lightweight, interpreted programming language.",
			b: "JavaScript has object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages",
			c: "All of the above",
		},
		correctAnswer: "c",
	},
	{
		question: "42) Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
		answers: {
			a: "getIndex()",
			b: "location()",
			c: " indexOf()",
		},
		correctAnswer: "c",
	},
	{
		question: "43) Which of the following function of String object causes a string to be italic, as if it were in an <i> tag?",
		answers: {
			a: "italics()",
			b: "fontsize()",
			c: "fontcolor()",
		},
		correctAnswer: "a",
	},
	{
		question: "44) Which of the following function of Array object applies a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value?",
		answers: {
			a: "pop()",
			b: "push()",
			c: "reduce()",
		},
		correctAnswer: "c",
	},
	{
		question: "45) Which of the following function of Array object sorts the elements of an array?",
		answers: {
			a: "toSource()",
			b: "sort()",
			c: "toString()",
		},
		correctAnswer: "b",
	},
	{
		question: "46) What does CSS stand for?",
		answers: {
			a: "Creative Style Sheets",
			b: "Colorful Style Sheets",
			c: "Cascading Style Sheets",
		},
		correctAnswer: "c",
	},
	{
		question: "47) White-box testing can be started:",
		answers: {
			a: "After installation",
			b: "After SRS creation",
			c: "After programming",
		},
		correctAnswer: "c",
	},
	{
		question: "48) Where in an HTML document is the correct place to refer to an external style sheet?",
		answers: {
			a: "At the end of the document",
			b: "In the <head> section",
			c: "At the top of the document",
		},
		correctAnswer: "b",
	},
	{
		question: "49) Exhaustive testing is:",
		answers: {
			a: "The reviewing of test plans",
			b: "The analysis of program code",
			c: "The use of black box testing",
		},
		correctAnswer: "a",
	},
	{
		question: "50) Which is the correct CSS syntax?",
		answers: {
			a: "body {color: black}",
			b: "{body;color:black}",
			c: "{body:color=black(body}",
		},
		correctAnswer: "a",
	},
	{
		question: "51) Select the component which is NOT part of Selenium suite.",
		answers: {
			a: "Selenium IDE",
			b: "Selenium Web",
			c: "SeleniumGrid",
		},
		correctAnswer: "b",
	},
	{
		question: "52) Select the language which is NOT supported by the Selenium RC.",
		answers: {
			a: "ASP",
			b: "Java",
			c: "C#",
		},
		correctAnswer: "a",
	},
	{
		question: "53) Selenium IDE stands for",
		answers: {
			a: "Selenium Intialization Development Environment",
			b: "Selenium Interrelated Development Environment",
			c: "Selenium Integrated Development Environment",
		},
		correctAnswer: "c",
	},
	{
		question: "54) The Selenium can?",
		answers: {
			a: "access controls within the desktop",
			b: "both web and desktop applications",
			c: "only test web applications",
		},
		correctAnswer: "c",
	},
	{
		question: "55) The order in which test levels are performed is",
		answers: {
			a: "Unit, Integration, Acceptance, System",
			b: "Unit, System, Integration, Acceptance",
			c: "It depends on the nature of a project",
		},
		correctAnswer: "c",
	},
	{
		question: "56) System testing is a",
		answers: {
			a: "Black box testing",
			b: "Grey box testing",
			c: "White box testing",
		},
		correctAnswer: "a",
	},
	{
		question: "57) What is “V” Model?",
		answers: {
			a: "Test Design Technique",
			b: "Test Type",
			c: "SDLC Model",
		},
		correctAnswer: "c",
	},
	{
		question: "58) Test cases are designed during which of the following stages?",
		answers: {
			a: "Test recording",
			b: "Test specification",
			c: "Test planning",
		},
		correctAnswer: "b",
	},
	{
		question: "59) The technique applied for usability testing is:",
		answers: {
			a: "White box",
			b: "Grey box",
			c: "Black box",
		},
		correctAnswer: "c",
	},
	{
		question: "60) Which of the following is not a Test Type?",
		answers: {
			a: "Database Testing",
			b: "Security Testing",
			c: "Statement Testing",
		},
		correctAnswer: "c",
	},
	
];

function generateQuiz(
	questions,
	quizContainer,
	resultsContainer,
	submitButton
) {
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
                    <div class="answers">${answers.join("")}</div>
                </div>
                `
			);
		}

		// finally combine our output list into one string of html and put it on the page
		quizContainer.innerHTML = output.join("");
	}

	function showResults(questions, quizContainer, resultsContainer) {
		// gather answer containers from our quiz
		var answerContainers = quizContainer.querySelectorAll(".answers");

		// keep track of user's answers
		var userAnswer = "";
		var numCorrect = 0;

		// for each question...
		for (var i = 0; i < questions.length; i++) {
			// find selected answer
			userAnswer = (
				answerContainers[i].querySelector(
					"input[name=question" + i + "]:checked"
				) || {}
			).value;

			// if answer is correct
			if (userAnswer === questions[i].correctAnswer) {
				// add to the number of correct answers
				numCorrect++;

				// color the answers green
				answerContainers[i].style.color = "green";
			}
			// if answer is wrong or blank
			else {
				// color the answers red
				answerContainers[i].style.color = "red";
			}
		}

		// show number of correct answers out of total
		var score = numCorrect + " out of " + questions.length;
		resultsContainer.innerHTML = score;
		sendEmail(score, name, email, numCorrect, questions.length);
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	document.getElementById("submit").onclick = function () {
		showResults(questions, quizContainer, resultsContainer);
	};
}

var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var startButton = document.getElementById("start-quiz");

startButton.onclick = function () {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;

	const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	// Validation
	if (name !== "" && email !== "") {
		if (EMAIL_REGEX.test(email)) {
			document
				.getElementById("contact-container")
				.classList.add("d-none");
			document.getElementById("start-container").classList.add("d-none");
			document.getElementById("quiz").classList.remove("d-none");
			document.getElementById("timer").classList.remove("d-none");
			document.getElementById("submit").classList.remove("d-none");

			var sixtyMinutes = 60 * 60,
				display = document.querySelector("#time");
			startTimer(sixtyMinutes, display);
		} else {
			alert("Please Enter a valid Email Address");
			// M.toast({ html: 'Please Enter a valid Email Address' });
		}
	} else {
		alert("Please Enter Your Name and Email to Continue");
	}
};

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function sendEmail(score, name, email, numCorrect, length) {
	var data = new FormData();
	data.append(
		"apikey",
		"55EF3CBB993E80E5B93EB7DB09CF933DFE8AC858FFE5CEDC807B7B860BCBBDF96F09EAEBD2C9166AAF6BE852391ACF5D"
	);
	data.append("subject", "Result: " + score);
	data.append("from", "ryan97singh@gmail.com");
	data.append("fromName", "Neeyamo");
	data.append("to", `kmrsnn@gmail.com,104416@neeyamo.com,${email}`);
	data.append("bodyText", `Name: ${name}\nEmail: ${email}`);
	fetch("https://api.elasticemail.com/v2/email/send", {
		method: "POST",
		body: data,
	})
		.then((res) => {
			if (res.status === 200) {
				// alert("Answers Submitted Successfully");
				if (parseInt(numCorrect, 10) >= parseInt(length / 6, 10)) {
					swal({
						title: "Result: Pass",
						text: score,
						icon: "success",
					}).then(() => {
						window.close();
					});
				} else {
					swal({
						title: "Result: Fail",
						text: score,
						icon: "error",
					}).then(() => {
						window.close();
					});
				}
			}
		})
		.catch((err) => console.error(err));
}

function startTimer(duration, display) {
	var timer = duration,
		minutes,
		seconds;
	setInterval(function () {
		minutes = parseInt(timer / 60, 10);
		seconds = parseInt(timer % 60, 10);

		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;

		display.textContent = minutes + ":" + seconds;

		if (--timer < 0) {
			document.getElementById("submit").click();
		}
	}, 1000);
}
