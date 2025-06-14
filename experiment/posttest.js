/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


 const myQuestions = [
  {
    question: "For the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g) + heat, what effect will increasing the temperature have on the equilibrium?",
    answers: {
      a: "Shift to the left (reactants)",
      b: "Shift to the right (products)",
      c: "No shift",
      d: "Shift to the right, then to the left"
    },
    correctAnswer: "a"
  },
  {
    question: "For the reaction 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), which of the following will increase the yield of SO₃?",
    answers: {
      a: "Decreasing the pressure",
      b: "Adding more O₂",
      c: "Adding more SO₃",
      d: "Increasing the temperature"
    },
    correctAnswer: "b"
  },
  {
    question: "You increased the concentration of reactant A, and the simulation showed a sharp shift toward product formation. If you immediately double the concentration of product B, what would most likely happen next?",
    answers: {
      a: "Reaction shifts further to the right",
      b: "Reaction shifts to the left to counter the excess B",
      c: "No change occurs",
      d: "The reaction becomes irreversible"
    },
    correctAnswer: "b"
  },
  {
    question: "In the simulation, when you removed some product but did not add any reactants, the reaction still shifted toward the products. Why?",
    answers: {
      a: "The system tries to restore balance by forming more product",
      b: "Removing product increases the pressure",
      c: "Reactants are unstable and must convert",
      d: "Heat is absorbed spontaneously"
    },
    correctAnswer: "a"
  },
  {
    question: "A catalyst is added to a reactor where equilibrium has already been established. What is its effect?",
    answers: {
      a: "It increases the yield of the products",
      b: "It has no effect since equilibrium is already reached",
      c: "It helps re-establish equilibrium more quickly if disturbed",
      d: "It lowers the temperature of the system"
    },
    correctAnswer: "c"
  },                                  ///// To add more questions, copy the section below 
    									                  ///// this line


    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
