const question = document.getElementById("question");
const option1 = document.getElementById("opt1");
const option2 = document.getElementById("opt2");
const option3 = document.getElementById("opt3");
const option4 = document.getElementById("opt4");
let num = 0;
let answer = "";

// gets the data from the .json file
async function fetchData() {
  const response = await fetch("./questions.json");
  const data = await response.json();
  return data;
}

// gets the question and displays it
async function mainFetch() {
  let data = await fetchData();
  console.log("Loading result...");
  if (num >= data.length) {
    sessionStorage.setItem("right", right);
    sessionStorage.setItem("wrong", wrong);
    sessionStorage.setItem("total", total);
    window.location.href = "./result.html";
    // console.log(num + 1, data, `Right: ${right}`, `Wrong: ${wrong}`);
    return;
  }
  data = data[num];
  console.log(num + 1, data, `Right: ${right}`, `Wrong: ${wrong}`);

  question.innerHTML = `(${num + 1})<br>${data.question}`;
  option1.innerText = data.opt1;
  option2.innerText = data.opt2;
  option3.innerText = data.opt3;
  option4.innerText = data.opt4;
  answer = data.answer;
}

// Score checker
export let right = 0; // variable for correct answer
export let wrong = 0; // variable for wrong answer
export let total = 0; // variable for total answer

function isRight() {
  right++;
  total++;
}

function isWrong() {
  wrong++;
  total++;
}

// to change the question
function increase(opt) {
  num++;
  opt == answer ? isRight() : isWrong();
  mainFetch();
}

option1.addEventListener("click", () => {
  increase(option1.innerText);
});
option2.addEventListener("click", () => {
  increase(option2.innerText);
});
option3.addEventListener("click", () => {
  increase(option3.innerText);
});
option4.addEventListener("click", () => {
  increase(option4.innerText);
});

// Events
document.addEventListener("DOMContentLoaded", mainFetch);
// mainFetch();
