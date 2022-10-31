const rootDiv = document.querySelector(".root");
let score = JSON.parse(localStorage.getItem("score"));

function updateLocalstorage() {
  localStorage.setItem("score", JSON.stringify(score));
}

if (score >= 5) {
  alert(`Congratulations You have given ${score} correct answers`);
  score = 0;
}

function randomNums() {
  let num1 = Math.floor(Math.random() * 10);
  let num2 = Math.floor(Math.random() * 10);
  const html = `
  <h2 >What is ${num1} multiplye by ${num2}</h2>
  <form class="form"><input type="text" placeholder="Enter your answer"class="answer"/>
  <input type="submit" id="submit"/>
  </form> `;
  rootDiv.insertAdjacentHTML("beforeend", html);
  let result = num1 * num2;
  const scores = document.querySelector(".span_score");
  const formEl = document.querySelector(".form");

  formEl.addEventListener("submit", (e) => {
    let inputValue = +document.querySelector(".answer").value;
    if (result === inputValue) {
      score++;
      updateLocalstorage();
    } else {
      score--;
      alert(
        `The correct answer is ${result},You loose 1 score,your current score is ${score}`
      );

      updateLocalstorage();
    }
    if (score <= 0) {
      score = 0;
      updateLocalstorage();
    }
  });
  scores.innerHTML = `score:${score}`;
}

randomNums();

///// DB.json/GET/POST
const URL = "http://localhost:8888/score";
const Getmethod = async function (url) {
  return await fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
};
Getmethod(URL);
