$(document).ready(function () {
  //number of seconds on the timer
  var numberSecs =120;
  var intervalId;
  //questions and answers
  var correct = 0;
  var wrong = 0;
  var none = 0;
  var questCount = 0;
  var qCount = displayQuestion.length;

  //all questions answer and correct
  var allQuestions = [
    {
      question: "What is the largest bone in the body?",
      answers: ["Femur", "Ulna", "Radius", "Fibula"],
      correctAns: "Femur"
    },
    
    {
      question: "How many chambers does the heart have?",
      answers: ["1", "3", "4", "5"],
      correctAns: "4"
    },

    {
      question: "The stomach empties into the?",
      answers: ["Jejunum", "Ileum", "Duodenum", "Transverse colon"],
      correctAns: "Duodenum"
    },

    {
      question: "What vein empties directly into the brain?",
      answers: ["Brachiocephalic", "Internal jugular", "External jugular", "Subclavian"],
      correctAns: "Internal jugular"
    },

    {
      question: "The anatomical name for the thumb is?",
      answers: ["Hallux", "Pollex", "Phalanges ", "Thumpkin"],
      correctAns: "Pollex"
    },

    {
      question:  "All of the following are bones of the skull except:",
      answers: ["Frontal", "Parietal", "Ischium", "Sphenoid"],
      correctAns: "Ischium"
    },
    
    {
      question: "The largest internal organ of the body is the?",
      answers: ["Liver", "Lungs", "Spleen", "Gallbladder"],
      correctAns: "Liver"
    },

    {
      question: "All these hormones are excreted from the anterior pituitary gland except:",
      answers: ["Luteinizing hormone", "Follicle-stimulating hormone", "Gonadotropin-releasing hormone", "Antidiuretic hormone"],
      correctAns: "Antidiuretic hormone"
    },

    {
      question: "There are 4 parts of the spine.  Which one of the following is not one of them?",
      answers: ["Cephalic", "Sacral", "Thoracic", "Lumbar"],
      correctAns: "Cephalic"
    },

    {
      question: "The deep muscles of the abdomen are called",
      answers: ["Internal oblique", "Rectus abdominis", "Transverse abdominis", "Linea alba"],
      correctAns: "Transverse abdominis"
    }


  ]
  
 
  
    function run() {
    clearInterval(intervalId)
     intervalId = setInterval(decrement, 1000)
  }
   function decrement() {
    //decrease number by one
    numberSecs--;
    //show number in #timer id
     $("#timer").html('<h2 id= "tictoc">' + numberSecs + "</h2>")
    //number hits zero...
    if (numberSecs === 0) {
      stop();
      unAnswerd ++
       
      };
  };
  
   function stop() {
      clearInterval(intervalId);
    }
    run();

  function correctAnswer() {
    correct++;
    questCount++;
    displayQuestion();
   
   
    console.log(correct);
    $('#right').text(' ' + correct);

  }
  function wrongAnswer() {
    wrong++;
    questCount++;
 
   
  
    displayQuestion();
    console.log(wrong);
    $('#wrong').text(' ' + wrong);
  }

  function displayQuestion() {
  
    
   
    $(".question").text(allQuestions[questCount].question)
    $(".answer1").text(allQuestions[questCount].answers[0])
    $(".answer2").text(allQuestions[questCount].answers[1])
    $(".answer3").text(allQuestions[questCount].answers[2])
    $(".answer4").text(allQuestions[questCount].answers[3])

    $(".button").on("click", checkAnswer);
  }

  
  $(".startbutton").text("click here to start");
  $(".startbutton").on("click", function () {
    displayQuestion()

  });

  function checkAnswer () {
    if ($(this).text() === allQuestions[questCount].correctAns) {
      correctAnswer();
    }
    else {
      wrongAnswer();
    }
    $('.button').off('click', checkAnswer); // Turn click listener off for this set of questions
    $(".button").on("click", checkAnswer);
  }
  

});//end document ready
