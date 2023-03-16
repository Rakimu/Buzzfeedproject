document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);

function buzzfeedQuiz() {

  // task 4: declare variables for the html elements you'll use as selectors later. You need the submit button, display div, and all three inputs for your questions.
  
  let button = document.querySelector(".submit");
  let displayResult = document.querySelector(".displayResult");
  let q1 = document.querySelector(".q1");
  let q2 = document.querySelector(".q2");
  let q3 = document.querySelector(".q3");

  
  // task 5: declare variables for values we'll set later. You'll need one for an image source, a result and a score for each question.
  let imgSrc;
  let character;
  let q1Score;
  let q2Score;
  let q3Score;



  button.onclick = function() {

    // task 6: Declare user input variables for each of your questions. If you have three questions, you should have three variables. These variables should equal the value of the user input for each question.


  let q1ans = q1.value;
  let q2ans = q2.value;
  let q3ans = q3.value;

    // task 7: create a conditional statement for the responses to Question 1 based on the user input.

    
  if (q1ans ==="rural"){
    q1Score = 3
    q1ans.innerHTML = "rural"
  }
  else if (q1ans ==="suburban"){
    q1Score = 2
    q1ans.innerHTML = "suburban"
  }

  else if (q1ans ==="urban"){
    q1Score = 1
    q1ans.innerHTML = "urban"
  }
    
  
    // task 8: create a conditional statement for the responses to Question 2 based on the user input.




    // task 9: create a conditional statement for the responses to Question 3 based on the user input.



    // task 10: declare a variable for the total score of the quiz and set it equal to the sum of each question score.




    // task 11: create a conditional statement for the result to the quiz based on the total score. Using string interpolation, display these to the page: the result, an image that corresponds and a message to go with it.



  };
}