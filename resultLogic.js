console.log("Dey");
const right = sessionStorage.getItem("right");
const wrong = sessionStorage.getItem("wrong");
const total = sessionStorage.getItem("total");

const totalRights = document.getElementById("passed");
const totalWrongs = document.getElementById("failed");
const score = document.getElementById("result");

console.log("Reached here");
totalRights.innerHTML = `Passed: ${right}/${total}`;
totalWrongs.innerHTML = `Failed: ${wrong}/${total}`;

let result = (right / total) * 100;
score.innerHTML = `Score: ${Math.round(result * 100) / 100}%`;
