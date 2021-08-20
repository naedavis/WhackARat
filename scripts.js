const rat = document.querySelector(".rat");
const timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");
const square = document.querySelectorAll(".square");

let result = 0;

// remving rat from any square that it might be in before beginning
function randomSquare() {
  const square = document.querySelectorAll(".square");
  square.forEach((className) => {
    className.classList.remove("rat");
  });
  // finding a position for the rat
  let randomPosition = parseInt(Math.random() * 9);
  console.log(randomPosition);
  document.getElementById(`${randomPosition}`).classList.add("rat");

  // where the user has to hit
  hitPosition = randomPosition.id;
}

square.forEach((id) => {
  // mouseup when you hit the mouse at the id that equals the hit postion that means we win
  id.addEventListener("mouseup", () => {
    if (id.id === hitPosition) {
      result ++ 
      score.textContent = result;
      hitPosition= null
    }
  });
});

function moveRat() {
//   let timerId = null;
  timerId = setInterval(randomSquare, 500);
}

moveRat();

function countDown(){
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime == 0){
        clearInterval(countDownId)
        clearInterval(timerId)
        alert('GAME OVER' + result)
    }
}

let countDownId = setInterval(countDown, 1000)



