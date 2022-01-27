const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];

let timeBool = true;
let minus = false;
var t = 50;

hiScore = localStorage.getItem("highScore");
if (hiScore == null) {
  localStorage.setItem("hiScore", "");
}
btn.addEventListener("click", start);

function over() {
  timeBool = false;
  ovr.style.display = "block";
  hero.style.display = "none";
  ques.style.display = "none";
  tm.innerHTML = time.innerHTML;
}

function showQuestion(q, str) {
  if (q != 5) {
    hero.style.display = "none";
    ques.style.display = "block";

    ques.innerHTML = `
    <h1>${questions[q].questionText}</h1>
    <div class="option" value="a">${questions[q].options[0]}</div>
    <div class="option" value="b">${questions[q].options[1]}</div>
    <div class="option" value="c">${questions[q].options[2]}</div>
    <div class="option" value="d">${questions[q].options[3]}</div>
    <div id="st"></div>
  `;

    st.innerHTML = str;

    opts = document.getElementsByClassName("option");

    for (const element of opts) {
      element.addEventListener("click", () => {
        if (element.innerText == questions[q].answer) {
          q = q + 1;
          showQuestion(q, "Correct!")
        } else {
          q = q + 1;
          showQuestion(q, "Incorrect!")
          t = t - 10;
        }
      })
    }
  }
  else {
    over();
  }
}

function start() {
  hScore.style.display = "none";
  timeBool = true;
  setInterval(() => {
    if (timeBool) {
      time.innerHTML = t;
      t = t - 1;
      if (t == -1) {
        over();
      }
    }
  }, 1000);

  var q = 0;
  showQuestion(0, "");
}

ovrSbt.addEventListener("click", dispHScore);

function dispHScore() {
  if (localStorage.getItem("i") == null) {
    localStorage.setItem("i", 1);
  }
  i = parseInt(localStorage.getItem("i"));
  if (localStorage.getItem("score") == null) {
    localStorage.setItem("score", "");
  }
  scoreString = localStorage.getItem("score");
  scoreString = scoreString + `${i}. ${initial.value} - ${time.innerHTML} <br>`;
  localStorage.setItem("score", scoreString);
  localStorage.setItem("i", i + 1);
  showScore();
}

function showScore() {
  ovr.style.display = "none";
  hScore.style.display = "block";
  hero.style.display = "none";
  ques.style.display = "none";

  score = localStorage.getItem("score");
  if (score == "" || score == null) {
    ms.innerHTML = "No Entries found";
  } else {
    ms.innerHTML = localStorage.getItem("score");
  }
}

function clearHighScore() {
  localStorage.clear();
  showScore();
}