const option1 = document.getElementById("opt1");
const option2 = document.getElementById("opt2");
const option3 = document.getElementById("opt3");
const option4 = document.getElementById("opt4");

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

// to change the question
function increase(opt) {
  num++;
  opt == answer ? isRight() : isWrong();
  mainFetch();
}
