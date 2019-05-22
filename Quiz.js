





/*1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

var total = 0;
var i = Math.floor(Math.random()*3)+1;


var Question = function(question,options,correct_answer) {


	this.question = question;
	
	this.correct_answer = correct_answer;


	



	}


Question.prototype.printQuestion = function()	{

	console.log(this.question);
}



var option1 = function()  {

	console.log('0: Hamid Ansari');
	console.log('1: Ram Nath Kovind');
	console.log('2: Manmohan Singh');
}
var question1 = new Question('Who is India\'s president',option1, 1);


var option2 = function()	{

	console.log('0: 1947');
	console.log('1: 1988');
	console.log('2: 1946');
}

var question2 = new Question('When did India become Independent?',option2, 0);

var option3 = function()  {


	console.log('0: 26 Jan ');
	console.log('1: 24 Jan ');
	console.log('2: 25 Jan ');
}

var question3 = new Question('When is republic Day?',option3, 0);


Question.prototype.compare = function() {

	eval('option'+i+'()');

	this.person = prompt("Please enter your answer");
	if(this.correct_answer == this.person) {

		console.log('yeah!');
	}


}

//first_question.compare();
eval('question'+i+'.printQuestion()');
eval('question'+i+'.compare()');

